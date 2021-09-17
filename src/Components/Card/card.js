import React from "react";
import s from './cardstyle.module.scss'


const Card = ({image, name, price}) => {
    return (
        <div className={s.container}>
            <img src={image} alt='card'/>
            <div className={s.name}>{name}</div>
            <div className={s.price}>{price}</div>
        </div>
    )
}
export default Card;
