import Mockman from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllGames from "./pages/AllGames";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import WishList from "./pages/WishList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/games/all" element={<AllGames />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        }
      />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
}

export default App;
