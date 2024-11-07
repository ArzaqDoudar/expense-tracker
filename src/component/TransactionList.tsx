import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  return (
    <div className="my-3">
      <p className="m-0 fs-5 fw-bold border-bottom">History </p>
      <TransactionItem label={"LABEl"} amount={"-30$"} color={"danger"} />
      <TransactionItem label={"LABEl"} amount={"-30$"} color={"danger"} />
      <TransactionItem label={"LABEl"} amount={"+30$"} color={"success"} />
      <TransactionItem label={"LABEl"} amount={"+30$"} color={"success"} />
      <TransactionItem label={"LABEl"} amount={"+30$"} color={"success"} />
      {/* <TransactionItem />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem /> */}
    </div>
  );
};

export default TransactionList;
