import { ReactNode, createContext, useEffect, useState } from "react"
import RNSecureStorage, { ACCESSIBLE } from "rn-secure-storage"
import { SecureStorageKey } from "../local/LocalConfig"

export interface UserContextType {
    user: UserEntity | null;
    userInitialized: boolean;
    updateUser: (user: UserEntity) => Promise<void>;
}

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    userInitialized: false,
    updateUser: async (_: UserEntity) => { }
});


export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [userInitialized, setUserInitialized] = useState(false)
    const [user, setUser] = useState<UserEntity | null>(null) // could use some default values instead of empty object

    // On mount, get the current value of `appSettings` in AsyncStorage
    useEffect(() => {
        RNSecureStorage
            .getItem(SecureStorageKey.USER)
            .then(user => {
                // If data is returned, the storage item existed already and we set the appSettings state to that.
                if (user) {
                    setUser(JSON.parse(user))
                }
                // If data is null, the appSettings keeps the default value (in this case an empty object)/

                // We set appSettingsInitialized to true to signal that we have successfully retrieved the initial values.
                setUserInitialized(true)
            })
    }, [])

    const updateUser = async (user: UserEntity) => {
        RNSecureStorage.setItem(SecureStorageKey.USER, JSON.stringify(user), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
    }

    return (
        <UserContext.Provider value={{
            user,
            userInitialized,
            updateUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}