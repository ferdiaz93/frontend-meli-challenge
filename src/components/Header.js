import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo_desk from '../assets/images/logo__large_plus.png'
import logo_mobile from '../assets/images/logo__small.png'

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
        search();
    }
    
    const search = () => {
        if(valueInput){
            navigate(`/items?search=${valueInput}`);
        }
    }

    return (
        <header className="header">
            <a className="header__logo-container" href='/'>
                <picture>
                    <source media="(min-width: 992px)" srcSet={logo_desk}/>
                    <img src={logo_mobile} alt="logo-mercadolibre"/>
                </picture>
            </a>
            <form className="header__form" onSubmit={(e) => handleSubmit(e)}>
                <input 
                className="header__form__input"
                type="text" 
                placeholder="Nunca dejes de buscar"
                name="search" 
                value={valueInput} 
                onChange={(e) => setValueInput(e.target.value)}/>
                <i className="fas fa-search" onClick={search}></i>
            </form>
        </header>
    )
}

export default Header;