
// eslint-disable-next-line import/no-anonymous-default-export
export default (QuantityAr,DisAmu,GT,DAFreeGT) => { 
    
    // eslint-disable-next-line array-callback-return
    const Phase1 = QuantityAr.map(i=>{
        const {PricePerPiece,QuantityBasedPrice,QuantitySelected} = i
        const QuantityBasedPriceChecking = (Number(QuantitySelected)*Number(PricePerPiece)).toFixed(0)
        try{
            if(Number(QuantityBasedPriceChecking) === Number(QuantityBasedPrice)){
                return i
            }
        }catch(e){
            return false 
        }
    })

    const Total = parseInt(Phase1.filter(i=>i).reduce((acc,i)=>acc+Number(i.QuantityBasedPrice),0))
    if(Total === Number(DAFreeGT)){
        const DisAmuFormulae = (100*Number(Total) - 100*Number(GT))/Total
        const SplitForDecimal = String(DisAmuFormulae).split(".")
        const DisAmuChecking = parseInt(SplitForDecimal[0])
        if(DisAmuChecking === Number(DisAmu) || DisAmuChecking+1 === Number(DisAmu) || DisAmuChecking-1 === Number(DisAmu)  ) return {data:QuantityAr,Msg:"Print Bill"} 
        else return {data:Phase1,Msg:"Discount Provided Decimal must be a integer"}
    } else return {data:Phase1,Msg:"Quantity of Some Product is Decimal"}
}