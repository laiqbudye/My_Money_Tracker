import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            text: text,
            amount: +amount  // shortcut to convert string into number
        }

        addTransaction(newTransaction);
    };

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label for="amount"
                    >Amount <br />
            (for expenses please add ' - ' before amount)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    )
}
