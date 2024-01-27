import React from "react";

const Transaction = ({id, amount, text}) => {
    return (
        <div>
            <li className={`${transaction.amount > 0 ? 'plus' : 'minus' }`} key={transaction.id}>
                {transaction.text} <span>{transaction.amount}</span><button className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction;