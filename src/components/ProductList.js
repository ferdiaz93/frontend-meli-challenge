import React from 'react'
import Product from './Product'

const response = {
    author: {
        name: "Pedro",
        lastname: "Perez"
    },
    categories: ["muebles"],
    items: [
        {
            id: "1",
            title: "Cama elastica",
            price: {
                currency: "ARS",
                amount: "5000",
                decimals: "50"
            },
            picture: "test",
            condition: "String",
            free_shipping: "True"
        },
        {
            id: "2",
            title: "Cama de agua",
            price: {
                currency: "ARS",
                amount: "5000",
                decimals: "50"
            },
            picture: "test",
            condition: "String",
            free_shipping: "True"
        },
    ]
}

const ProductList = ({products}) => {
    return (
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
    )
}

export default ProductList;