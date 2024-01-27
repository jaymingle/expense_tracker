import './App.css'
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeExpense from "./components/IncomeExpense.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";

import {GlobalProvider} from "./context/GlobalState.jsx";

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    </GlobalProvider>
  )
}

export default App
