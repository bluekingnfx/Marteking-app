import React,{createContext,useState} from "react"

export const DarkThemeProvider = createContext()

export const DarkTheme = ({children}) => {
    const localValue = localStorage.getItem("DarkTheme") 
    const initialState = localValue === null || localValue === "false" ? false : true
    const [darkTheme,setDarkTheme] = useState(initialState)
    return <DarkThemeProvider.Provider value={{
        Theme:[darkTheme,setDarkTheme]
    }}>
        {
            children
        }
    </DarkThemeProvider.Provider>
}