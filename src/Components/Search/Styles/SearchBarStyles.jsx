import styled from "styled-components";
import "../../../Global/Styles/FontConfig.css"
export const SearchParent = styled.div`
    width:100%;
    height:200px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    position: relative;
`

export const SearchBarParent = styled.div`
    width:80%;
    height:max-content;
    border-radius:50px;
    position: relative;
`

export const SearchBarInput = styled.input`
    width:100%;
    height:20px;
    border-radius:30px;
    background-color:#f1f1f1;
    padding: 15px;
    font-size:20px;
    font-family:"Roboto","Tahoma",sans-serif;
    font-weight:500;
    color:#000;
    outline:none;
    border:${({Color})=>Color === false ? "2px solid gold" : 0 };
`
export const DropSearch = styled.div`
    width:70%;
    position:absolute;
    height:max-content;
    max-height:350px;
    background-color: ${({Color}) => Color === false ? "#ecececeb":"#333"};
    border:0;
    z-index:4;
    overflow-y:auto;
    background-color:${({Color})=>Color === true && "#222"};
    top:126px;
    overflow-x:hidden;
    &::-webkit-scrollbar{
        width:12px;
    }
    &::-webkit-scrollbar-track{
        margin-right:5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:${({Color})=>Color === false ? "#cecdcd" : "#474747"};
    }
    &::-webkit-scrollbar-thumb:hover{
        background-color:${({Color})=>Color === false ? "#b1b1b1" : "#636262"};
    }
`


export const SearchItemContainer = styled.div`
width:100%;
min-height:120px;
height:max-content;
border-bottom:${({Color})=>Color===false ? "1px solid #b1b1b1" : "1px solid #333"};
display:flex;
flex-flow:row nowrap;
position: relative;
justify-content:space-between;
transition:background-color 0.2s linear;
@media(max-width:600px){
    flex-flow:row wrap;
}
&:hover{
    background-color:${({Color})=> Color ? "#000" : "#fbfbfb"}
}
`
export const NonVisualData = styled.div`
width:calc(100% - 150px);
padding-left:10px;
height:100%;
display:flex;
flex-flow : column nowrap;
@media(max-width:600px){
    width:100%;
    justify-content:center;
    align-items:center;

}
`

export const VisualData = styled.div`
width:150px;
height:130px;
display:flex;
flex-flow : column nowrap;
justify-content:center;
align-items:center;
@media(max-width:600px){
    width:100%;
}
`

export const ProvidedNames = styled.div`

`

export const BigEnglishName = styled.div`
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: #f51111;
margin-top:15px;
margin-bottom:0;
font-size:23px;
font-weight:bold;
`
export const BigTamilName = styled.div`
font-family:"Tahoma",sans-serif;
color:${({Color}) => Color === false ? "#0105ff" : "#00ff0d" };
margin-top:0px;
font-size:14px;
margin-left:0px;
font-weight:bold;
`

export const HighLightedPriceContainer = styled.div`
display:flex;
flex-flow:row;
color:${({Color}) => Color === false ? "#242424" : "gold" };
margin-top:20px;
`

export const ActualPrice = styled.span`
font-size:35px;
`

export const ProductPhoto = styled.img`
width:100px;
height:80%;
border-radius:5px;
@media (max-width:600px){
    width:50%;
    object-fit:cover;
}
`

export const StockInfo = styled.span`

`

export const TheActualTBody = styled.tbody`
& td {
}
`


export const ParentOfTableNPreview = styled.div`
display:flex;
justify-content:center;
align-content:center;
flex-flow:column nowrap;
width:100%;
height:max-content;
`

export const ParentOFTableAndGT = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column nowrap;
width:100%;
height:max-content;
& table,td,th{
    /* border:1px solid #141414; */
}

`

export const ListingTable = styled.table`
width:70%;
height:max-content;
border-collapse:collapse;
@media (max-width:800px){
    width:95%;
}
`

export const TableHead = styled.thead`
height:50px;
& tr{
    background-color:${({Color}) => !Color ?  "#a8a4a4" : "#dddd"};
    padding:15px;
    font-family:"Roboto","Tahoma",sans-serif;
    font-size:20px;
    font-weight:bold;
}
`
export const TableBodyStyles = styled.tr`
border-bottom:${({Color}) => !Color ? "1px solid #000" : "1px solid #dddd"};
padding-top:10px;
& > td{
    height:80px;
}

`

export const TableData = styled.td`
text-align:center;
`
export const GTParentDiv = styled.div`
width:70%;
display:flex;
flex-flow:row nowrap;
height:80px;
justify-content:space-around;
align-items:center;
`

export const SiNoData = styled(TableData)`
display:flex;
flex-flow:column nowrap;
position:relative;
justify-content:center;
align-items:center;
`

export const AvailabilityList = styled.div`
position:absolute;
bottom:10px;
background-color:${({Color})=> Color ? "#161616" : "#dfdbdb"};
height:18px;
font-size:16px;
color:${({Color})=> Color ? "#f5f5f5" : "#2b2b2b"};
padding:3px;
font-family:"Roboto","Tahoma",sans-serif;
overflow:hidden;
cursor:pointer;
transition:height 0.5s linear;
&:active {
    height:max-content;
}
`

export const DeleteIconParent = styled.div`
color:red;
font-size:28px;
display:flex;
margin-bottom:20px;
position:relative;
font-weight:bold;
`

export const NameOFTheProductTd = styled.div`
color: ${({Color})=> Color ? "#fff" : "#000" };
display:flex;
align-items:center;
justify-content:center;
padding:15px;
padding-top:0; 
padding-bottom:0; 
font-family:"Roboto","Tahoma", sans-serif;
font-size:18px;
`

export const PricePerPieceNSubGT = styled(TableData)`
color: ${({Color})=> Color ? "#fff" : "#000" };
font-family:"Roboto","Tahoma", sans-serif;
font-size:18px;
`
export const QuantityInput = styled.input`
background-color:${({Color})=> Color ? "#fff" : "#555454" };
min-height:40px;
padding-left:5px;
font-size:15px;
outline:none;
margin-left:10px;
border:0;
color:${({Color})=> Color ? "#000000" : "#ffffff" };
`

export const InputAndDiscountIconContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
width:max-content;
`
export const ParentDiscountSqContainer = styled.div`
width:60px;
height:60px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`

const DiscountSq = styled.div`
width:40px;
height:40px;
position:absolute;
`

export const DiscountSq1 = styled(DiscountSq)`
z-index:1;
background-color:${({Color})=> !Color ? "#555454" : "#ffffff" };
transform:rotate(45deg);
`

export const DiscountSq2 = styled(DiscountSq)`
z-index:2;
background-color:${({Color})=> !Color ? "#555454" : "#ffffff" };
transform:rotate(110deg);
display:flex;
justify-content:center;
align-items:center;
position:relative;

`
export const DiscountSq3 = styled(DiscountSq)`
z-index:0;
background-color:${({Color})=> !Color ? "#555454" : "#ffffff" };
transform:rotate(-10deg);
`

export const DisCountAmuDisplayer = styled.div`
z-index:3;
height:30px;
width:30px;
left:10px;
display:flex;
justify-content:center;
align-items:center;
transform:rotate(-110deg);
font-family:"Roboto","Tahoma", sans-serif;
font-size:14px;
font-weight:bold;
color:${({Color})=> Color ? "#000000" : "#ffffff" };
`
export const DiscountInputStyles = styled(QuantityInput)`
`

export const ActualPriceGT = styled(ActualPrice)`
margin:0;
font-size:50px;
`
export const HighLightedPriceContainerGT = styled(HighLightedPriceContainer)`
height:80%;
color:${({Color}) => Color ? "gold ":"#1b3bf5" };

`

export const PreviewButtonParent = styled.div`
width:100%;
height:100px;
display:flex;
justify-content:center;
align-items:center;
`

export const PreviewButton = styled.button`
width:100px;
height:50px;
background-color:${({Color})=> Color ? "#444444" : "#dbdbdb"};
border:2px solid brown;
color:${({Color}) => !Color ? "#000" : "#fff"};
font-size:18px;
font-family:"Roboto","Tahoma",sans-serif;
box-shadow: #a52a2a83 0px 0px 6px, #a52a2a97 0px 0px 6px;
`