import './App.css';
import { Routes, Route } from "react-router-dom"
import Product from './Pages/Product';
import AllProduct from './components/AllProduct';
import Categories from './Pages/Categories';
import Error from './Pages/Error';
import Cart from './Pages/Cart';
import Navbar from './components/Navbar';
import Payment from './Pages/Payment';
import Thanks from './Pages/Thanks';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<AllProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<Error />} />
        <Route path={"/payment"} element={<Payment/>}/>
        <Route path={"/thanks"} element={<Thanks/>}/>
      </Routes>
    </div>
  );
}

export default App;
