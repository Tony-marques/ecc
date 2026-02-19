import type { ReactNode } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import styles from "./ScrollAnimation.module.css";

interface ScrollAnimationProps {
  children: ReactNode;
  type?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  delay?: number;
  className?: string;
}

export function ScrollAnimation({
  children,
  type = "fadeInUp",
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${styles.animation} ${styles[type]} ${className}`}
      data-visible={isVisible}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
