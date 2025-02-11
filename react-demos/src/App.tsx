import { useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import "./index.css"
import { products } from "./db/data"
import Card from "./components/Card"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  const handleInputChange = e => setQuery(e.target.value)
  
  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  // Radio Filters
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  } 

  // Button Filters
  const handleClick = e => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products, selected, query){
    let filteredProducts = products

    // Filtering Input Items
    if(query){
      filteredProducts = filteredItems
    }

    // Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || 
      color === selected || 
      company === selected || 
      newPrice === selected || 
      title === selected)
    }

    return filteredData.map(({img, title, star, reviews, newPrice}) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        start={star}
        reviews={reviews}
        newPrice={newPrice}
      />
    ))

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