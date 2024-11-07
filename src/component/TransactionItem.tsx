import React from "react";

interface Props {
  label: string;
  amount: string;
  color: string;
}
const TransactionItem = ({ label, amount, color }: Props) => {
  return (
    <div
      className={
        "border border-5 border-top-0 border-bottom-0 border-start-0 border-" +
        color +
        " bg-white my-2 rounded-1 shadow-sm"
      }
    >
      <div className="d-flex justify-content-between p-2">
        <span>{label}</span>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default TransactionItem;
