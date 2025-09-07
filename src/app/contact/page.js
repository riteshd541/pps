"use client";

import styles from "./Contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subtext}>
            Have a project in mind or just want to say hello? Fill out the form
            below and I’ll get back to you soon.
          </p>

          <form className={styles.form}>
            <div className={styles.field}>
              <input type="text" id="name" required />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className={styles.field}>
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className={styles.field}>
              <textarea id="message" rows="5" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
