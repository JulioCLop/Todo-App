
import './index.css';
import React, { useState } from "react";
import TodoItem from "./TodoItem"


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

function deleteItem(id){
  setItems( prevItems =>{
    return prevItems.filter(
      (item, index) => {

        return index !== id

    }
    )
  })
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
    {todoItems.map(( todoItems, index )=> (
      <TodoItem
      key={index}
      id={index}
      text={todoItems}
      onChecked={deleteItem}
       />
    ))}
  </ul>
      </div>
    </div>
  
}

export default App;
