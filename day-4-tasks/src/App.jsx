import react, { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleAddTodo = () => {
    if (task.trim() !== ''){
      setTodos([...todos, task]);
      setTask('')
    }
  }

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i)=>i !== index);
    setTodos(newTodos);
  }

  return (

    <>
      <div className="App">
        <header className="App-header">
          <h1>TODO App</h1>
          <div className="input-todo">
            <input type="text" placeholder='Add a new task' value = {task} onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={handleAddTodo}>Add</button>
          </div>
          <ul className="todo-list">
            {todos.map((todo,index)=>(
              <li key={index}>
                {todo}
                <button onClick={()=>handleRemoveTodo(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </>

  )

}