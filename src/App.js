import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllGames from "./pages/AllGames";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import WishList from "./pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/games/all" element={<AllGames />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
