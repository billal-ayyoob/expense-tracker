import React, { createContext, useReducer } from "react";
import TransactionsReducer from './transactionsReducer';

const initialTransactions = [
    { amount: 1500, desc: "Cash" },
    { amount: -400, desc: "Book" },
    { amount: -450, desc: "Mobile" }
]

export const TransactionsContext = createContext(initialTransactions);

export const TransactionsProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionsReducer, initialTransactions);

    function AddTransaction (transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }

    return (
        <TransactionsContext.Provider value={{
            transactions: state,
            AddTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}