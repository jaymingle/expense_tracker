import React, {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext)

    const [transactionText, setTransactionText] = useState('')
    const [transactionCost, setTransactionCost] = useState(0)

    const transactionTextHandler = (e) => {
        setTransactionText(e.target.value)
    }

    const transactionAmountHandler = (e) => {
        setTransactionCost(e.target.value)
    }

    const transactionSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Transaction Added")
        let newTransaction = {
            transactionText,
            transactionCost
        }
        console.log("Transaction", newTransaction)

        setTransactionText('')
        setTransactionCost(0)
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={transactionSubmitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" onChange={transactionTextHandler} value={transactionText} id="text" placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
                    <input type="number" onChange={transactionAmountHandler} value={transactionCost} id="amount" placeholder="Enter amount..."/>
                </div>
                <input className="btn" type="submit" value="Add transaction"/>
            </form>
        </div>
    )
}
export default AddTransaction;