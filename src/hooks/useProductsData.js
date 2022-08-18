import { useContext } from "react";
import { SearchContext } from "../context";

const useProductsData = () => {
    const [state, setState] = useContext(SearchContext);
    
    const getLoading = () => {
        return state.loading
    }

    const getProducts = () => {
        return state.products
    }
    
    const getQuerySearch = () => {
        return state.querySearch
    }

    const setProducts = (newProducts) => {
        setState((prevState) => ({
            ...prevState,
            products: newProducts
        }));
    }

    const setQuerySearch = (newQuerySearch) => {
        setState((prevState) => ({
            ...prevState,
            querySearch: newQuerySearch
        }));
    }

    const setLoading = (param) => {
        setState((prevState) => ({
            ...prevState,
            loading: param
        }));
    }

    return {
        getProducts,
        setProducts,
        getQuerySearch,
        setQuerySearch,
        getLoading,
        setLoading
    }
}

export default useProductsData;