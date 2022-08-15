import React from 'react'
import { CurrencyFormat } from '../utils'

const Product = ({productId, price, name, currency, location, image}) => {
    return (
        <a className="product" href={`/items/${productId}`}>
            <div className="product__image-container">
                <img src={image} alt=""/>
            </div>
            <div className="product__info">
                <div className="product__info__main">
                    <h3>{CurrencyFormat(price, currency)}</h3>
                    <h3>{name}</h3>
                </div>
                <div className="product__info__location">
                    <span>{location}</span>
                </div>
            </div>
        </a>
    )
}

export default Product;