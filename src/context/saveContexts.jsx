import { useState , createContext } from "react";


export const SaveContext = createContext()


export function SaveProvider({children}){
    const [usersavedItems , setUserSaveItems] = useState([]);
    //by backend this will differ per user still dont know how it's gonna work yet

    function saveToggle(cardId){
        const alreadySaved = usersavedItems.includes(cardId)
        if (alreadySaved){
            setUserSaveItems(usersavedItems.filter((id)=> id!==cardId))
        } else {
            setUserSaveItems([...usersavedItems, cardId])
        }
       
    }
    return (
        <SaveContext.Provider value={{ saveToggle,usersavedItems }}>
            {children}
        </SaveContext.Provider>
    )

}