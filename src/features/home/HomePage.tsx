import About from "../about/About";
import Contact from "../contact/Contact";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <About />
      <Contact />
    </main>
  );
}
