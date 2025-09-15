"use client";

import { useState } from "react";
import styles from "./JoinTeam.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function JoinTeam() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Submitting...");
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xandzodk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("✅ Thank you! Your application has been submitted.");
      form.reset();
    } else {
      setStatus("❌ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header backgroundColor="bg-black" />

      <section className={styles.join}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Join Our Team</h2>
          <p className={styles.subtext}>
            We’re always looking for creative and passionate individuals to join
            our team. Fill out the form below and upload your photograph to
            apply.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Full Name</label>
            </div>

            <div className={styles.field}>
              <input type="number" id="number" name="number" required />
              <label htmlFor="number">Phone Number</label>
            </div>

            <div className={styles.field}>
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className={styles.field}>
              <input type="text" id="role" name="role" required />
              <label htmlFor="role">Position Interested In</label>
            </div>

            <div className={styles.field}>
              <input type="text" id="drive" name="drive" required />
              <label htmlFor="drive">Upload Drive Link</label>
            </div>

            <div className={styles.field}>
              <input type="text" id="insta" name="insta" required />
              <label htmlFor="insta">Upload Instagram Link</label>
            </div>

            <div className={styles.field}>
              <textarea id="message" name="message" rows="4"></textarea>
              <label htmlFor="message">Tell us about yourself</label>
            </div>

            <button type="submit" className={styles.button}>
              Submit Application
            </button>
          </form>

          {status && <p className={styles.status}>{status}</p>}
        </div>
      </section>

      <Footer />
    </>
  );
}
