/* eslint-disable import/no-anonymous-default-export */

export default (DA,GT) => {
    const QuantityAr = []
    const QuantityCollectionLen = document.getElementsByClassName("QuantityCollection").length
    for(let i = 0; i<QuantityCollectionLen;i++){
        const QuantityCollection = document.getElementsByClassName("QuantityCollection")[i]
        const ProdName =  QuantityCollection.parentElement.previousSibling.previousSibling.firstChild.innerText
        const PricePerPiece = QuantityCollection.parentElement.previousSibling.textContent
        const QuantityBasedPrice = QuantityCollection.parentElement.nextSibling.textContent
        const value = QuantityCollection.value
        QuantityAr.push({
            ProdName,
            QuantitySelected:value,
            PricePerPiece,
            QuantityBasedPrice
        })
        
    }
    const DAFreeGT = parseInt(QuantityAr.reduce((acc,i)=>acc+Number(i.QuantityBasedPrice),0))
    return {QuantityAr,DiscountAmount:DA,GrandTotalFromTable:GT,DAFreeGT}
}