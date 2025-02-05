import { useRef } from "react"

const App = () => {
  const inputRef = useRef(null)
  
  const focusInput = () => {
    inputRef.current.focus()
    inputRef.current.value = 'Hamza Ashraf'
  }

  return (
  <div>
     <input type="text" ref={inputRef}/>
     <button onClick={focusInput}>Focus & Write Hamza</button>
  </div>
  )
}

export default App