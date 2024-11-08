import { GlobalContext } from "../context/GlobalState";

interface Props {
  id: number;
  label: string;
  amount: number;
  color: string;
}

import "../App.css";
import { useContext } from "react";
const TransactionItem = ({ id, label, amount, color }: Props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div
      className={
        "transaction-item row align-items-center border border-5 border-top-0 border-bottom-0 border-start-0 border-" +
        color +
        " bg-white my-2 rounded-1 shadow-sm"
      }
    >
      <div className="col-11 d-flex justify-content-between p-2">
        <span>{label}</span>
        <span>{amount}$</span>
      </div>
      <button
        type="button"
        className="col-1 btn btn-close"
        data-bs-dismiss="transaction-item"
        aria-label="Close"
        onClick={() => deleteTransaction(id)}
      ></button>
    </div>
  );
};

export default TransactionItem;
