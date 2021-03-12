
import './index.css';
import React, { useState } from "react"


function App() {

  
const [inputText, setInputText] = useState('')
const [todoItems, setItems]  = useState([]);

function onChangeInput(e){
const newValue = e.target.value

setInputText(newValue)

}
function addItem(){
  setItems((prevItems) =>{
    return [...prevItems, inputText.toUpperCase()]
 
  })
   
setInputText('')
}
  return<div className="App">
      <div className="container">
      <div className="header">
        <p>Todo App</p>
      </div>
  <div className="input">
    <input onChange={onChangeInput} className="input-field" type="text" value={inputText}  />
    <button onClick={addItem} className="btn" >Add</button>
  </div>
  <ul>
    {todoItems.map(item => <li>{item}</li>)}
  </ul>
      </div>
    </div>
  
}

export default App;
