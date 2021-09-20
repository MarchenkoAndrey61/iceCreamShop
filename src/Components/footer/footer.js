import React from "react";
import logo from '../../assets/Group10.png'
import s from './footstyle.module.scss'

const Footer = () => {
    return(
        <div className={s.container}>
            <div className={s.footer}>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <ul className={s.link}>
                        <li className={s.li}>Our Products</li>
                        <li className={s.li}>Privacy Terms</li>
                        <li className={s.li}>Twitter</li>
                        <li className={s.li}>Facebook</li>
                        <li className={s.li}>Email</li>
                    </ul>
                </div>
            </div>
            <div className={s.politics}>
                2021 Justice-team. All rights reserved.
            </div>
        </div>
    )
}

export default Footer