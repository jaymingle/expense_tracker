import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState.jsx";

const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount)
    console.log(amount)
    const total = amount.reduce((acc, amount) => (acc += amount), 0)
    console.log(total)

    return(
        <>
            <h4>Your Balance</h4>
            <h1 className="balance">${total}</h1>
        </>
    )
}
export default Balance;