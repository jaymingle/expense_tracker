import './App.css'
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeExpense from "./components/IncomeExpense.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";

function App() {
  return (
    <>
        <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    </>
  )
}

export default App
