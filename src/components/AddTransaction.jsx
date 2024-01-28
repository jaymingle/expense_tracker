import React, {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const transactionTextHandler = (e) => {
        setText(e.target.value)
    }

    const transactionAmountHandler = (e) => {
        setAmount(e.target.value)
    }

    const transactionSubmitHandler = e => {
        e.preventDefault()
        console.log("Transaction Added")
        let newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount
        }
        addTransaction(newTransaction)
        setText('')
        setAmount(0)
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={transactionSubmitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" onChange={transactionTextHandler} value={text} id="text" placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
                    <input type="number" onChange={transactionAmountHandler} value={amount} id="amount" placeholder="Enter amount..."/>
                </div>
                <input className="btn" type="submit" value="Add transaction"/>
            </form>
        </div>
    )
}
export default AddTransaction;