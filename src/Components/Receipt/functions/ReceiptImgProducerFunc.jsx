import h2c from "html2canvas"
export const ReceiptImgProducerFunc = async(RR,AR,BIR,BIP) => {
    
    const width = RR.current.clientWidth
    const height = RR.current.clientHeight
    AR.current.style.border = "0px"
    AR.current.style.padding = "0px"
    AR.current.style.height = "max-content"
    AR.current.style.margin = "0px"
    BIP.current.innerHTML = ""
    const Img = await h2c(RR.current,{
        width:width,
        height:height - 60,
        letterRendering:true
    })
    BIP.current.appendChild(Img)
    AR.current.style.height = "60px"
    AR.current.style.margin = "10px"
    AR.current.style.padding = "10px"
    AR.current.style.border = "1px solid #cfcfcfed"
    BIP.current.scrollIntoView({
        behavior:"smooth",
        block:"end",
        inline:"end"
    })
}