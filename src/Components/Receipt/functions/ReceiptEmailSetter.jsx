
// eslint-disable-next-line import/no-anonymous-default-export
export default (e,setter) => {
    const value = e.target.innerText
    console.log(value)
    localStorage.setItem("Email",value)
    setter(()=>value)
}