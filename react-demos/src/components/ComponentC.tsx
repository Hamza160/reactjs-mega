
import { useContext } from "react"
import { Data, Data1 } from "../App"

const ComponentC = () => {
  const userName =  useContext(Data)
  const Age = useContext(Data1)
  return (
    <h1>
      My name is {userName} and i'm {Age} years old
    </h1>
    // <Data.Consumer>
    //   {(name) => {
    //     // return <h1>{name}</h1>
    //     return (
    //       <Data1.Consumer>
    //         {(age) => {
    //           return <h1>My name is {name} and i'm {age} years old</h1>
    //         }}
    //       </Data1.Consumer>
    //     )
    //   }}
    // </Data.Consumer>
  )
}

export default ComponentC