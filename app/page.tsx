import AboutSection from "@/components/About";
import Footer from "@/components/Footer";
import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import MiniFunFacts from "@/components/MiniFunFacts";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <main className="flex bg-white dark:bg-gray-900 min-h-screen flex-col items-center justify-between transition-colors duration-300">
      <Hero />
      <AboutSection />
      <MiniFunFacts />
      <PhotoGallery />
      <Goals />
      <Footer />
    </main>
  );
}
