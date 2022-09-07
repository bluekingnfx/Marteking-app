import React,{useContext} from "react"
import { MdDelete} from "react-icons/md"

import { ChangePriceCrackers } from "./functions/ChangePrice"
import { DeleteRow } from "./functions/DeleteRow"
import {ReceiptDataProvider} from "../../Provider/ReceiptDataProvider"
import { 
    TableData,
    SiNoData,
    AvailabilityList,
    TableBodyStyles,
    NameOFTheProductTd,
    DeleteIconParent,
    PricePerPieceNSubGT,
    QuantityInput
} from "./Styles/SearchBarStyles"
import {DarkThemeProvider} from "../../Provider/DarkTheme"

const AvailabilityStyles  =  {
    height:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"16px",
    padding:"5px"
}

export const TableBody = ({table,setter,setGT,DA}) => {
    const ReceiptDeleterData = useContext(ReceiptDataProvider)
    const {ObjectData} = ReceiptDeleterData
    const ReceiptDataSetter = ObjectData[1]
    const DT = useContext(DarkThemeProvider)
    const {Theme} = DT
    const Color = Theme[0]
    return <>
    {
        table.map((i,index)=>{
            const {Price,Quantity, Name,id,standardPrice,Available} = i
            
            return <TableBodyStyles Color={Color} key={id}>
                <SiNoData>
                    <DeleteIconParent onClick={() => DeleteRow(id,table,setter,setGT,DA,ReceiptDataSetter)}>
                        <MdDelete />
                        <div style={{color:Color ? "#ffffff" :"#000"}}>{index+1}</div>
                    </DeleteIconParent>
                    <AvailabilityList Color={Color}>{Available.map(i=><div key={i} style={AvailabilityStyles}>{i}</div>)}</AvailabilityList>
                </SiNoData>
                <TableData>
                    <NameOFTheProductTd className={"ProdName"} Color={Color}>{Name}</NameOFTheProductTd>
                </TableData>
                <PricePerPieceNSubGT Color={Color} style={{textAlign:"center"}}>
                    {standardPrice}
                </PricePerPieceNSubGT>
                <TableData>
                    <span style={{
                        width:"40px",
                        textAlign:"right",
                        marginRight:"5px",
                        color: Color ? "#fff" : "#000"
                    }}>
                        ✖
                    </span>
                    <QuantityInput  className={"QuantityCollection"} Color={Color} type="number" style={{width:"50px",textAlign:"left"}} defaultValue={Quantity} min={0}
                    onChange={ e => ChangePriceCrackers(e,setter,id,table,standardPrice,setGT,DA)}/>
                </TableData>
                <PricePerPieceNSubGT Color={Color}>{Price}</PricePerPieceNSubGT>
            </TableBodyStyles>
        })
    }
    </>
}






