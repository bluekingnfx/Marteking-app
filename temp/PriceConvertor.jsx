const PriceConvertorComp = ({Phase,setter,table,id})  => {
    return <>
        <span style={{width:"40%"}}>
            {Phase === "solid" ? (
            <select style={{width:"100%"}} onChange={ e => priceConvertor(e,setter,table,id)}>
                <option>Kg</option>
                <option>g</option>
            </select>  ) : 

            <select style={{width:"100%"}} onChange={ e => priceConvertor(e,setter,table,id)}>
                <option>L</option>
                <option>ml</option>
            </select> }
        </span>
    </>
}



export const priceConvertor = (e,setter,table,id) => {
    const selection = e.target.value
    const ChangedValue = table.find(i=>i.id === id)
    const {Price,Phase,unitOfQuantity} = ChangedValue
    const PhaseSelected = Phase
    if(PhaseSelected==="solid"){
        if(selection === "g" && unitOfQuantity === "Kg"){
            const conversionItem = table.map(i=>i.id === id ? {...i,Price:Price/1000,unitOfQuantity:"g"} : i)
            setter(()=>conversionItem)
        }else{
            const conversionItem = table.map(i=>i.id === id ? {...i,Price:Price*1000,unitOfQuantity:"Kg"} : i)
            setter(()=>conversionItem)
        }
    }
    if(Phase === "liquid"){
        if(selection === "ml" && unitOfQuantity === "L"){
            const conversionItem = table.map(i=>i.id === id ? {...i,Price:Price/1000,unitOfQuantity:"ml"} : i)
            setter(()=>conversionItem)
        }else{
            const conversionItem = table.map(i=>i.id === id ? {...i,Price:Price*1000,unitOfQuantity:"L"} : i)
            setter(()=>conversionItem)
        }
    }

}
