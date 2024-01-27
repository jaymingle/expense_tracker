import {useState} from "react";

const AddTransaction = () => {

    const [transactionText, setTransactionText] = useState('')
    const [transactionCost, setTransactionCost] = useState(0)

    const transactionTextHandler = () => {

    }

    const transactionAmountHandler = () => {

    }

    const transactionSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Transaction Added")
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={transactionSubmitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" onChange={transactionTextHandler} id="text" placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
                    <input type="number" onChange={transactionAmountHandler} id="amount" placeholder="Enter amount..."/>
                </div>
                <input className="btn" type="submit" value="Add transaction"/>
            </form>
        </div>
    )
}
export default AddTransaction;