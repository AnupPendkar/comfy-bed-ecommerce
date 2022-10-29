import './App.css';
import HomePage from './pages/home page/HomePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AboutPage from './pages/about page/AboutPage';
import ProductPage from './pages/products page/ProductPage';
import CartPage from './pages/cart page/CartPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from './pages/single product/SingleProduct';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="about" element={<AboutPage/>}/>
              <Route path="products" element={<ProductPage/>}/>
              <Route path="/products/:id" element={<SingleProduct/>}/>
              <Route path="cart" element={<CartPage/>}/>
            </Routes>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
