"use client";

import styles from "./Gallery.module.css";

const images = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery4.jpg",
  "/assets/gallery5.jpg",
  "/assets/gallery6.jpg",
  "/assets/gallery7.jpg",
  "/assets/gallery8.jpg",
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
