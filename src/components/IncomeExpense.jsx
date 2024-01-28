import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";
import transaction from "./Transaction.jsx";

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const income = Number(amount.filter(figure => figure > 0).reduce((income, total) => total += income,0).toFixed(2))
    console.log(income)

    const expense = Number(amount.filter(figure => figure < 0).reduce((expense, total) => total += expense, 0).toFixed(2))
    console.log(expense)

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;