import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center bg-light align-items-center row">
        <div className="col-11 col-md-8 col-lg-3 bg-prmary">
          <div className="fs-3 fw-bold text-center">Expense Teacker</div>

          <div className="my-3">
            <p className="mb-0">YOUR BALANCE</p>
            <span className="fs-2 fw-bold">
              $<span>260.00</span>
            </span>
          </div>

          <div className="card py-3 my-3 shadow-sm">
            <div className="fs-5 fw-bold d-flex justify-content-between">
              <div className="w-50 text-center border-end">
                <p className="mb-0">INCOME</p>
                <span className="text-success">
                  $<span>500.00</span>
                </span>
              </div>
              <div className="w-50 text-center">
                <p className="mb-0">EXPENSE</p>
                <span className="text-danger">
                  $<span>240.00</span>
                </span>
              </div>
            </div>
          </div>
          <div className="my-3">
            <p className="m-0 fs-5 fw-bold border-bottom">History </p>
            <div className="border border-5 border-top-0 border-bottom-0 border-start-0 border-success bg-white my-2 rounded-1 shadow-sm">
              <div className="d-flex justify-content-between p-2">
                <span>label</span>
                <span>+20$</span>
              </div>
            </div>
            <div className="border border-5 border-top-0 border-bottom-0 border-start-0 border-success bg-white my-2 rounded-1 shadow-sm">
              <div className="d-flex justify-content-between p-2">
                <span>label</span>
                <span>+20$</span>
              </div>
            </div>
            <div className="border border-5 border-top-0 border-bottom-0 border-start-0 border-success bg-white my-2 rounded-1 shadow-sm">
              <div className="d-flex justify-content-between p-2">
                <span>label</span>
                <span>+20$</span>
              </div>
            </div>
            <div className="border border-5 border-top-0 border-bottom-0 border-start-0 border-danger bg-white my-2 rounded-1 shadow-sm">
              <div className="d-flex justify-content-between p-2">
                <span>label</span>
                <span>-20$</span>
              </div>
            </div>
          </div>

          <div className="my-5">
            <p className="m-0 fs-5 fw-bold border-bottom">
              Add New Transaction
            </p>
            <div className="d-flex flex-column my-2">
              <label htmlFor="transactionLabel" className="fw-bold">
                Text
              </label>
              <input
                id="transactionLabel"
                type="text"
                placeholder="Enter text ..."
                className="p-1"
              />
            </div>
            <div className="d-flex flex-column my-2">
              <label htmlFor="transactionAmount">
                <span className="fw-bold">Amount</span> (negative-expense ,
                positve-income)
              </label>
              <input
                id="transactionAmount"
                type="number"
                placeholder="Enter amount ..."
                className="p-1"
              />
            </div>
            <button className="w-100 btn btn-success text-white fw-bold my-2 shadow-sm">
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
