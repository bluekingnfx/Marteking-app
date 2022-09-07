export const IdBasedRemove = (table,data) => {
    const ids = table.map(i=>i)
    const RemoveIdDup = data.map( item => {
        for(let i = 0;i>ids.length;i++){
            if(ids[i] === item.id){
                return false
            }
        }
        return item
    }).filter(i=>i)
    return RemoveIdDup
}