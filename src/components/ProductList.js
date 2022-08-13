import React, { useEffect } from 'react'
import Product from './Product'
import axios from 'axios'
import useProductsData from '../hooks/useProductsData'
import { useParams, useNavigate } from 'react-router-dom'

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
        const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${valueParam}`);
        const customResponse = {
            items: data.results.map(item => ({
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: "50"
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                location: item.address.city_name
            })),
            author:{
                name: "Pedro",
                lastname: "Perez"
            },
            categories: ["muebles"],
        }
        setProducts(customResponse);
    }

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