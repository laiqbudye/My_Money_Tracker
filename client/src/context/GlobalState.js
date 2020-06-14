import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//initial State

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//now create a context
export const GlobalContext = createContext(initialState);

//now create a provider component
export const GlobalProvider = ({ children  }) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    // actions to perform

    async function addTransaction(transaction) {
        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions',transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
            
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
        
    }

    async function getAllTransactions(){
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
           
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        getAllTransactions,
        error: state.error,
        loading: state.loading
    }}>
        {children}
    </GlobalContext.Provider>)
}