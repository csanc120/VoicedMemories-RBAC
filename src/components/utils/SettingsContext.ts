'use client'
import { createContext, useContext} from "react";

interface menuOption {
    menuItem:string,
    setMenuItem: (menuItem:string) => void
}

//Settings Context Creation with a typed menuOption
export const SettingsContext = createContext<menuOption | undefined>(undefined);

//Check whether the context created is null or not. Helps with type safety
export const useSettingsContext = () => {
    const createdContext = useContext(SettingsContext);
    if(!createdContext){
        throw new Error("Settings Context is null!");
    }
    return createdContext;
}