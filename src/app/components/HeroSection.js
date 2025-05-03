import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
        <source src="/assets/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlayText}>
        <h1>PICTURE PERFECT STUDIO</h1>
      </div>
    </div>
  );
}
