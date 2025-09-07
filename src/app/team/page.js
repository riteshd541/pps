"use client";

import styles from "./JoinTeam.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function JoinTeam() {
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

          <form className={styles.form}>
            <div className={styles.field}>
              <input type="text" id="name" required />
              <label htmlFor="name">Full Name</label>
            </div>

            <div className={styles.field}>
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className={styles.field}>
              <input type="text" id="role" required />
              <label htmlFor="role">Position Interested In</label>
            </div>

            <div className={styles.fieldFile}>
              <label htmlFor="photo" className={styles.fileLabel}>
                Upload Your Photograph
              </label>
              <input type="file" id="photo" accept="image/*" required />
            </div>

            <div className={styles.field}>
              <textarea id="message" rows="4"></textarea>
              <label htmlFor="message">Tell us about yourself</label>
            </div>

            <button type="submit" className={styles.button}>
              Submit Application
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
