import React from "react";

const Transaction = ({id, amount, text}) => {

    const sign = amount < 0 ? '-' : '+';

    const deleteTransactionHandler = () => {
        console.log(id, text)
    }

    return (
        <div>
            <li className={`${amount > 0 ? 'plus' : 'minus' }`}>
                {text} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn" onClick={deleteTransactionHandler}>x</button>
            </li>
        </div>
    )
}

export default Transaction;