import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PageNotFound } from "./components/pagenotfound/PageNotFound";
import Navbar from "./components/navbar/Navbar.jsx";
import { Doors } from "./components/doors/Doors.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { MeasuredDoors } from "./components/doors/MeasuredDoors.jsx";
import { MeasuredWindows } from "./components/windows/MeasuredWindows.jsx";
import { Window } from "./components/windows/Window.jsx";
import { HardwareProducts } from "./components/hardware/HardwareProducts.jsx";
import { NewCollection } from "./components/collection/NewCollection.jsx";
import Cart  from "./components/cart/Cart.jsx";
import { CheckoutPayment } from "./components/checkout/CheckoutPayment.jsx";
import { Successfully } from "./components/checkout/Successfully.jsx";
import Orders from "./components/Order/Orders.jsx";
import { OrderTrack } from "./components/Order/OrderTrack.jsx";
import { TrakingOrder } from "./components/Order/TrakingOrder.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import { BookAppointment } from "./components/bookAppointment/BookAppointment.jsx";
import { About } from "./components/About.jsx";
import Gallery from "./components/galley/Gallery.jsx";
import Profile from "./components/Profile.jsx";
import TaxRebate from "./components/content/TaxRebate.jsx";
import DiyInstallGuides from "./components/content/DiyInstallGuides.jsx";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doors" element={<Doors />} />
        <Route path="measured-doors" element={<MeasuredDoors />} />
        <Route path="windows" element={<Window />} />
        <Route path="measured-windows" element={<MeasuredWindows />} />
        <Route path="hardware-products" element={<HardwareProducts />} />
        <Route path="new-collection" element={<NewCollection />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutPayment />} />
        <Route path="successfull" element={<Successfully />} />
        <Route path="orders" element={<Orders />} />
        <Route path="order-track" element={<OrderTrack />} />
        <Route path="traking-order" element={<TrakingOrder />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<BookAppointment />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="profile" element={<Profile />} />
        <Route path="tax-rebate" element={<TaxRebate />} />
        <Route path="diyinstall-guides" element={<DiyInstallGuides />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
