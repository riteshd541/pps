"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mpwjedyp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("✅ Thank you! Your message has been sent.");
      form.reset();
    } else {
      setStatus("❌ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header backgroundColor="bg-black" />

      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subtext}>
            Have an event in mind or just want to say hello? Fill out the form
            below and I’ll get back to you soon.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name */}
            <div className={styles.field}>
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Your Name</label>
            </div>

            {/* Phone Number */}
            <div className={styles.field}>
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="phone">Phone Number</label>
            </div>

            {/* Email */}
            <div className={styles.field}>
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email Address</label>
            </div>

            {/* Event Details */}
            <div className={styles.field}>
              <textarea
                id="eventDetails"
                name="eventDetails"
                rows="5"
                required
              ></textarea>
              <label htmlFor="eventDetails">
                Event Details (Event Name, Date, Venue)
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>

          {status && <p className={styles.status}>{status}</p>}
        </div>
      </section>

      <Footer />
    </>
  );
}
