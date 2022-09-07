import data from "../../Items/ItemsChangeToPromise"

export const FetchItems = async(setter) => {
    const FetchedData = await data()
    setter(FetchedData)
}

export const SelectionItem = (e,setter,fullItems,Name,Reference,setterOfSearch,setterOfGT,table,disAmu) => { 
    Reference.current.value = ""
    setterOfSearch(()=>[])
    const select = fullItems.find((i)=>i.Name === Name)
    const Total = table.length === 0 ? 0 + select.Price : Number(parseInt(String(table.reduce((acc,val)=>acc+val.Price,0))).toFixed(1)) + select.Price
    const DiscountTotal = Total - ((Total*disAmu)/100)
    setterOfGT(()=>Number(DiscountTotal.toFixed(0)))
    setter(prevValue => [...prevValue,select])
    
}