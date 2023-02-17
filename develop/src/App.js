import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const buttons = ["AC","+/-", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]
  const [numberBox, setNumberBox] = useState('')
  function handleNumber(ammount) {
    setNumberBox(prevValue => {
      prevValue + amount
    })
  }
  return (
    <div className="App">
      <section className="calculator-container">
        <div className="number-container">asddas</div>
        <div className="button-container">
          {buttons.map(button => {
            return(<div value={button} className="button-div"><p>{button}</p></div>)
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
