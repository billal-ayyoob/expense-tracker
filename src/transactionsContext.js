import React, { createContext, useReducer } from "react";
import TransactionsReducer from './transactionsReducer';

const initialTransactions = {
    transactions: []
}

export const TransactionsContext = createContext(initialTransactions);

export const TransactionsProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionsReducer, initialTransactions);

    function AddTransaction (transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    function DelTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <TransactionsContext.Provider value={{
            transactions: state.transactions,
            AddTransaction,
            DelTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}
