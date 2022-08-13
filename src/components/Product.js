import React from 'react'

const Product = ({price, name, currency, location, image}) => {
    return (
        <arcticle className="product-container">
            <div className="image-container">
                <img src={image} alt=""/>
            </div>
            <div className="product-info">
                <h3>{currency} {price}</h3>
                <h3>{name}</h3>
            </div>
            <div className="extra-info">
                <span>{location}</span>
            </div>
        </arcticle>
    )
}

export default Product;