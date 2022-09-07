import React,{useContext} from "react";
import {FaRupeeSign} from "react-icons/fa"
import {SelectionItem} from "./functions/selectionItemAndFechItems"
import {TiTick} from "react-icons/ti"
import {GiCancel} from "react-icons/gi"

import { DarkThemeProvider } from "../../Provider/DarkTheme";
import { 
    SearchItemContainer,
    NonVisualData,
    VisualData,
    BigEnglishName,
    ActualPrice,
    BigTamilName,
    ProvidedNames,
    HighLightedPriceContainer,
    ProductPhoto,
    StockInfo
} from "./Styles/SearchBarStyles";
import LocalDefImage from "../../Global/Images/DefImg.jpg"

const CancelStyles = {
    position:"absolute",
    top:"16px",
    marginLeft:"8px",
    fontSize:"24px",
    color:"#f16b6b"
}

const tickStyles = {
    position:"absolute",
    top:"12px",
    marginLeft:"2px",
    fontSize:"28px",
    color:"#92e427"
}

export const DropDownProduct = ({Name,TamilName,Price,Stock,Photo,data,Reference,setSearchItems,tableItems,setGTotal,table,discountAmu})=>{
    const Data = useContext(DarkThemeProvider)
    const {Theme} = Data
    const Color = Theme[0]
    return <SearchItemContainer onClick={ e => SelectionItem(e,tableItems,data,Name,Reference,setSearchItems,setGTotal,table,discountAmu)} Color={Color}>
            <NonVisualData>
                <ProvidedNames>
                    <div style={{display:"flex"}}>
                        <BigEnglishName>{Name}</BigEnglishName>
                        <StockInfo>
                            {Stock ? ( Stock === "Out Stock" ? <GiCancel style={CancelStyles} /> : <TiTick style={tickStyles}/> ): "N/a"}
                        </StockInfo>
                    </div>
                    <BigTamilName Color={Color}>{ TamilName ? TamilName : "N/a"}</BigTamilName>
                </ProvidedNames>
                <HighLightedPriceContainer Color = {Color}>
                    <FaRupeeSign/>
                    <ActualPrice>
                        {Price}
                    </ActualPrice>
                </HighLightedPriceContainer>
            </NonVisualData>
            <VisualData>
                <ProductPhoto src={Photo ? Photo : LocalDefImage } onError={ e => e.target.src = LocalDefImage} alt={"prodImg"} />
            </VisualData>
    </SearchItemContainer>
}

