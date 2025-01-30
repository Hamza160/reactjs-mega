
const Greeting = () => {
    const message = 'Hello World'
    const currentDate = new Date().toISOString()
  return (
    <div>
        <h1>{message}</h1>
        <h2>{currentDate}</h2>
    </div>
  )
}

export default Greeting