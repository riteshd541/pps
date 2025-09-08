"use client";

import Image from "next/image";
import Header from "../components/Header";
import styles from "./Portfolio.module.css";
import Footer from "../components/Footer";

const images = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.jpg",
  "/portfolio/9.jpg",
  "/portfolio/10.jpg",
  "/portfolio/11.jpg",
  "/portfolio/12.jpg",
  "/portfolio/13.jpg",
  "/portfolio/14.jpg",
  "/portfolio/15.jpg",
  "/portfolio/16.jpg",
  "/portfolio/17.jpg",
  "/portfolio/18.jpg",
  "/portfolio/19.jpg",
  "/portfolio/20.jpg",
  "/portfolio/21.jpg",
  "/portfolio/22.jpg",
  "/portfolio/23.jpg",
  "/portfolio/24.jpg",
  "/portfolio/25.jpg",
  "/portfolio/26.jpg",
  "/portfolio/27.jpg",
  "/portfolio/28.jpg",
  "/portfolio/29.jpg",
  "/portfolio/30.jpg",
  "/portfolio/31.jpg",
  "/portfolio/32.jpg",
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
