export const discount = (e,setter,table,amuSetter) => {
    const value = Number(e.target.value)
    if(!Number.isNaN(value) && value <= 100 && value >= 0){
        /*
            !Discount'Price'-formulae is (GrandTotal - GrandTotal%Value)
         */
        /* console.log(table) */
        const actualTotal = Number(parseInt(table.reduce((acc,val)=>acc+val.Price,0)).toFixed())
        const DiscountPrice = actualTotal - ((actualTotal*Number(value.toFixed(0)))/100)
        setter(()=>Number(DiscountPrice.toFixed(0)))
        const val = String(value).split(".")
        amuSetter(()=>Number(val[0]))
    }else{
        return
    }
} 