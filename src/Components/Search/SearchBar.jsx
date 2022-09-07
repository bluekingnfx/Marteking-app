import React,{useState,useEffect,useRef,useContext} from "react";
import {v4 as random} from "uuid"
/* import {FcCancel} from "react-icons/fc" */

import { Tableitems } from "./Table";
import { filteredItems } from "./functions/filteredItems";
import {FetchItems} from "./functions/selectionItemAndFechItems"
import {DarkThemeProvider} from "../../Provider/DarkTheme"
import { 
    SearchBarInput, 
    SearchParent, 
    ParentOfTableNPreview, 
    DropSearch, 
    SearchBarParent,
    PreviewButton,
    PreviewButtonParent
} from "./Styles/SearchBarStyles";
import { DropDownProduct } from "./DropDownProduct";
import { ReceiptDataSetterFunc } from "./functions/ReceiptSetterFunc";
import {ReceiptDataProvider} from "../../Provider/ReceiptDataProvider"


export const SearchBar = () => {

    const RD = useContext(ReceiptDataProvider)
    const {ObjectData} = RD
    const DataSetterRD = ObjectData[1]
    const ThemProv = useContext(DarkThemeProvider)
    const {Theme} = ThemProv
    const Color = Theme[0]
    const [gTotal,setGTotal] = useState(0)
    const [data,setData] = useState([])
    const [searchItems, setSearchItems] = useState([])
    const [table,tableItems] = useState([])
    const [discountAmu, setDiscountAmu] = useState(0)
    const Reference = useRef()

    useEffect(()=>{
        FetchItems(setData)
    },[])

    return <>
    <SearchParent Color={Color}>

        <SearchBarParent>
            <SearchBarInput ref={Reference} Color={Color} onChange={(e)=>filteredItems(e,data,setSearchItems,table)}/>
        </SearchBarParent>

        {searchItems.length !== 0 && <DropSearch Color={Color}>
            {
                searchItems.map( item => {
                    const {Name,TamilName,Price,Stock,Photo} = item
                    return <DropDownProduct  tableItems={tableItems} data={data} Reference={Reference} setSearchItems={setSearchItems} setGTotal={setGTotal} table={table} key={random()} Name={Name} discountAmu={discountAmu} Price={Price} TamilName={TamilName} Stock={Stock} Photo={Photo}/>
                })
            }
        </DropSearch>}

    </SearchParent>
    <ParentOfTableNPreview>
        <Tableitems table={table} setter={tableItems} gTotal={gTotal} setGT={setGTotal} setDA={setDiscountAmu} DA={discountAmu} />
    </ParentOfTableNPreview>
    { table.length > 0 && <PreviewButtonParent>
        <PreviewButton Color={Color} onClick={()=>ReceiptDataSetterFunc(DataSetterRD,discountAmu,gTotal)}>
            Preview
        </PreviewButton>
    </PreviewButtonParent>}
    </>
}


