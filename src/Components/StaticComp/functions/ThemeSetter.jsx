
export const ThemeSetter = (setter) =>{
    setter((curV)=>{
        const ConChanger = Boolean(!curV)
        localStorage.setItem("DarkTheme",ConChanger)
        return ConChanger
    })
}