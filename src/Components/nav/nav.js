import React from "react";
import logo from '../../assets/Group10.png'
import s from './navstyle.module.scss'
import user from '../../assets/user.png'
import cart from '../../assets/cart.png'
const Nav = () => {
    return (
        <div className={s.container}>
            <div><img src={logo} alt='logo' /> </div>
            <div>
                <div className={s.login}>
                    <div>
                        <img src={user} alt='user icon'/>
                    </div>
                    <div>
                        Sing up
                    </div>
                    /
                    <div>
                        Sing in
                    </div>
                    <div>
                        <img src={cart} alt='cart'/>
                        Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav