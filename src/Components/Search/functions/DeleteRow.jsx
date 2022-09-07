export const DeleteRow = (id,items,setter,setGT,Price,RSetter) => {
    const DeleteItem = items.filter(i => i.id !== id)
    if(DeleteItem.length === 0){
        RSetter({DisCountAmount:0,QuantityAr:[],DiscountAmount:0,DAFreeGT:0})
    }
    const Total = Number(parseInt(String((DeleteItem.reduce((acc,i)=>i.Price+acc,0)))).toFixed(0))
    const GT = Total - ((Total*Number(Price.toFixed(0))/100))
    setGT(()=>Number(GT.toFixed(0)))
    setter(DeleteItem)
}