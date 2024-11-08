import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="my-3">
      <p className="mb-0">YOUR BALANCE</p>
      <span className="fs-2 fw-bold">${total}</span>
    </div>
  );
};

export default Balance;
