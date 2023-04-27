import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './pages/NotFound';
import './style/Common.scss';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const getProducts = async ()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
      setProducts(res.data.slice(0,10))
    }
    getProducts();
  },[])

  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage products={products}/>} />
          <Route path="/prodcuts/:productId" element={<ProductDetailPage products={products}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;