import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import SocialBar from "./SocialBar/SocialBar";

export default function MainLayout() {
  return (
    <div>
      <SocialBar />
      <Navbar />
      <Outlet />
    </div>
  );
}
