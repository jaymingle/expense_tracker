import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";

const Transaction = ({id, amount, text}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = amount < 0 ? '-' : '+';

    const deleteTransactionHandler = () => {
        deleteTransaction(id)
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