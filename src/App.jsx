import './App.css'
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeExpense from "./components/IncomeExpense.jsx";

function App() {
  return (
    <>
        <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpense/>
        </div>
    </>
  )
}

export default App
