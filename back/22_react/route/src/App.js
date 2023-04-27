import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import NotFound from "./pages/NotFound"
import "./style/Common.scss"
import { useState, useEffect } from "react"
import axios from "axios"
import Student from "./practice_pages/Student"
import Navbar from "./Navbar"
import Codingon from "./practice_pages/Codingon"
import Searchparams from "./practice_pages/Searchparams"

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
      setProducts(res.data.slice(0, 10))
    }
    getProducts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage products={products} />} />
          <Route path="/products/:productId" element={<ProductDetailPage products={products} />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/student/sean" element={<Student sean={"sean"}></Student>} />
          <Route path="/student/codingon" element={<Codingon codingon={"codingon"}></Codingon>} />
          <Route path="/student/:new" element={<Searchparams></Searchparams>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
