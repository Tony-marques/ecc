import { useEffect, useRef, useState } from "react";
import styles from "./ImageCarousel.module.css";

import maison1 from "../../assets/images/maison1.jfif";
import maison2 from "../../assets/images/maison2.jfif";
import maison3 from "../../assets/images/maison3.jfif";
import maison4 from "../../assets/images/maison4.jfif";

const images = [maison1, maison2, maison3, maison4];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const restartTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <button
          className={styles.prevButton}
          onClick={goToPrevious}
          aria-label="Image précédente"
        >
          ❮
        </button>

        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Logement en location courte durée à Tours ${currentIndex + 1}`}
          className={`${styles.image} ${styles.fadeIn}`}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={currentIndex === 0 ? "high" : "auto"}
          width={1100}
          height={619}
          sizes="(max-width: 768px) 100vw, 1100px"
        />

        <button
          className={styles.nextButton}
          onClick={goToNext}
          aria-label="Image suivante"
        >
          ❯
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Allez à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
