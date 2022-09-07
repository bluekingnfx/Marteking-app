

export const SetAddress = (e,setter) => {
    const value = e.target.innerText
    localStorage.setItem("Address",value)
    setter(()=>value)
}