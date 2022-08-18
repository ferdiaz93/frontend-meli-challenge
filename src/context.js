import React, { useState } from "react";

const initialContext = {
    loading: false,
    querySearch: "",
    products: [],
}

const SearchContext = React.createContext([{}, () => {}]);

const SearchProvider = ({children}) => {
    const [state, setState] = useState(initialContext);
    return <SearchContext.Provider value={[state, setState]}>{children}</SearchContext.Provider>
}

export { SearchContext, SearchProvider, initialContext };