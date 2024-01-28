import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";

const Transaction = ({id, amount, text}) => {
    // const context = useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext)
    const sign = amount < 0 ? '-' : '+';

    const deleteTransactionHandler = () => {
        console.log(id, text)
        console.log(transactions)
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