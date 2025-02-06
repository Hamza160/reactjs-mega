import { useContext, useState } from "react"
import { Todo, TodoContext, TodoContextInterface } from "./states/TodoContext"
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const context = useContext(TodoContext);
  if(!context){
    throw new Error("useContext must be used within a TodoProvider")
  }
  const {todos, addTodo, removeTodo, toggleTodo} = context;
  
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(newTodo.trim()){
      addTodo({
          id:uuidv4(),
          title: newTodo,
          isCompleted:false,
      })
      setNewTodo('')
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="Add Todo"/>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
      {
        todos.length > 0 && todos.map((todo:Todo) => (
          <li key={todo.id}><span style={{textDecoration:todo.isCompleted ? 'line-through' : ''}}>{todo.title}</span> <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}/> <button onClick={() => removeTodo(todo.id)}>remove</button></li>
        ))
      }
      </ul>
    </div>
  )

}

export default App