import { createContext } from "react"
import ComponentC from "./components/ComponentC"
import UserProfile from "./components/UserProfile"
import UserProvider from "./components/UserContext"

export const Data = createContext()
export const Data1 = createContext()

const App = () => {
  const name = 'Hamza Ashraf'
  const age = 22;
  return (
    <div>
      <UserProvider>
        <UserProfile/>
      </UserProvider>
      {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC/>
        </Data1.Provider>
      </Data.Provider> */}
    </div>
  )
}

export default App