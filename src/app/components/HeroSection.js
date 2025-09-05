import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <img
        src="/main-photo.jpg"
        alt="Hero Background"
        className={styles.backgroundImage}
      />
      <div className={styles.overlayText}>
        <h1>PICTURE PERFECT STUDIO</h1>
      </div>
    </div>
  );
}
