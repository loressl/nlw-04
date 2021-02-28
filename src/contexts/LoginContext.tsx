import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { getUser } from '../service/users'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

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
        setName(Cookies.get('name'))
        setUsername(Cookies.get('username'))
    }, [])

    const searchUser = useCallback(() => {
        getUser(username).then(response => {
            if (response !== 'error') {
                setValidUsername(String(response.status))
                setName(response.data.name)
                Cookies.set('name', String(response.data.name))
                Cookies.set('username', String(username))
            } else {
                setValidUsername(response)
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