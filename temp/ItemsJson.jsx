import axios from "axios"
/* import React,{useState,useEffect} from "react" */

const url = "https://jsonplaceholder.typicode.com/comments"

const options = {
    method:"get",
    url: url,
}

const functionFetch = async() => {
   /*  const phases = ['solid',"liquid"] */
    const StockAvailability  = ["✅","❌"]
    const FetchedData = await axios.request(options)
    const {data} = FetchedData
    const modifyData = data.map(i=>{
        const Price = Math.floor(Math.random()*200)
        /* const Phase = phases[Math.round(Math.random()*1)] */
        const Stock = StockAvailability[Math.round(Math.random()*1)]
      /*   const unitOfQuantity = Phase === "solid" ? "Kg" : "L" */
        return {...i,Price,Quantity:1,standardPrice:Price,Stock}
        /* 
        !return statement for kg and gram fits
        {...i,Price,Quantity:1,standardPrice:Price,Phase,unitOfQuantity,Stock} 
        */
    })
    return modifyData
}

const data = functionFetch

export default data
