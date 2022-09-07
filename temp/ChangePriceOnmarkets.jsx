export const ChangePrice = (e,setter,id,allValues,stdPrice,unitQ) => {
    const changed = Number(e.target.value)
    const StandardQuantity = [1,0.001]
    let RelativePrice,Price
    if(unitQ === "L" || unitQ === "Kg"){
        let standard = stdPrice*StandardQuantity[0]
        RelativePrice = standard*changed
    }
    if(unitQ === "ml" || unitQ === "g"){
        let standard = stdPrice*StandardQuantity[1]
        RelativePrice = Number(standard*changed).toFixed(2)

    }
    
    if(!Number.isNaN(changed)){
        Price = RelativePrice
        const NewSet = allValues.map( val => val.id === id ? {...val,Quantity:changed,Price} : val)
        setter(NewSet)
    }else{
        return 
    }
} 