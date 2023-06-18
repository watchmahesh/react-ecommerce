import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from 'react';
import { isLoggedIn } from './services/auth.service';
import Logout from "./pages/Logout";
import ProductByCategory from "./pages/ProductByCategory";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import { ProceedCart } from "./pages/ProceedCart";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(isLoggedIn());
  return (

    <div>
      <Routes>
        <Route path="/login"
          element={<Login onLogin={() => setIsSignedIn(true)} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product-category/:category" element={<ProductByCategory />} />
        {/* <Route exact path="/product-category" element={<ProductByCategory />} /> */}
        <Route exact path="/product-detail/:id" element={<ProductDetail />} />
        <Route exact path="/wishlist" element={<WishList />} />
        <Route exact path="/cart" element={<Cart />} />


        {/* Protect all other routes */}
        {isSignedIn ? (
          <>
            <Route
              path='/logout'
              element={<Logout onLogout={() => setIsSignedIn(false)} />}
            />
            <Route
              path='/proceed-checkout'
              element={<ProceedCart onLogout={() => setIsSignedIn(false)} />}
            />

          </>
        ) : (
          // If the user is not Signed in, redirect to the login page
          <Route path='/*' element={<Navigate to='/login' />} />
        )}
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;