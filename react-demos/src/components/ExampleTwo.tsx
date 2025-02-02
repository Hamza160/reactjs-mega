import { useState } from "react";

function ExampleTwo() {
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100))

  const generateNewRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100))
  }

  return (
   <div>
    <h1>Random Number: {randomNumber}</h1>
    <button onClick={generateNewRandomNumber}>Generate New Number</button>
   </div>
  )
}

export default ExampleTwo;