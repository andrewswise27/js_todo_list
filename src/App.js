import { useState } from 'react';
import './App.css';

function App() {
  
  const [todo, setTodo] = useState([
    {name: "Put enter button in its place", priority: "high"},
    {name: "Take Dbol", priority: "low"},
    {name: "Make gains", priority: "low"},
    {name: "Make Dinner", priority: "high"}
  ]);

  const [newTodo, setNewTodo] = useState(""); 
  const [newPriority, setNewPriority] = useState("");

  const todoNodes = todo.map((todo, index) => {
    return (
      <li key={index} className={ todo.priority == "high" ? "purchased": "not-purchased"}>
        <span>
          {todo.name}
        </span>
      </li>
    );
  } );

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value);
  };

  const setPriority = (event) => {
    setNewPriority(event.target.value)
  };

  const saveNewTodo = (event) => {
    event.preventDefault();
    const newList = [...todo];
    newList.push({
      name: newTodo,
      priority: newPriority
    });
    setTodo(newList);
    setNewTodo("")
  };


 

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <hr></hr>
      <form onSubmit={saveNewTodo}>
        <label>New To-Do: </label>
        <input
        id='new-todo'
        type='text'
        value={newTodo}
        onChange={handleTodoInput}
        /> &nbsp;
        <fieldset onChange={setPriority}>
          <label htmlFor='high'>High</label>
          <input type='radio' value="high" id='high' name='priority' className='priority'/>
          &nbsp;
          <label htmlFor='low'>Low</label>
          <input type='radio' value="low" id='low' name='priority' className='priority'/>
          <input type="submit" value="Add to List!"/>
        </fieldset>
      </form>
      <ul>
        {todoNodes}
      </ul>
     
    </div>
  );
};

export default App;
