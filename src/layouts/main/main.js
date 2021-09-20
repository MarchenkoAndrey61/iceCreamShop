import React from 'react';
import iceCream from '../../assets/ice cream.png';
import Card from '../../Components/Card/card';
import s from './mainstyle.module.scss'




const Main = () => {
    const cardArr = [
        {
            id: 1,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },{
            id: 2,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },{
            id: 3,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },{
            id: 4,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },
        {
            id: 5,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },
        {
            id: 6,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },{
            id: 7,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },{
            id: 8,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },{
            id: 9,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },
        {
            id: 10,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },
        {
            id: 11,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        },
        {
            id: 12,
            image: iceCream,
            name: 'Snow Tender Ice Cream',
            price: '230$'
        }
    ]
    return (
        <div className={s.cards}>
            {cardArr.map(({id, name, image, price}) => (
                <div key={id}>
                    <Card image={image} name={name} price={price} />
                </div>
            ))}
        </div>
    )
}

export default Main;