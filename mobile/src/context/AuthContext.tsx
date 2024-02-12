import React, { useContext, useEffect, createContext, useState, ReactNode } from "react";
import { useSecureLocalStorage } from "../local/SecureLocalStorage";
import { User } from "../model/User";


interface IAuthContext {
    user: User | null;
    saveUser(user: User): void
    clearUser(): void
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const { getItem, setItem, removeItem } = useSecureLocalStorage();

    useEffect(() => {
        const getUser = async () => {
            const user = await getItem('user');
            if (user) {
                setUser(JSON.parse(user));
            }
        };

        getUser();
    }, []);

    const saveUser = (user: User) => {
        setUser(user);
        setItem('user', JSON.stringify(user));
    };

    const clearUser = () => {
        setUser(null);
        removeItem('user');
    };

    return (
        <AuthContext.Provider
            value={{
                user, saveUser, clearUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (context === undefined)
        throw new Error('useAuthContext should be used within a AuthContextProvider ')

    return context
}