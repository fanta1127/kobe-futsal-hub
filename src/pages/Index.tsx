import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Matches } from "@/components/Matches";
import { Schedule } from "@/components/Schedule";
import { Recruit } from "@/components/Recruit";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Matches />
      <Schedule />
      <Recruit />
      <Footer />
    </div>
  );
};

export default Index;
