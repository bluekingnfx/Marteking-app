
// eslint-disable-next-line import/no-anonymous-default-export
export default (e,setter) => {
    const value = e.target.value
    localStorage.setItem("PhoneNo",value)
    setter(()=>value)
}