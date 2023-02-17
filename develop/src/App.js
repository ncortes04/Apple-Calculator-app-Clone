import logo from './logo.svg';
import {useState, useRef} from 'react'
import './App.css';

function App() {
  const buttons = ["AC","+/-", "%", `\u{000F7}`, 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="]
  const [numberBox, setNumberBox] = useState('')
  //since we do not require to display these on the webpage we use the useRef to
  //not re render on every change
  var mathRef = useRef(0)
  var mathArr = useRef([])
  function handleMathSymbols(expression) {
    switch(expression) {
      case '=':
        mathArr.current.push(mathRef.current)
        setNumberBox(eval(mathArr.current.join('')))
        mathArr.current = []
        break;
      case "x":
        if(mathArr.current[mathArr.current.length-1] !== "*") {
          mathArr.current.push(mathRef.current, "*")
        }
        setNumberBox('')
        break;
      case "\u{000F7}":
        if(mathArr.current[mathArr.current.length-1] !== "/") {
          mathArr.current.push(mathRef.current, "/")
        }
      setNumberBox('')
        break;
      case "-":
        if(mathArr.current[mathArr.current.length-1] !== "-") {
          mathArr.current.push(mathRef.current, "-")
        }
         setNumberBox('')
         break;
      case "+":
         if(mathArr.current[mathArr.current.length-1] !== "+") {
          mathArr.current.push(mathRef.current, "+")
        }
          setNumberBox('')
          break;
    }

  }
  function handleNumber(digit) {
    if(typeof digit == 'number') {
      setNumberBox(prevValue => {
        return `${prevValue}${digit}`
      })
      return
    }
    switch (digit) {
      case 'AC':
        setNumberBox('')
        mathRef.current = 0
        break;
      case '+/-':
        if (numberBox !== '') {
          setNumberBox(prevValue => {
            return -prevValue
          });
        }
        break;
      case '%':
        if(numberBox !== ''){
          setNumberBox(prevValue => {
            return prevValue / 100
          });
        }
      break;
      case '.':
        setNumberBox(prevValue => {
          return prevValue + "."
        });
      break;
    }
    mathRef.current = numberBox
    if(mathRef.current !== 0) {
      handleMathSymbols(digit)
    }
  }
  return (
    <div className="App">
      <section className="calculator-container">
        <div className="number-container">{numberBox === '' ? 0 : numberBox}</div>
        <div className="button-container">
          {buttons.map(button => {
            return(<div value={button}className="button-div"><button onClick={(e) =>handleNumber(button)}>{button}</button></div>)
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
