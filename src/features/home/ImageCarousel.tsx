import { useEffect, useRef, useState } from "react";
import styles from "./ImageCarousel.module.css";
import { client, urlFor } from "../../lib/sanity";

import maison1 from "../../assets/images/maison1.jfif";
import maison2 from "../../assets/images/maison2.jfif";
import maison3 from "../../assets/images/maison3.jfif";
import maison4 from "../../assets/images/maison4.jfif";
import maison5 from "../../assets/images/maison5.avif";

type CarouselImage = {
  src: string;
  alt: string;
};

const fallbackImages: CarouselImage[] = [
  {
    src: maison1,
    alt: "Location courte durée à Tours - Maison 1",
  },
  {
    src: maison2,
    alt: "Location courte durée à Tours - Maison 2",
  },
  {
    src: maison3,
    alt: "Location courte durée à Tours - Maison 3",
  },
  {
    src: maison4,
    alt: "Location courte durée à Tours - Maison 4",
  },
  {
    src: maison5,
    alt: "Location courte durée à Tours - Maison 5",
  },
];

export default function ImageCarousel() {
  const [images, setImages] = useState<CarouselImage[]>([]);
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
  }, [currentIndex, images.length]);

  useEffect(() => {
    let isMounted = true;

    const loadLatestProperties = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "property" && status == "published"]|order(coalesce(createdAt, _createdAt) desc)[0...5]{
            _id,
            title,
            city,
            image
          }`,
        );

        if (!isMounted) return;

        const sanityImages: CarouselImage[] = (data || [])
          .filter((item: { image?: unknown }) => Boolean(item?.image))
          .map((item: { title?: string; city?: string; image?: unknown }) => ({
            src: urlFor(item.image)
              .width(1100)
              .height(619)
              .fit("crop")
              .auto("format")
              .url(),
            alt: item?.title
              ? `${item.title}${item.city ? ` - ${item.city}` : ""}`
              : "Location courte durée à Tours",
          }));

        if (sanityImages.length > 0) {
          setImages(sanityImages);
          setCurrentIndex(0);
        } else {
          setImages(fallbackImages);
        }
      } catch {
        if (!isMounted) return;
        setImages(fallbackImages);
      }
    };

    loadLatestProperties();

    return () => {
      isMounted = false;
    };
  }, []);

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
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt}
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
