import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./user authentication/Login";
import Register from "./user authentication/Register";
import ForgotPassword from "./user authentication/ForgotPassword";
import Home from "./homepage/Home";
import LoggedIn from "./user authentication/LoggedIn";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductPage from "./products/ProductPage";
import ProductDetails from "./products/ProductDetails";
import AboutUsPage from "./aboutus/AboutUs";
import ContactUsForm from "./contactus/ContactUs";
import SignupForm from "./user authentication/SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/aboutus/AboutUs" element={<AboutUsPage />} />
          <Route path="/contactus/ContactUs" element={<ContactUsForm />} />
          <Route path="/SignUp" element={<SignupForm />} />

          <Route
            path="/loggedin"
            element={<ProtectedRoute element={<LoggedIn />} />}
          />
          <Route
            path="/reset-password"
            exact
            element={<ForgotPassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
