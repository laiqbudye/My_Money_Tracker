import React, { Fragment, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
export const TransactionList = () => {
    const { transactions, getAllTransactions } = useContext(GlobalContext);
    
    useEffect(() => {
        getAllTransactions();
    },[]);

    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction}/>)
                )}
            </ul>
        </Fragment>
    )
}
