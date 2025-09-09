import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <picture>
        {/* For screen width below 1000px */}
        <source srcSet="/main-min.jpeg" media="(max-width: 900px)" />
        {/* Default / larger screens */}
        <img
          src="/main-photo.jpg"
          alt="Hero Background"
          className={styles.backgroundImage}
        />
      </picture>
      <div className={styles.overlayText}>
        {/* <h1>PICTURE PERFECT STUDIO</h1> */}
      </div>
    </div>
  );
}
