import React from 'react';
import ls from './Card.module.css';

const Card = ({ img, name, info = [], onClick }) => {
    return (
        <div className={ls.cardBox} onClick={onClick}>
            <img src={img} alt={name} />
            <div className={ls.cardBody}>
                <h3 className={ls.cardTitle}>{name}</h3>
                <ul className={ls.cardList}>
                {info.map((el, index) => (
    <li className={ls.cardItem} key={index}>
        <b>{el.title}:</b> {el.description}
    </li>
))}
                </ul>
            </div>
        </div>
    );
}

export default Card;
