import React, { useContext } from "react";
import { SearchContext } from "../context";

const useProductsData = () => {
    const [state, setState] = useContext(SearchContext);
    
    const getProducts = () => {
        return state.products
    }

    const setProducts = (newProducts) => {
        setState((prevState) => ({
            ...prevState,
            products: newProducts
        }));
    }

    return {
        getProducts,
        setProducts
    }
}

export default useProductsData;