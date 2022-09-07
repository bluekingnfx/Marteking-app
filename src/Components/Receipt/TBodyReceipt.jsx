import React from "react"

export const TBodyReceipt = ({Info}) => {
    const InfoProdNameAr = []
    return <>
        {
            Info.length > 0 && Info.map(( item,index ) => 
            {
                const Name = item.ProdName.split("-")
                Name.pop()
                const ConditionName = Name.join(" ").trim()
                const ProdName = InfoProdNameAr.includes(ConditionName) ? item.ProdName : ConditionName
                InfoProdNameAr.push(ConditionName)
                return <tr key={index}>
                    <td>
                        {index+1}
                    </td>
                    <td>
                        {ProdName}
                    </td>
                    <td>
                        {item.PricePerPiece}
                    </td>
                    <td style={{textAlign:"center"}}>
                        x
                        {
                            item.QuantitySelected
                        }
                    </td>
                    <td style={{textAlign:"end"}}>
                        {
                            item.QuantityBasedPrice
                        }
                    </td>
                </tr>
            })
        }
    </>
    
}