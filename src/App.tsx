import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

function App() {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center bg-light align-items-center row">
        <div className="col-11 col-md-8 col-lg-3 bg-prmary">
          <Header text={"Expense Teacker"} />
          <Balance balance={"240.00"} />
          <IncomeExpense income={"500.00"} expense={"260.00"} />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </>
  );
}

export default App;
