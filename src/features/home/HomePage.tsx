import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import About from "../about/About";
import Contact from "../contact/Contact";
import Properties from "../properties/Properties";
import ImageCarousel from "./ImageCarousel";
import styles from "./HomePage.module.css";
import Divider from "../../components/divider/Divider";
import Services from "../services/Services";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className={styles.homePage}>
      <ImageCarousel />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Properties />
      <Divider />
      <Contact />
    </main>
  );
}
