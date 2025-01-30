
const ProductInfo = () => {
    const product = {
        name:"Laptop",
        price:1200,
        availability:"In stock"
    }
  return (
    <div>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.availability}</p>
    </div>
  )
}

export default ProductInfo