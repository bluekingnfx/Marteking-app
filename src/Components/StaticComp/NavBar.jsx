import React,{useContext} from "react";
import {BsFillEmojiSunglassesFill} from "react-icons/bs" 
import {BsEmojiSunglasses} from "react-icons/bs"


import {Heading, NavigationBar,NavOptions,CheckBox,Slider,SwitchDM,BSDayStyles,BSNightIconsStyle} from "./Styles/NavBarStyles"
import { ThemeSetter } from "./functions/ThemeSetter";
import { DarkThemeProvider } from "../../Provider/DarkTheme";

export const NavBar = () => {
    const DT = useContext(DarkThemeProvider)
    const {Theme} = DT
    const isSlide = Theme[1]
    return <>
        <NavigationBar slide={Theme[0]}>
            <Heading>
                Electronic Billing
            </Heading>
            <NavOptions>
                <SwitchDM slide={Theme[0]} onClick={(e)=>{e.preventDefault();e.stopPropagation();ThemeSetter(isSlide)}}>
                    <Slider slide={Theme[0]}></Slider>
                    <CheckBox type={"checkbox"}/>
                    <BsFillEmojiSunglassesFill style={BSNightIconsStyle}/>
                    <BsEmojiSunglasses style={BSDayStyles}/>
                </SwitchDM>
            </NavOptions>
        </NavigationBar>
    </>
}