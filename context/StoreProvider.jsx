import { useState, useEffect, createContext } from 'react';

const StoreContext = createContext();


const StoreProvider = ({ children }) => {

    return (
        <StoreContext.Provider value={{}}>
        {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext;