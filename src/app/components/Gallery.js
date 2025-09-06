"use client";

import styles from "./Gallery.module.css";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/c.jpg",
  "/gallery/13.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/14.jpg",
];
export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageWrapper}>
          <img src={src} alt={`gallery ${i}`} />
        </div>
      ))}
    </div>
  );
}
