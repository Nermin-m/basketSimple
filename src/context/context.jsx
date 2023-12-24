import React, { createContext, useReducer } from 'react';

export const FruitApp = createContext();

const initialValues = {
    price: 0,
    count: 0,
    basket: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'artir':
            return {
                ...state,
                price: state.price * state.count,
                count: state.count + 1,
            };
        case 'azalt':
            return {
                ...state,
                price: state.price/ state.count,
                count: state.count - 1,
            };
        case 'add':
            return {
                ...state,
                basket: state.count,
            };
        default:
            return state;
    }
};

function Context({ children }) {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return (
        <FruitApp.Provider value={{ state, dispatch }}>
            {children}
        </FruitApp.Provider>
    );
}

export default Context;
