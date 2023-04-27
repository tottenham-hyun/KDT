import { useNavigate, useParams } from "react-router-dom"

const ProductDetailPage = (props) => {
  const navigate = useNavigate()
  const { products } = props
  // console.log("products: ") // 정수형

  const productId = useParams()
  // console.log(typeof productId.productId) // 문자형

  // 퀴즈
  // targetProduct 변수에 productId에 해당하는 상품 객체를 저장
  const targetProduct = products.filter((a, i) => {
    return products[i].id === parseInt(productId.productId, 10)
  })

  return (
    <main className="ProductDetailPage">
      <h1>여기는 상품 디테일 페이지!</h1>
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        목록보기
      </button>
      <button
        onClick={() => {
          navigate("/")
        }}
      >
        홈으로 이동하기
      </button>
      <ul className="ProductItem">
        {targetProduct.length > 0 ? (
          targetProduct.map((a, i) => {
            return (
              <>
                <li>{targetProduct[i].name}</li>
                <li>{targetProduct[i].email}</li>
              </>
            )
          })
        ) : (
          <h1>존재하지 않은 상품입니다</h1>
        )}
      </ul>
    </main>
  )
}

export default ProductDetailPage
