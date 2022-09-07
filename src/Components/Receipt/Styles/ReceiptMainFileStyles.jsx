import styled from "styled-components";
import "../../../Global/Styles/FontConfig.css"
import "../../../Global/Styles/ReceiptFontConfig.css"

export const ReceiptParentDiv = styled.div`
    width:100%;
    min-height:200px;
    height:max-content;
    display:flex;
    flex-flow:row wrap;
    align-items:center;
    justify-content:center;
` 
export const ReceiptPaper = styled.div`
    width:290px;
    height:max-content;
    min-height:200px;
    background-color:#fff;
    margin:50px;
    padding:10px;
    box-shadow: ${({Color}) => !Color ? "5px 5px 19px #ccc;":"5px 5px 19px #050505;" };
`
export const ReceiptHeading = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:50px;
font-family: 'VT323', monospace;
margin: 0 auto;
color: #1f1f1f;
word-spacing:-9px;
`

export const ReceiptTamilHeading = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
font-family:"Roboto",sans-serif;
font-weight:bold;
`

export const ReceiptAddressParent = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;

`
export const ReceiptAddress = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:max-content;
text-align:center;
height:60px;
margin-top:10px;
width:100%;
font-family: 'VT323', monospace;
padding:10px;
font-size:20px;
resize:none;
outline:none;
border:1px solid #cfcfcfed;
`

export const ReceiptEndSummary = styled.div`
width:100%;
height:max-content;
font-family:'VT323', monospace;
font-weight:bold;
text-align:center;
margin-top:10px;
`

export const Persuasion = styled.div`
font-family:'VT323', monospace;
font-weight:normal;
font-size:14px;
padding-top:10px;
padding-bottom:5px;
`
export const Email = styled.div`
font-family:'VT323', monospace;
font-size:20px;
font-weight:bold;
margin-bottom:10px;
width:max-content;
max-width:200px;
padding:5px;
outline:none;
border:1px solid #cfcfcfed;
`
export const Festive = styled.div`
font-size:25px;
font-weight:bold;
font-family:'VT323', monospace;
text-align:center;
margin-top:10px;
`
export const DateNTime = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height:20px;
font-family:'VT323', monospace;
margin-top:10px;
word-spacing:-3px;
`

export const PHNoParent = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin-top:10px;
position: relative;
font-family:'VT323', monospace;
`

export const BillInput = styled.input`
width:50px;
border:1px solid #cfcfcfed;
outline:none;
`


export const PhNo = styled.input`
font-size:18px;
font-weight:bold;
margin-left:3px;
display:inline-block;
font-family:'VT323', monospace;
width:110px;
border:0px solid #cfcfcfed;
outline:none;
`

export const ReceiptTable = styled.table`
width:280px;
height:max-content;
font-family:'VT323', monospace;
margin-top:10px;
`

export const ReceiptTableHeadRow = styled.thead`
width:280px;

& td:first-child{
    width:10px;
}
& td:nth-child(3){
    font-size:14px;
    width: 35px;
}
& td:nth-child(4){
    font-size:14px;
    width: 25px;
    text-align:center;
}
& td:nth-child(5){
    font-size:14px;
    width: 45px;
    text-align:end;
}

`

export const GrandTotalInReceiptParent = styled.div`
    width:100%;
    height:50px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    position: relative;
`
export const GrandTotalInReceipt = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:max-content;
    padding:5px;
    border:0;
    border-top:1px solid black;
    border-bottom:1px solid black;
    font-family:'VT323', monospace;
    font-size:25px;
`

export const MsgDiv = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
height: max-content;
padding:10px;
color:${({Color}) => Color ? "#fff" : "#000"};
font-size:18px;
`

export const TotalItemDisplayDiv = styled.div`
font-family:'VT323', monospace;
position: absolute;
left:4px;
font-size:18px;
`

export const DiscountDisplayDiv = styled.div`
position: relative;
width:100%;
height:50px;
display:flex;
justify-content: flex-end;
align-items:center;
`
export const SubtractionDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:max-content;
    padding:5px;
    border:0;
    border-top:1px solid black;
    border-bottom:1px solid black;
    font-family:'VT323', monospace;
    font-size:25px;
`

export const GrandTotalVisualizer = styled.div`
width:100%;
height:60px;
display:flex;
justify-content:center;
align-items:center;
font-family:'VT323', monospace;
font-size:45px;
`

export const ToImgButParent = styled.div`
width:100%;
height:100px;
display:flex;
justify-content:center;
align-items:center;
`
export const ToImgBut = styled.button`
    width:100px;
    height:50px;
    background-color:${({Color})=> Color ? "#444444" : "#dbdbdb"};
    border:2px solid silver;
    color:${({Color}) => !Color ? "#000" : "#fff"};
    font-size:18px;
    font-family:"Roboto","Tahoma",sans-serif;
    box-shadow: silver 0px 0px 6px, silver 0px 0px 6px;
`
export const ImgParentBillContainer = styled.div`
width:290px;
height:max-content;
display:flex;
margin:50px;
margin-top:-54px;
box-shadow: ${({Color}) => !Color ? "5px 5px 19px #ccc;":"5px 5px 19px #050505;" };
@media (max-width:800px){
    margin-top:30px;
}
`