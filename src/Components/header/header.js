import React from "react";
import header from '../../assets/Heart.svg'
import s from './headerstyle.module.scss'
const Header = () =>{
    return (
        <div className={s.container}>
            <div>I</div>
            <div className={s.logo}><img src={header} alt='logo'/></div>
            <div>ICE</div>
            <div className={s.cream}>CREAM</div>
        </div>
    )
}

export default Header;