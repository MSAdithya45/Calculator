import './Calc.css';
import { useState } from "react";

function Calc() {
  const [state, setState] = useState("");  
  const [mid, setMid] = useState(""); 
  const [result, setResult] = useState(""); 
  const [operator, setOperator] = useState(null);  

  function ClickHandler(value) {
    return () => {
      setState(prev => prev + value);
    };
  }

 
  function ClickOperator(value) {
    return () => {
      setMid(state);        
      setOperator(value);   
      setState("");         
    };
  }

  function ClickEquals() {
    return () => {
      const a = Number(mid);
      const b = Number(state);

      let res;
      switch (operator) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = a / b; break;
        default: res = "Error";
      }

      setResult(res);
      setState(String(res));   
      setMid("");
      setOperator(null);
    };
  }

  function handleInputChange(e) {
    setState(e.target.value);
  }

  return (
    <div>
      <h2>Simple Calculator</h2>
      <input type='text' value={state} onChange={handleInputChange} />

      <h3>Result: {result}</h3>

      <div className="calc-grid">
        <button onClick={ClickHandler("1")}>1</button>
        <button onClick={ClickHandler("2")}>2</button>
        <button onClick={ClickHandler("3")}>3</button>
        <button onClick={ClickOperator("+")} className="operator">+</button>

        <button onClick={ClickHandler("4")}>4</button>
        <button onClick={ClickHandler("5")}>5</button>
        <button onClick={ClickHandler("6")}>6</button>
        <button onClick={ClickOperator("-")} className="operator">-</button>

        <button onClick={ClickHandler("7")}>7</button>
        <button onClick={ClickHandler("8")}>8</button>
        <button onClick={ClickHandler("9")}>9</button>
        <button onClick={ClickOperator("*")} className="operator">*</button>

        <button onClick={() => setState(state.slice(0, -1))}>del</button>
        <button onClick={ClickHandler("0")}>0</button>
        <button onClick={() => { setState(""); setMid(""); setResult(""); }} className="clear-btn">clear</button>
        <button onClick={ClickOperator("/")} className="operator">/</button>
        
        <button onClick={ClickEquals()} className="operator">=</button>
      </div>
    </div>
  );
}

export default Calc;
