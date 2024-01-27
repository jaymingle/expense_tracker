import React from "react";

const Transaction = ({id, amount, text}) => {
    return (
        <div>
            <li className={`${amount > 0 ? 'plus' : 'minus' }`} key={id}>
                {text} <span>{amount}</span><button className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction;