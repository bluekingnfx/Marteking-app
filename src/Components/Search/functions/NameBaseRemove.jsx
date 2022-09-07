export const NamedBaseRemove = (table,IdDupFreeArray,searchTerm) => {
    const Pattern = /(^[a-z])/i
    const test = Pattern.test(searchTerm)
    let RemoveDup
    if(!test){
        const TamilNames = table.map(i=>i.TamilName)
        RemoveDup = IdDupFreeArray.map(i=>{
            for(let j = 0; j<IdDupFreeArray.length ;j++){
                if(TamilNames[j] === i.TamilName) return false
            }
            return i
        }).filter(i=>i)
    }else{
        const Names = table.map(i=>i.Name)
        RemoveDup = IdDupFreeArray.map( item => {
            for(let i=0; i<IdDupFreeArray.length ;i++){
                if(item.Name === Names[i]){
                    return false
                }
            }
            return item
        }).filter(i=>i)
    }
    return RemoveDup
}