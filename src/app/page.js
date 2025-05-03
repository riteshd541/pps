import HeroSection from "./components/HeroSection";
import "./globals.css";
import Gallery from "./components/Gallery";
import ModernApproachHero from "./components/ModernApproachHero";
import SoulCinemaSection from "./components/SoulCinemaSection";
import FineArtHero from "./components/FineArtHero";
import VideoGrid from "./components/VideoGrid";
import AwardWinningFilms from "./components/AwardWinningFilms";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Gallery />
      <AwardWinningFilms />
      <ModernApproachHero />
      <SoulCinemaSection />
      <FineArtHero />
      <VideoGrid />
      <Footer />
    </div>
  );
}
