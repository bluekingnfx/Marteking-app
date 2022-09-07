import styled from "styled-components"
import "../../../Global/Styles/FontConfig.css"

export const Heading = styled.h1`
    font-family:"Roboto","Tahoma",sans-serif;
    font-weight:500;
    font-style:italic;
    color:gold;
`

export const NavOptions = styled.div`
    width:max-content;
    min-width:200px;
    display:flex;
    height:100%;
    justify-content:space-around;
    align-items:center;
`

export const SwitchDM = styled.label`
    width:50px;
    height:20px;
    border-radius: 40px;
    position:relative;
    padding:5px;
    background-color:${({slide})=>slide === false ? "#ffffff" : "#000000"};
`

export const CheckBox = styled.input`
    display:none;
`

export const Slider = styled.span`
    height:28px;
    width:50%;
    position:absolute;
    top:0px;
    border-radius:50%;
    background-color:#9e9e9e;
    transition:left 0.4s linear;
    z-index:1;
    left:${({slide}) =>  !slide ? 0 : "50%" };
`
export const NavigationBar = styled.div`
    width: 100%;
    height:100px;
    display:flex;
    align-items:center;
    flex-flow:row nowrap;
    justify-content:space-around;
    border-bottom:${ ({slide}) => slide === false ? "1px solid rgb(230, 229, 229)" :"1px solid rgb(41, 41, 41)" };
    background-color:${({slide})=> slide === false ? "#f1f1f1" : "#333" };
    box-shadow:${({slide})=>slide === false ? "0 0 8px 4px #e4e4e4" : "0 0 8px 4px #202020"};
`
export const BSNightIconsStyle = {
    position:"absolute",
    top:5,
    right:4.2,
    fontSize:"20px",
}

export const BSDayStyles = {
    color:"#ffffff",
    top:5,
    fontSize:"20px",
}
