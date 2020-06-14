import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amountarr = transactions.map(transaction => transaction.amount);
    const totalamount = amountarr.reduce((acc, item) => (acc += item),0).toFixed(2);
    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1 >INR {totalamount}</h1>
        </Fragment>
    )
}
