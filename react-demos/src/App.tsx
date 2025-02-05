import { createContext } from "react"
import ComponentC from "./components/ComponentC";
import UserProvider from "./components/UserContext";
import UserProfile from "./components/UserProfile";

export const Data = createContext()
export const Data1 = createContext()

const App = () => {
  const name = 'Hamza Ashraf';
  const age = 28;
  return (
    <UserProvider>
      <UserProfile/> 
    </UserProvider>
    // <Data.Provider value={name}>
    //   <Data1.Provider value={age}>
    //     <ComponentC />
    //   </Data1.Provider>
    // </Data.Provider>
  )
}

export default App