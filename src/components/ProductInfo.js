import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { CurrencyFormat } from '../utils'
import useProductsData from '../hooks/useProductsData';
import axios from 'axios'

const ProductInfo = () => {
    const { getLoading, setLoading } = useProductsData();
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate()
    const loading = getLoading()

    useEffect(() => {
        if(id) {
            getProductInfo(id);
        }
    },[])

    const getProductInfo = async (id) => {
        try{
            const { data: { author, item } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/items/${id}`);
            setProduct({author, item});
        } catch(error) {
            console.log(error);
            navigate('/');
        }
    }

    const traslate = (word) =>{
        if(word === 'new'){
            return 'Nuevo'
        }
        if(word === 'used'){
            return 'Usado'
        }
        return word;
    }

    return (
        <section className="main-container">
            {product && !loading ? 
                <article className="product-info">
                    <div className="product-info__main-information">
                        <div className="product-info__main-information__image">
                            <img src={product.item.picture} alt={`${product.item.title}`}/>
                        </div>
                        <div className="product-info__main-information--desktop">
                            <small className="product-info__selling-data__details">{traslate(product.item.condition)} - {product.item.sold_quantity} vendidos</small>
                            <h1>{product.item.title}</h1>
                            <h2 className="price">{CurrencyFormat(product.item.price.amount, product.item.price.currency)}<small>{product.item.price.decimals}</small></h2>
                            <button className="btn product-detail__selling-data__buy-button">Comprar</button>
                        </div>
                    </div>
                    <div className="product-info__main-information--mobile">
                        <h2>{CurrencyFormat(product.item.price.amount, product.item.price.currency)}<small>{product.item.price.decimals}</small></h2>
                        <button className="btn product-detail__selling-data__buy-button">Comprar</button>
                    </div>
                    <div className="product-info__description">
                        <h2>Descripción del producto</h2>
                        <p>{product.item.description}</p>
                    </div>
                </article>
            : <div className="spin"></div>}
        </section>
    )
}

export default ProductInfo;