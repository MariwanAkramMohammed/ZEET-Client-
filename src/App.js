import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./Components/Navbar";
import SucceedPage from "./Components/Suceed";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/products/:cat" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/succeed" element={<SucceedPage />} />
      </Routes>
    </div>
  );
}

export default App;
