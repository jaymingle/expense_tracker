import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";
import transaction from "./Transaction.jsx";

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext)
   // console.log(transactions)
    const amount = transactions.map(transaction => transaction.amount)
    // console.log(amount)
    const income = amount.filter(figure => figure > 0).reduce((income, total) => total += income,0)
    console.log(income)

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-$0.00</p>
            </div>
        </div>
    )
}

export default IncomeExpense;