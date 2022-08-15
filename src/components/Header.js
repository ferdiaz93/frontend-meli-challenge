import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [valueInput, setValueInput] = useState('');
    let navigate = useNavigate();
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if(params.get('search') !== null) {
            setValueInput(params.get('search'));
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/items?search=${valueInput}`);
    }

    return (
        <header className="header">
            <div className="header__logo-container">
                <h1>LOGO</h1>
            </div>
            <form className="header__form" onSubmit={(e) => handleSubmit(e)}>
                <input 
                className="header__form__input"
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