import { Link } from "react-router-dom"

const ProductItem = (props) => {
  const { product } = props
  console.log(product)
  return (
    <Link to={"/products/" + product.id}>
      <ul className="ProductItem">
        <li>타이틀: {product.title}</li>
        <img src={product.thumbnailUrl} />
      </ul>
    </Link>
  )
}

export default ProductItem
