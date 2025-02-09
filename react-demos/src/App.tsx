import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Category from "./Sidebar/Category/Category"
import Colors from "./Sidebar/Colors/Colors"
import Price from "./Sidebar/Price/Price"
import "./index.css"
const App = () => {
  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
      <Category />
      <Colors />
      <Price />
    </>
  )
}

export default App