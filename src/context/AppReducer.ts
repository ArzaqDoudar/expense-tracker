type Transaction = { id: number; label: string; amount: number };

type Action =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | { type: "ADD_TRANSACTION"; payload: Transaction };

export default (state: any, action: Action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter((transaction:any)=> transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload,...state.transactions ]
            }
        default:
            return state;
    }
}
