import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";

    return (
        <li key={transaction.id} className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} <span>{sign}{Math.abs(transaction.amount)} Rs. </span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
