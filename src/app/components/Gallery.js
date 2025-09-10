"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
  "/gallery/img7.jpg",
  "/gallery/imgc.jpg",
  "/gallery/img13.jpg",
  "/gallery/img8.jpg",
  "/gallery/img9.jpg",
  "/gallery/img10.jpg",
  "/gallery/img11.jpg",
  "/gallery/img12.jpg",
  "/gallery/img14.jpg",
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageWrapper}>
          <Image
            src={src}
            alt={`gallery ${i + 1}`}
            width={450}
            height={450}
            sizes="(max-width: 768px) 250px, 450px"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
