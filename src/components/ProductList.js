import React from 'react'
import Product from './Product'

const response ={
    author: {
        name: "Pedro",
        lastname: "Perez"
    },
    categories: ["muebles"],
    items: [
        {
            id: "1",
            title: "Cama 1 Plaza De Pino Macizo El Mejor Precio - Pinoshow",
            price: {
                currency: "ARS",
                amount: "5000",
                decimals: "50"
            },
            picture: "http://http2.mlstatic.com/D_705441-MLA31009634162_062019-I.jpg",
            condition: "String",
            free_shipping: "True"
        },
        {
            id: "1",
            title: "Cama 1 Plaza De Pino Macizo El Mejor Precio - Pinoshow",
            price: {
                currency: "ARS",
                amount: "5000",
                decimals: "50"
            },
            picture: "http://http2.mlstatic.com/D_705441-MLA31009634162_062019-I.jpg",
            condition: "String",
            free_shipping: "True"
        },
    ]
}

const ProductList = ({products}) => {
    return (
        <div className="main-container">
            <div className="product-list-container">
                {response.items.map((product) => (
                    <Product
                    key={product.id}
                    price={product.price.amount}
                    name={product.title}
                    currency={product.price.currency}
                    location={"Capital Federal"}
                    image={product.picture}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;