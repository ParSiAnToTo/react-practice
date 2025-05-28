import { createContext, useState } from 'react'

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [selectUser, setSelectUser ] = useState(null);

    return (
        <UserContext.Provider value={{ selectUser, setSelectUser }}>
            {children}
        </UserContext.Provider>
    );
}