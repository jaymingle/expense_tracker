import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";
import Transaction from "./Transaction.jsx";

const TransactionList = () => {

    // const context = useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext);
    console.log(transactions)

    return(
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => <Transaction key={transaction.id} id={transaction.id} text={transaction.text} amount={transaction.amount} transaction={transactions}/>)}
            </ul>
        </>
    )
}

export default TransactionList;