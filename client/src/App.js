import './App.css';
import Navbar from "./Components/Navbar"
import { Routes, Route, } from "react-router-dom";
import LandingPage from "./Pages/LandingPage"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import CartPage from "./Pages/CartPage"
import CheckoutPage from "./Pages/CheckoutPage"
import PaymentPage from "./Pages/PaymentPage"
import LandingPaage from "./Pages/LandingPaage"
import Orders from "./Pages/Orders"
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/" element=
        {
        <PrivateRoute>
          <LandingPage/>
          </PrivateRoute>
        }/>
        
        <Route path="/a" element=
        {
        <PrivateRoute>
          <LandingPaage/>
          </PrivateRoute>
        }/>
        
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cartpage" element={<CartPage/>}/>
        <Route path="/checkoutpage" element={<CheckoutPage/>}/>
        <Route path="/paymentpage" element={<PaymentPage/>}/>
        
        <Route path="/orders" element=
        {
        <PrivateRoute>
          <Orders/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
