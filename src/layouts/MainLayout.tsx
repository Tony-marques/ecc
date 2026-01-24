import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import SocialBar from "./SocialBar/SocialBar";
import Footer from "./Footer/Footer";
import { useStructuredData } from "../hooks/useStructuredData";

export default function MainLayout() {
  useStructuredData();

  return (
    <>
      <SocialBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
