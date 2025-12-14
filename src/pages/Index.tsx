import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TimelineJourney from "@/components/TimelineJourney";
import ActivityCards from "@/components/ActivityCards";
import GlobeVisualization from "@/components/GlobeVisualization";
import DocumentVault from "@/components/DocumentVault";
import TravelAgent from "@/components/TravelAgent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="timeline">
        <TimelineJourney />
      </section>
      
      <section id="activities">
        <ActivityCards />
      </section>
      
      <section id="route">
        <GlobeVisualization />
      </section>
      
      <section id="documents">
        <DocumentVault />
      </section>
      
      <section id="agent">
        <TravelAgent />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
