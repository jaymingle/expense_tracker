import React from "react";

const Transaction = ({amount, text}) => {

    const sign = amount < 0 ? '-' : '+';

    return (
        <div>
            <li className={`${amount > 0 ? 'plus' : 'minus' }`}>
                {text} <span>{sign}${amount}</span><button className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction;