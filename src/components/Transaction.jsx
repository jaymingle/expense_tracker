import React from "react";

const Transaction = ({amount, text}) => {
    return (
        <div>
            <li className={`${amount > 0 ? 'plus' : 'minus' }`}>
                {text} <span>{amount}</span><button className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction;