import React from "react";
interface Props {
  balance: string;
}
const Balance = ({ balance }: Props) => {
  return (
    <div className="my-3">
      <p className="mb-0">YOUR BALANCE</p>
      <span className="fs-2 fw-bold">${balance}</span>
    </div>
  );
};

export default Balance;
