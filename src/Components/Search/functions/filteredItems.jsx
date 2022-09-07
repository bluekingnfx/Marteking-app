import { NamedBaseRemove } from "./NameBaseRemove"
import { IdBasedRemove } from "./IdBasesRemove"
import { FinalizeDropMenu } from "./FinalizeDropMenu"
export const filteredItems = (e,data,setSearchItems,table) => {
    const value = (e.target.value).trim()
    if(value.length === 0){
        setSearchItems(()=>[])
        return
    }
    const removeDupId = IdBasedRemove(table,data)
    const DupFree = NamedBaseRemove(table,removeDupId,value)
    const FilteredItems = FinalizeDropMenu(DupFree,value)
    setSearchItems(FilteredItems)
    
}


