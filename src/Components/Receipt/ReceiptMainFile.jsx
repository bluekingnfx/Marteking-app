import React,{useContext,useState,useRef} from "react";
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaRupeeSign} from "react-icons/fa"

import {ReceiptDataProvider} from  "../../Provider/ReceiptDataProvider"
import { PurchaseInfo } from "./PurchaseInfo";
import { DarkThemeProvider } from "../../Provider/DarkTheme"
import Checking from "./functions/ConditionChecking"
import {ReceiptImgProducerFunc} from "./functions/ReceiptImgProducerFunc"
import {SetNGetLocalStore} from "./functions/SetNGetLocalStore"
import setReceiptEmail from "./functions/ReceiptEmailSetter"
import setPhoneReceipt from "./functions/ReceiptPhoneNoSetter"
import { SetAddress } from "./functions/ReceiptSetAddress";
import { 
    ReceiptParentDiv,
    ReceiptPaper, 
    ReceiptHeading,
    ReceiptTamilHeading, 
    ReceiptAddress, 
    ReceiptAddressParent,
    ReceiptEndSummary,
    Persuasion,
    Email,
    Festive,
    DateNTime,
    PHNoParent,
    BillInput,
    PhNo,
    GrandTotalInReceiptParent,
    GrandTotalInReceipt,
    TotalItemDisplayDiv,
    DiscountDisplayDiv,
    SubtractionDiv,
    GrandTotalVisualizer,
    ToImgButParent,
    ToImgBut,
    ImgParentBillContainer
} from "./Styles/ReceiptMainFileStyles";

SetNGetLocalStore()



export const ReceiptMainComp = () => {
    const BillReference = useRef()
    const AddressReference = useRef()
    const ReceiptPaperReference = useRef()
    const BillImgDivParent = useRef()
    const [Add,isAdd] = useState(localStorage.getItem("Address"))
    const [EmailLs,isEmailLs] = useState(localStorage.getItem("Email"))
    const [phone,isPhone] = useState(localStorage.getItem("PhoneNo"))
    const ThemeProvider = useContext(DarkThemeProvider)
    const {Theme} = ThemeProvider
    const Color = Theme[0]
    const ReceiptData = useContext(ReceiptDataProvider)
    const {ObjectData} = ReceiptData
    const [QD] = ObjectData
    const {QuantityAr,DiscountAmount,GrandTotalFromTable,DAFreeGT} = QD
    let data=[]
    let msg
    if(QuantityAr.length > 0){
        const ProPData = Checking(QuantityAr,DiscountAmount,GrandTotalFromTable,DAFreeGT)
        data = ProPData.data
        // eslint-disable-next-line no-unused-vars 
        msg = ProPData.Msg /*//!This line is given to notice the user that quantity cant be decimal but the feature is not added. */
    }else{
        data = []
    }

    const GrandTotal = QuantityAr.reduce((acc,i) => acc+Number(i.QuantityBasedPrice),0)
    return <>
        {
            data.length > 0 && <ReceiptParentDiv  id={"ReceiptParent"}>
                <div>
                    <ReceiptPaper ref={ReceiptPaperReference} Color={Color} id={"ReceiptDiv"}>
                        <ReceiptHeading>
                            SS Fireworks 
                        </ReceiptHeading>
                        <ReceiptTamilHeading>
                            SS  பட்டாசு கடை 
                        </ReceiptTamilHeading>
                        <PHNoParent>
                            <BsFillTelephoneFill style={{
                                fontSize:"14px",
                                color:"#3f3e3e",
                                transform:"rotate(20deg)",
                            }}/>
                                <PhNo defaultValue={phone} onChange={(e)=>{
                                    setPhoneReceipt(e,isPhone)
                                }}/>
                        </PHNoParent>
                        <DateNTime>
                            <span>Bill No: 
                                <BillInput id={"BillInput"} ref={BillReference} type="text" defaultValue={0}/>
                            </span>
                            {new Date().toString().slice(0,25)}
                        </DateNTime>
                        <PurchaseInfo Info={data} DA={DiscountAmount}/>
                        <GrandTotalInReceiptParent>
                                <TotalItemDisplayDiv>
                                    TotalItems:{data.length}
                                </TotalItemDisplayDiv>
                            <GrandTotalInReceipt>
                                {
                                    GrandTotal
                                }
                            </GrandTotalInReceipt>
                        </GrandTotalInReceiptParent>
                        <DiscountDisplayDiv>
                            <TotalItemDisplayDiv style={{
                                fontSize:"22px"
                            }}>
                                Discount:{DiscountAmount}%
                            </TotalItemDisplayDiv>
                            <SubtractionDiv>
                            {GrandTotal} - DC({
                                    DAFreeGT - GrandTotalFromTable 
                                })
                            </SubtractionDiv>
                        </DiscountDisplayDiv>
                        <GrandTotalVisualizer>
                            TOTAL: <FaRupeeSign style={{fontSize:"28px"}}/>{
                                GrandTotalFromTable
                            }
                        </GrandTotalVisualizer>
                        <ReceiptAddressParent>
                            <ReceiptAddress id={"Address"} ref={AddressReference} inputMode={"text"}
                            contentEditable={true} suppressContentEditableWarning={true} onInput={(e)=>{
                                SetAddress(e,isAdd)
                            }}>
                                {
                                    Add
                                }
                            </ReceiptAddress>

                        </ReceiptAddressParent>
                        <ReceiptEndSummary>
                            *************************************
                            <Persuasion>
                                Thanks for Visiting SS fire works We would love to hear your feedback on your recent experience with us. Email us on following address
                            </Persuasion>
                            <div style={{
                                width:"100%",
                                height:"max-content",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                padding:"10px"
                            }}>
                                <Email contentEditable={true} suppressContentEditableWarning={true} onInput={(e)=>setReceiptEmail(e,isEmailLs)}>
                                    {
                                        EmailLs
                                    }
                                </Email>
                            </div>
                            *************************************
                        </ReceiptEndSummary>
                        <Festive>
                            WISH YOU SAFE AND HAPPY DIWALI!
                        </Festive>
                    </ReceiptPaper>
                    <ToImgButParent Color={Color} >
                        <ToImgBut onClick={async()=>await ReceiptImgProducerFunc(ReceiptPaperReference,AddressReference,BillReference,BillImgDivParent)}>To Image</ToImgBut>
                    </ToImgButParent>
                </div>
                <ImgParentBillContainer ref={BillImgDivParent} Color={Color} id="ImgBillContainer">

                </ImgParentBillContainer>
            </ReceiptParentDiv>
        }
    </>
}