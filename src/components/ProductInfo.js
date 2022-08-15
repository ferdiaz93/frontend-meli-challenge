import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ProductInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = React.useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        if(id) {
            getProductInfo(id);
        }
    },[])

    const getProductInfo = async (id) => {
        try{
            const { data: { author, item } } = await axios.get(`http://localhost:3001/api/items/${id}`);
            setProduct({author, item});
        } catch(error) {
            console.log(error);
            navigate('/');
        }
    }

    return (
        <section className="main-container">
            {product ? 
                <article className="product-info">
                    <div className="product-info__main-information">
                        <div className="product-detail__image">
                            <img src={product.item.picture} alt=""/>
                        </div>
                        <div className="product-detail__selling-data">
                            <small className="product-detail__selling-data__details">Nuevo - 234 vendidos</small>
                            <h1>{product.item.title}</h1>
                            <h2>${product.item.price.amount}<small>{product.item.price.decimals}</small></h2>
                            <button className="btn product-detail__selling-data__buy-button">Comprar</button>
                        </div>
                    </div>
                    <div className="product-info__description">
                        <h2>Descripción del producto</h2>
                        <p dangerouslySetInnerHTML={{ __html: product.item.description }}></p>
                    </div>
                </article>
            : null}
        </section>
    )
}

export default ProductInfo;