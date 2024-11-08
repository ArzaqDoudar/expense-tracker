import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: any) => {
    e.preventDefault(); // this is so emportent , because without it the button not work

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      label: text,
      amount: amount,
    };

    if (text !== "" && amount !== 0) {
      addTransaction(newTransaction);
    }
    setText("");
    setAmount(0);
  };

  return (
    <div className="my-5">
      <p className="m-0 fs-5 fw-bold border-bottom">Add New Transaction</p>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-column my-2">
          <label htmlFor="transactionLabel" className="fw-bold">
            Text
          </label>
          <input
            id="transactionLabel"
            className="p-1"
            type="text"
            placeholder="Enter text ..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              console.log("text", text);
            }}
          />
        </div>
        <div className="d-flex flex-column my-2">
          <label htmlFor="transactionAmount">
            <span className="fw-bold">Amount</span> <br />
            (negative-expense , positve-income)
          </label>
          <input
            id="transactionAmount"
            className="p-1"
            type="number"
            placeholder="Enter amount ..."
            value={amount}
            onChange={(e) => {
              setAmount(parseFloat(e.target.value));
              console.log("amount", amount);
            }}
          />
        </div>
        <button className="w-100 btn btn-success text-white fw-bold my-2 shadow-sm">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
