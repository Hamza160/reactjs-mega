import { useState } from "react"

const TodosList = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<string[]>([])

    const addNewTodo = () => {
        setTodos([...todos, todo]);
        setTodo('')
    }

  return (
    <div>
        <h1>Todos Lists</h1>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Todo Name"/>
        <button onClick={addNewTodo}>Add New</button>
        <ul>
            {todos.map(t => (
                <li key={t}>{t}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodosList