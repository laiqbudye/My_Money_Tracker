import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//initial State

const initialState = {
    transactions: [
        { id: 1, text: 'Rent', amount: -2725 },
        { id: 2, text: 'Salary', amount: 30000 },
        { id: 3, text: 'Food', amount: -3000 },
        { id: 4, text: 'Other Expenses', amount: -5000 }
    ]
}

//now create a context
export const GlobalContext = createContext(initialState);

//now create a provider component
export const GlobalProvider = ({ children  }) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}