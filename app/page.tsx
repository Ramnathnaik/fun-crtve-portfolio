import AboutSection from "@/components/About";
import Footer from "@/components/Footer";
import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import MiniFunFacts from "@/components/MiniFunFacts";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutSection />
      <MiniFunFacts />
      <PhotoGallery />
      <Goals />
      <Footer />
    </main>
  );
}
