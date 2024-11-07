import React from "react";
interface Props {
  income: string;
  expense: string;
}
const IncomeExpense = ({ income, expense }: Props) => {
  return (
    <div className="card py-3 my-3 shadow-sm">
      <div className="fs-5 fw-bold d-flex justify-content-between">
        <div className="w-50 text-center border-end">
          <p className="mb-0">INCOME</p>
          <span className="text-success">+${income}</span>
        </div>
        <div className="w-50 text-center">
          <p className="mb-0">EXPENSE</p>
          <span className="text-danger">-${expense}</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
