import { createContext, ReactNode, useState } from "react";
import { getUser } from '../service/users'

interface LoginContextData {
    username: string;
    validUsername: string;
    searchUser: () => void;
    setUsername: (username) => void;
}

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider({ children }: LoginProviderProps) {
    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState('')

    function searchUser() {
        getUser(username).then(response => {
            if (response !== 'error') {
                setValidUsername(String(response.status))
            } else {
                setValidUsername(response)
            }
        })
    }

    return (
        <LoginContext.Provider
            value={{
                username,
                validUsername,
                setUsername,
                searchUser,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}