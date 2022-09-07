export const ChangePriceCrackers = (e,setter,id,allValues,stdPrice,setterGT,DA) => {
    const value = Number((e.target.value))
    if(!Number.isNaN(value)){
        const Price = Number(Number((stdPrice*value)).toFixed(0))
        const table = allValues.map(i=>i.id === id ? {...i,Price} : i)
        const GT = Number(parseInt(String(table.reduce((acc,val)=>acc+val.Price,0))).toFixed(0))
        const DiscountPrice = GT - ((GT*DA)/100)
        setter(()=>table)
        setterGT(()=>Math.floor(DiscountPrice))
    }else{
        return 
    }
}





