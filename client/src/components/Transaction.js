import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";

    return (
        <li key={transaction._id} className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} <span>{sign}{new Intl.NumberFormat('en-IN').format(Math.abs(transaction.amount))} Rs. </span>
            <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
