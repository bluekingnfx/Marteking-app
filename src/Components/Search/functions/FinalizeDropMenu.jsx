export const FinalizeDropMenu = (DistinctArray,searchTerm) =>{
    const Pattern = /(^[a-z])/i
    const text = Pattern.test(searchTerm)
    let Filter
    if(text === false){
        Filter = DistinctArray.filter(i=>{
            const word = i.TamilName
            return word.includes(searchTerm)
        }).splice(0,15)
    }else{
        Filter = DistinctArray.filter( data => {
            const word = data.Name
            return word.toLowerCase().includes(searchTerm.toLowerCase())
        })
        return Filter.splice(0,10)
    }
    return Filter
}



