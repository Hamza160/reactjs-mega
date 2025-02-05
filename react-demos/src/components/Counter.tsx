import { useReducer, useState } from "react"
import { initialState, reducer } from "../counterReducer"

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [input, setInput] = useState(0)

    const incrementByAmount = () => {
        if(input > 0){
            dispatch({type:'incrementByNumber', payload:input})
            setInput(0)
        }
    }

    const decrementByAmount = () => {
        if(input > 0){
            dispatch({type:'decrementByNumber', payload:input})
            setInput(0)
        }
    }

  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type:'increment'})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset', payload:3})}>Reset</button> <br />
        <input type="number" value={input} onChange={e => setInput(Number(e.target.value))}/>
        <button onClick={incrementByAmount}>Increament By Number</button>
        <button onClick={decrementByAmount}>Decreament By Number</button>
    </div>
  )
}

export default Counter