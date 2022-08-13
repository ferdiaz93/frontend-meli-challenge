import React from 'react'

const Product = ({price, name, currency, location, image}) => {
    return (
        <div className="product-list-container">
            <div className="image-container">
                <img src={image} alt=""/>
            </div>
            <div className="product-info">
                <h3>{price}</h3>
                <h3>{currency} {name}</h3>
                <h3>{location}</h3>
            </div>
        </div>
    )
}

export default Product;