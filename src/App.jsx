import './App.css'
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";

function App() {
  return (
    <>
        <Header/>
        <div className="container">
            <Balance/>
        </div>
    </>
  )
}

export default App
