"use client";

import Image from "next/image";
import Header from "../components/Header";
import styles from "./Portfolio.module.css";
import Footer from "../components/Footer";

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

export default function Portfolio() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <section className={styles.portfolio}>
        <div className={styles.grid}>
          {images.map((src, index) => (
            <div key={index} className={styles.item}>
              <Image
                src={src}
                alt={`Portfolio Image ${index + 1}`}
                width={600}
                height={800}
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
