import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState.jsx";

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext)
   console.log(transactions)

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