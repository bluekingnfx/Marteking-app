import { TBodyReceipt } from "./TBodyReceipt"
import {ReceiptTable,ReceiptTableHeadRow } from "./Styles/ReceiptMainFileStyles"

export const PurchaseInfo = ({Info,DA}) => {
    
    return <ReceiptTable>
        <ReceiptTableHeadRow >
            <tr>
                <td>No</td>
                <td>Name</td>
                <td>PPP</td>
                <td>Qty</td>
                <td>Price</td>
            </tr>
        </ReceiptTableHeadRow>
        <tbody>
            <TBodyReceipt Info={Info}/>
        </tbody>
    </ReceiptTable>
    
}