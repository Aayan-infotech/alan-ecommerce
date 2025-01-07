import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PageNotFound } from "./components/pagenotfound/PageNotFound";
import Navbar from "./components/navbar/Navbar.jsx";
import { Doors } from "./components/doors/Doors.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { MeasuredDoors } from "./components/doors/MeasuredDoors.jsx";
import { MeasuredWindows } from "./components/windows/MeasuredWindows.jsx";
import Window from "./components/windows/Window.jsx";
import { HardwareProducts } from "./components/hardware/HardwareProducts.jsx";
import { NewCollection } from "./components/collection/NewCollection.jsx";
import Cart from "./components/cart/Cart.jsx";
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
import RightForMe from "./components/content/RightForMe.jsx";
import AccurateMeasurements from "./components/content/AccurateMeasurements.jsx";
import ApprovedInstaller from "./components/content/ApprovedInstaller.jsx";
import { Faq } from "./components/faq/Faq.jsx";
import { RequestEstimation } from "./components/bookAppointment/RequestEstimation.jsx";
import { Login } from "./components/login/Login.jsx";
import AccurateWindowMeasurements from "./components/content/AccurateWindowMeasurements.jsx";
import AccurateDoorMeasurements from "./components/content/AccurateDoorMeasurements.jsx";
import Caulk from './components/content/Caulk.jsx';
import ApprovedInstallerDoorWindow from './components/content/ApprovedInstallerDoorWindow.jsx';
import VinylWindow from './components/content/VinylWindow.jsx';
import LabourEstimate from './components/content/LabourEstimate.jsx';
import TemperedSafetyGlass from './components/content/TemperedSafetyGlass.jsx';
import EnergyEfficiency from './components/content/EnergyEfficiency.jsx';
import QuestionInstaller from './components/content/QuestionInstaller.jsx';
import ApplyInstaller from './components/content/ApplyInstaller.jsx';
import JambsExplained from './components/content/JambsExplained.jsx';
import GreenHouse from './components/content/GreenHouse.jsx';
import ReplacementWindows from './components/content/ReplacementWindows.jsx';
import OurVinylProducts from './components/content/OurVinylProducts.jsx';
import FiberglassDoor from './components/content/FiberglassDoor.jsx';
import SlabHungDoor from './components/content/SlabHungDoor.jsx';
import DiscountDoorWindow from './components/content/DiscountDoorWindow.jsx';
import ReplaceDoorWindows from './components/content/ReplaceDoorWindows.jsx';
import PaintFiberglassDoor from './components/content/PaintFiberglassDoor.jsx';
import DentilShelf from './components/content/DentilShelf.jsx';
import SkinDoor from './components/content/SkinDoor.jsx';
import ApplyCaulkWindow from './components/content/ApplyCaulkWindow.jsx';
import WindwoflushWithWall from './components/content/WindwoflushWithWall.jsx';
import ExteriorDoor from './components/content/ExteriorDoor.jsx';
import PaintDoorJambs from './components/content/PaintDoorJambs.jsx';
import InstallInswingEntryDoor from './components/content/InstallInswingEntryDoor.jsx';
import { SubProducts } from './components/Home/SubProducts.jsx';
import Categories from './components/Home/Categories.jsx';
import DoorsCategoryTypes from './components/doors/DoorsCategoryTypes.jsx';
import SubDoorsCategory from './components/doors/SubDoorsCategory.jsx';
import SubSubCategories from './components/Home/SubSubCategories.jsx';
import AllSubProducts from './components/Home/AllSubProducts.jsx';
// import Loader from './Loader.jsx';


export const AppRoutes = () => {
  
  // const [loading, setLoading] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);
  //   handleStart();
  //   setTimeout(handleComplete, 10000);
  //   return () => handleComplete();
  // }, [location]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="subDoorsCategory" element={<SubDoorsCategory/>} />
        <Route path="doorscategorytypes" element={<DoorsCategoryTypes />} />
        <Route path="doors" element={<Doors />} />
        <Route path="measured-doors" element={<MeasuredDoors />} />
        {/* <Route path="windows" element={<Window />} /> */}
        <Route path="dimensions/:product_id" element={<Window />} />
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
        <Route path="customer-details" element={<Profile />} />
        <Route path="tax-rebate" element={<TaxRebate />} />
        <Route path="diyinstall-guides" element={<DiyInstallGuides />} />
        <Route path="rightfor-me" element={<RightForMe />} />
        <Route path="accurate-measurements" element={<AccurateMeasurements />} />
        <Route path="/guide/accurate-window-measurements" element={<AccurateWindowMeasurements />} />
        <Route path="/guide/accurate-door-measurements" element={<AccurateDoorMeasurements />} />
        <Route path="pre-approved-installer" element={<ApprovedInstaller />} />
        <Route path="faq" element={<Faq />} />
        <Route path="get-estimation" element={<RequestEstimation />} />
        <Route path="/guide/caulk" element={<Caulk />} />
        <Route path="/guide/approvedInstallerDoorWindow" element={<ApprovedInstallerDoorWindow />} />
        {/* <Route path="/guide/vinylwindow" element={<VinylWindow />} /> */}
        <Route path="/guide/labour-estimate" element={<LabourEstimate />} />
        <Route path="/guide/tempered-glass" element={<TemperedSafetyGlass />} />
        <Route path="/guide/energy-efficiency" element={<EnergyEfficiency />} />
        <Route path="/guide/question-installer" element={<QuestionInstaller />} />
        <Route path="/guide/apply-installer" element={<ApplyInstaller />} />
        <Route path="/guide/door-jambs" element={<JambsExplained />} />
        <Route path="/diy/green-house-window" element={<GreenHouse />} />
        <Route path="/guide/replacement-windows" element={<ReplacementWindows />} />
        {/* <Route path="/guide/skin-door" element={<SkinDoor />} /> */}
        <Route path="/diy/skin-door" element={<SkinDoor />} />
        <Route path="/diy/replace-inset-window" element={<WindwoflushWithWall />} />
        <Route path="/diy/vinylwindow" element={<VinylWindow />} />
        <Route path="/diy/apply-caulk-window" element={<ApplyCaulkWindow />} />
        <Route path="/guide/vinyl-products" element={<OurVinylProducts />} />
        <Route path="/guide/fiberglass-vs-wood" element={<FiberglassDoor />} />
        <Route path="guide/slab-vs-pre-hung" element={<SlabHungDoor />} />
        <Route path="/guide/fiberglass-info" element={<DiscountDoorWindow />} />
        <Route path="/guide/replace-door-windows" element={<ReplaceDoorWindows />} />
        <Route path="/diy/paint-fiberglass-door" element={<PaintFiberglassDoor />} />
        <Route path="/diy/remove-exterior-door" element={<ExteriorDoor />} />
        <Route path="diy/paint-door-jambs" element={<PaintDoorJambs />} />/
        <Route path="/diy/install-dentil-shelf" element={<DentilShelf />} />
        <Route path="/diy/install-inswing-entry-door" element={<InstallInswingEntryDoor />} />
        <Route path="/products" element={<SubProducts />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
        <Route path="/sub-sub-categoryies/:subCategory_id" element={<SubSubCategories />} />
        <Route path="/allsubproducts/:products_id" element={<AllSubProducts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
