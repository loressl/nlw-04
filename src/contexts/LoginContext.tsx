import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { getUser } from '../service/users'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { AxiosResponse } from 'axios'

interface LoginContextData {
    username: String;
    validUsername: String;
    name: String;
    searchUser: () => void;
    setUsername: (username) => void;
    exit: () => void;
}

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider({ children }: LoginProviderProps) {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [validUsername, setValidUsername] = useState('')
    const router = useRouter()

    useEffect(() => {
        setName(Cookies.get('name') === undefined ? '' : Cookies.get('name'))
        setUsername(Cookies.get('username') === undefined ? '' : Cookies.get('username'))
    }, [])

    const searchUser = useCallback(() => {
        getUser(username).then((response) => {
            if (response.message !== 'Not Found') {
                setValidUsername(String(200))
                setName(response.name)
                Cookies.set('name', String(response.name))
                Cookies.set('username', String(username))
            } else {
                setValidUsername('error')
            }
        })
    }, [username])

    const exit = useCallback(() => {
        Cookies.remove('name')
        Cookies.remove('username')
        setUsername('')
        setValidUsername('')
        setName('')
        router.replace('/')
    }, [])

    return (
        <LoginContext.Provider
            value={{
                name,
                username,
                validUsername,
                setUsername,
                searchUser,
                exit
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}