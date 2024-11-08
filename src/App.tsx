import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";
import { useEffect } from "react";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  useEffect(() => {}, []);
  return (
    <GlobalProvider>
      <div className="vh-100 d-flex justify-content-center bg-light align-items-center row">
        <div className="col-11 col-md-8 col-lg-3 bg-prmary">
          <Header text={"Expense Teacker"} />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
