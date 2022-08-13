import React, { useState } from 'react'
import axios from 'axios'
import useProductsData from '../hooks/useProductsData'

const Header = () => {
    const [valueInput, setValueInput] = useState('');
    const { setProducts } = useProductsData();

    const handleSubmit = (e) => {
        e.preventDefault();
        requestProducts(valueInput)
    }

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
        <header>
            <div className="logo-container">
                <h1>LOGO</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                type="text" 
                placeholder="Nunca dejes de buscar"
                name="search" 
                value={valueInput} 
                onChange={(e) => setValueInput(e.target.value)}/>
                <i className="fas fa-search"></i>
            </form>
        </header>
    )
}

export default Header;