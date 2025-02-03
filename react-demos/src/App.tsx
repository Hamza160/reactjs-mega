import { useState, useEffect } from "react"

const App = () => {
  const [value, setValue] = useState(0)
  const [something, setSomething] = useState(0)
  const [data, setData] = useState([])
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const data = await response.json()
      if(data && data.length){
        setData(data);
      }
    }
    getData()
  }, [])

  // useEffect(() => {
  //     console.log('call useEffect')
  //     document.title = `Increment ${value}`
  // }, [value, something])



  //1. If we don not provide dependancy array [] useEffect will call everytime a component will rendered
  //2. If we don provide empty dependancy array [] useEffect will call for one time only
  //3. 

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <hr />
      <h2>{value}</h2>
      <button onClick={() => setValue(preValue => preValue + 1)}>Click me</button>
      <button onClick={() => setSomething(preValue => preValue + 1)}>Increment by something</button>
    </div>
  )
}

export default App