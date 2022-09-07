import {data} from "./Items"
import {v4 as random} from "uuid"
const CrackersData = async() => {
    const Crackers = data.map(i=>{
        const {Price} = i 
        const standardPrice = Price
        const id = random()
        const Quantity = 1
        return {id,...i,standardPrice,Quantity}
    })
    return Crackers
}

export default CrackersData


