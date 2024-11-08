import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, label: "Flower", amount: -20 },
    { id: 2, label: "Salary", amount: 300 },
    { id: 3, label: "Book", amount: -10 },
    { id: 4, label: "Camera", amount: -110 },
    { id: 5, label: "Food", amount: -15 },
  ],
  deleteTransaction: (id: number) => {},
  addTransaction: (transaction: { label: string; amount: number }) => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction: { label: string; amount: number }) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...transaction, id: Date.now() },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
