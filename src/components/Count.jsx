import {useState} from "react";

export function Count({btnText, onConfirm}){
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const confirm = () => {if(count > 0){onConfirm(count)}};

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row justify-content-center align-items-center gap-3 mb-2">
        <button className="btn btn-warning" onClick={decrement} disabled={count === 0}> - </button>
        <span><strong>{count}</strong></span>
        <button className="btn btn-warning" onClick={increment}> + </button>
      </div>
      <button className="btn btn-success" onClick={confirm} disabled={count === 0}>{btnText}</button>
    </div>
  );
};