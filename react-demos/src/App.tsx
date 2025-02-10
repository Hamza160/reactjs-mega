import { useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import "./index.css"
import { products } from "./db/data"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  const handleInputChange = e => setQuery(e.target.value)
  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  // Radio Filters
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  }

  return (
    <>
      <Sidebar/>
      <Navigation />
      <Recommended />
      <Products />
    </>
  )

}

export default App