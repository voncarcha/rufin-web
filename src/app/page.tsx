import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CuratedSelections from "@/components/CuratedSelections";
import VoyageStandard from "@/components/VoyageStandard";
import HotelOfMonth from "@/components/HotelOfMonth";
import SeasonalMoodboards from "@/components/SeasonalMoodboards";
import Journal from "@/components/Journal";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CuratedSelections />
      <VoyageStandard />
      <HotelOfMonth />
      <SeasonalMoodboards />
      <Journal />
      <Newsletter />
      <Footer />
    </main>
  );
}
