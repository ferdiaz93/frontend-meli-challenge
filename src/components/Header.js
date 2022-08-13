import React, { useState } from 'react'
import axios from 'axios'

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
    ]
}

const Header = () => {
    const [valueInput, setValueInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(response);
        // axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${valueInput}`)
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
                <i class="fas fa-search"></i>
            </form>
        </header>
    )
}

export default Header;