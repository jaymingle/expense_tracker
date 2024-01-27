import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";

const TransactionList = () => {

    // const context = useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext);
    console.log(transactions)

    return(
        <>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                     Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList;