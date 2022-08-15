import React, { useEffect } from 'react';
import Product from './Product';
import axios from 'axios';
import useProductsData from '../hooks/useProductsData';

const ProductList = () => {
    const { getProducts, setProducts} = useProductsData();
    const productsData = getProducts();
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if(params.get('search') !== null) {
            requestProducts(params.get('search'));
        }
    },[])

    const requestProducts = async (valueParam) => {
        const { data } = await axios.get(`http://localhost:3001/api/items?q=${valueParam}`);
        
        setProducts(data);
    }

    return (
        <div className="main-container">
            <div className="product-list">
                {productsData.items ? 
                    productsData.items.map((product) => (
                        <Product
                        key={product.id}
                        productId={product.id}
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