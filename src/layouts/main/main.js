import React from 'react';
import iceCream from '../../assets/ice cream.png';
import Card from '../../Components/Card/card';


const cardArr = [
    {
        id: 1,
        image: iceCream,
        name: 'Snow Tender Ice Cream',
        price: '230$'
    },
    {
        id: 2,
        image: iceCream,
        name: 'Snow Tender Ice Cream',
        price: '230$'
    }
]

const Main = () => {
    return (
        <div>
            {cardArr.map(({id, name, image, price}) => (
                <div key={id}>
                    <Card image={image} name={name} price={price}/>
                </div>
            ))}
        </div>
    )
}

export default Main;