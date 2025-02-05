import { PropsWithChildren, useContext, useState } from "react";

export const UserContext = useContext()

const UserProvider = ({children}:PropsWithChildren) => {
    const [name, setName] = useState('')

    const changeName = (newName:string) => {
        setName(newName)
    }

    return (
        <UserContext.Provider value={{name, changeName}}>{children}</UserContext.Provider>
    )
}

export default UserProvider