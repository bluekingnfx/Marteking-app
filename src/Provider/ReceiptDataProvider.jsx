import React,{useState,createContext} from "react";


export const ReceiptDataProvider = createContext()

export const ReceiptDataFather = ({children}) => {
    const [receiptConstructData, setReceiptConstructData] = useState({DisCountAmount:0,QuantityAr:[],DiscountAmount:0,DAFreeGT:0}) 
    return <ReceiptDataProvider.Provider value={{
        ObjectData : [receiptConstructData,setReceiptConstructData]
    }}>
        {
            children
        }
    </ReceiptDataProvider.Provider>
} 