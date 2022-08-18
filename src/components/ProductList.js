import React, { useEffect } from 'react';
import Product from './Product';
import axios from 'axios';
import useProductsData from '../hooks/useProductsData';

const ProductList = () => {
    const { getProducts, setProducts, getQuerySearch, getLoading, setLoading } = useProductsData();
    const productsData = getProducts();
    const querySearch = getQuerySearch();
    const loading = getLoading();
    
    useEffect(() => {
        if(querySearch) {
            requestProducts(querySearch);
        }
    },[querySearch])

    const requestProducts = async (valueParam) => {
        setLoading(true)
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/items?q=${valueParam}`);
        setProducts(data);
        setLoading(false)
    }

    return (
        <div className="main-container">
            {loading ? 
                <div className="spin"></div>
            : 
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
                            freeShipping={product.free_shipping}
                            />
                        ))
                    : null}
                </div>
            }
        </div>
    )
}

export default ProductList;