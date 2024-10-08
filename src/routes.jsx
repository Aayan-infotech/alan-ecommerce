import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PageNotFound } from "./components/pagenotfound/PageNotFound";
import { Navbar } from "./components/navbar/Navbar";
import { Doors } from "./components/doors/Doors";
import { Footer } from "./components/footer/Footer";
import { MeasuredDoors } from "./components/doors/MeasuredDoors";
import { MeasuredWindows } from "./components/windows/MeasuredWindows";
import { Window } from "./components/windows/Window";
import { HardwareProducts } from "./components/hardware/HardwareProducts";

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
