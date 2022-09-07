import React,{useContext} from "react"

import {SearchBar} from "./Components/Search/SearchBar"
import {NavBar} from "./Components/StaticComp/NavBar"
import { DarkThemeProvider } from "./Provider/DarkTheme"
import { ReceiptDataFather } from "./Provider/ReceiptDataProvider"
import { ReceiptMainComp } from "./Components/Receipt/ReceiptMainFile"

const App = () => {
  const DT = useContext(DarkThemeProvider)
  const {Theme} = DT
  return <div style={{backgroundColor: Theme[0] === false ?  "#eeee" : "#333"}}>
    <ReceiptDataFather>
      <NavBar/>
      <SearchBar/>
      <ReceiptMainComp/>
    </ReceiptDataFather>
  </div>
}
export default App;
  