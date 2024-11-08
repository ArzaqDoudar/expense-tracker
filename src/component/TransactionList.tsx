import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log("context", transactions);
  return (
    <div className="my-3">
      <p className="m-0 fs-5 fw-bold border-bottom">History </p>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          label={transaction.label}
          amount={transaction.amount}
          color={transaction.amount < 0 ? "danger" : "success"}
        />
      ))}
    </div>
  );
};

export default TransactionList;
