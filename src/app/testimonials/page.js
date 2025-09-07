"use client";

import styles from "./Testimonials.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Fashion Designer",
    review:
      "The portfolio shoot was beyond my expectations. Every detail was captured so beautifully. Truly world-class work!",
    image: "/Pic.png",
  },
  {
    name: "Arjun Mehta",
    role: "Creative Director",
    review:
      "Professional, artistic, and modern. The final outcome felt like something straight out of an international magazine.",
    image: "/Pic.png",
  },
  {
    name: "Emily Carter",
    role: "Model",
    review:
      "I felt so comfortable during the shoot. The photos turned out natural, elegant, and absolutely stunning.",
    image: "/Pic.png",
  },
];

export default function Testimonials() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <section className={styles.testimonials}>
        <h2 className={styles.heading}>What People Say</h2>
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.top}>
                <img src={t.image} alt={t.name} className={styles.avatar} />
                <div>
                  <h3 className={styles.name}>{t.name}</h3>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
              <p className={styles.review}>"{t.review}"</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
