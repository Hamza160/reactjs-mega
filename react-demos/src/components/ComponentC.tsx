import { useContext } from "react"
import { Data, Data1 } from "../App"

const ComponentC = () => {
  const name = useContext(Data)
  const age = useContext(Data1);
  return (
    <h1>Hi my name is {name} and i'm {age} years old</h1>
    // <Data.Consumer>
    //   {(name) => (
    //     <Data1.Consumer>
    //       {age => (
    //         <h1>Hi my name is {name} and i'm {age} years old</h1>
    //       )}
    //     </Data1.Consumer>
    //   )}
    // </Data.Consumer>
  )
}

export default ComponentC