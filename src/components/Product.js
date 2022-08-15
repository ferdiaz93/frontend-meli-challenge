import React from 'react'

const Product = ({price, name, currency, location, image}) => {
    return (
        <article className="product">
            <div className="product__image-container">
                <img src={image} alt=""/>
            </div>
            <div className="product__info">
                <h3>{currency} {price}</h3>
                <h3>{name}</h3>
            </div>
            <div className="product__location">
                <span>{location}</span>
            </div>
        </article>
    )
}

export default Product;