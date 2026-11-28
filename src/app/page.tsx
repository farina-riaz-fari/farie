import HeroSection from "@/components/home/HeroSection";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-soft-pink">
      <AnnouncementBar />
      <Navbar />
       <HeroSection />
    </div>
  );
}
