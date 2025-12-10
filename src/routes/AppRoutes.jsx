import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductsList from "../pages/Products/ProductsList";
import ProductDetails from "../pages/Products/ProductDetails";
import Ingredients from "../pages/Products/Ingredients";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
import BookConsultation from "../pages/Consultations/BookConsultation";
import ConsultationsHistory from "../pages/Consultations/ConsultationsHistory";
import Profile from "../pages/Profile/Profile";
import Forum from "../pages/Forum/Forum";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/consultations/book" element={<BookConsultation />} />
        <Route path="/consultations/history" element={<ConsultationsHistory />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
