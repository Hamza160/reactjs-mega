import { useEffect, useState } from "react"

const ExampleThree = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name')
    return savedName ? JSON.parse(savedName): ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleClear = () => setName('')

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
  }, [name])

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name"/>
      <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default ExampleThree