import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Nav from "./components/Navbar/Nav"
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import CheckoutPage from './components/checkout/CheckOut'
import { CartProvider } from './CartContext'
import './App.css'

function App() {
  
  return (
    <>
      <div>
       
          <CartProvider>
            <Router>
              <Nav/>
                <Routes>
                  <Route exact path='/' Component={Shop}></Route>
                  <Route path='/cart' Component={Cart}></Route>
                  <Route path='/checkoutpage' Component={CheckoutPage}></Route>
                </Routes>
            </Router>
          </CartProvider>
      </div>
    </>
  )
}

export default App
