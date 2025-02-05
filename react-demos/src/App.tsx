import { useReducer } from "react"

interface InitialStateInterface {
  count: number;
}

const initialState:InitialStateInterface = { count:0 }

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {...state, count:state.count + 1}
    case 'decrement':
      return {...state, count: state.count - 1}
    case 'reset':
      return {...state, count: 0}
    default:
      return state
  }
}

const App = () => {
  const [state, disptach] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => disptach({type:'increment'})}>Increment</button>
      <button onClick={() => disptach({type:'decrement'})}>Decrement</button>
      <button onClick={() => disptach({type:'reset'})}>Reset</button>
    </div>
  )
}

export default App