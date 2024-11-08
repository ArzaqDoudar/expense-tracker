import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="card py-3 my-3 shadow-sm">
      <div className="fs-5 fw-bold d-flex justify-content-between">
        <div className="w-50 text-center border-end">
          <p className="mb-0">INCOME</p>
          <span className="text-success">+${totalIncome}</span>
        </div>
        <div className="w-50 text-center">
          <p className="mb-0">EXPENSE</p>
          <span className="text-danger">
            -${Math.abs(parseFloat(totalExpense))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
