// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react"
import {FaPercentage,FaRupeeSign} from "react-icons/fa"

import { discount } from "./functions/Discount"
import { TableBody } from "./TableBody"
import {
    ParentOFTableAndGT,
    ListingTable,
    TableHead,
    TableData,
    GTParentDiv,
    TheActualTBody,
    DiscountSq1,
    ParentDiscountSqContainer,
    DiscountSq2,
    DiscountSq3,
    InputAndDiscountIconContainer,
    DisCountAmuDisplayer,
    DiscountInputStyles,
    HighLightedPriceContainerGT,
    ActualPriceGT,
    
 } from "./Styles/SearchBarStyles"
import { DarkThemeProvider } from "../../Provider/DarkTheme"

/* import DiscountIcon from "../../Global/Images/icons8-discount-24.png" */

export const Tableitems = ({table,setter,gTotal,setGT,setDA,DA}) => {
    
    const DT = useContext(DarkThemeProvider)
    const {Theme} = DT
    const Color = Theme[0]
    return <>
        {table.length > 0 && table!== 0 && <ParentOFTableAndGT >
            <ListingTable>
                <TableHead Color={Color}>
                    <tr>
                        <TableData>SI.No</TableData>
                        <TableData>Name</TableData>
                        <TableData>Price/pcs</TableData>
                        <TableData>Quantity</TableData>
                        <TableData>Price</TableData>
                    </tr>
                </TableHead> 
                <TheActualTBody>
                    <TableBody  table={table} setter={setter} setGT={setGT} DA={DA}/>
                </TheActualTBody>
            </ListingTable>
            <GTParentDiv>
                <HighLightedPriceContainerGT Color={Color}>
                    <FaRupeeSign/>
                    <ActualPriceGT>
                        {gTotal}
                    </ActualPriceGT>
                </HighLightedPriceContainerGT>
                <InputAndDiscountIconContainer>
                    <ParentDiscountSqContainer>
                        <DiscountSq1 Color={Color}/>
                        <DiscountSq2 Color={Color}>
                            <DisCountAmuDisplayer Color={Color}>
                                {DA} <FaPercentage/>
                            </DisCountAmuDisplayer>
                        </DiscountSq2>
                        <DiscountSq3 Color={Color}/>
                    </ParentDiscountSqContainer>
                    <DiscountInputStyles Color={Color} defaultValue={0} min={0} max={100} type={'number'} onChange={(e)=>discount(e,setGT,table,setDA)}/>
                </InputAndDiscountIconContainer>
            </GTParentDiv>
        </ParentOFTableAndGT>}
    </>
}
