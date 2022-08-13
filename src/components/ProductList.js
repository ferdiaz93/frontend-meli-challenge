import React from 'react'
import Product from './Product'
import useProductsData from '../hooks/useProductsData'

const ProductList = () => {
    const { getProducts } = useProductsData();
    const productsData = getProducts();

    return (
        <div className="main-container">
            <div className="product-list-container">
                {productsData.items ? 
                    productsData.items.map((product) => (
                        <Product
                        key={product.id}
                        price={product.price.amount}
                        name={product.title}
                        currency={product.price.currency}
                        location={product.location}
                        image={product.picture}
                        />
                    ))
                : null}
            </div>
        </div>
    )
}

export default ProductList;