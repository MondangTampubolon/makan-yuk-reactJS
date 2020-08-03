import React from 'react';
import './card.css';

// buat props dibawah ini sebagai parameter
const Card = ({ card }) => {
    return (
        <div>
            {
                card.map((element) => (
                    <div className='main'>
                    <div className='containerCard'>
                        <img src={element.image} alt={element.restoran}/>
                        <h1>{element.restoran}</h1>
                        <p className="status">{element.status}</p>
                        <p>{element.tanggal}</p>
                    </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;