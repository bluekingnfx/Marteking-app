
import ReceiptData from "./ReceiptDataAfterPreview"

export const ReceiptDataSetterFunc =(DataSetterRD,disAmu,GrandTotal) => {
    const Data = ReceiptData(disAmu,GrandTotal)
    DataSetterRD(()=>Data)
    document.getElementsByTagName("body")[0].scrollIntoView({
        behavior:"smooth",
        block:"end",
        inline:"end"
    })
}