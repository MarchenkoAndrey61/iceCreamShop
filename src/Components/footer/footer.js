import React from "react";
import logo from '../../assets/Group10.png'
import s from './footstyle.module.scss'

const Footer = () => {
    return(
        <div className={s.container}>
            <div>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <ul className={s.link}>
                        <li>Our Products</li>
                        <li>Privacy Terms</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
            <div>
                2021 Justice-team. All rights reserved.
            </div>
        </div>
    )
}

export default Footer