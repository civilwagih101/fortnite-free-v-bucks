import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Trust />
      <FAQ />
    </div>
  );
};

export default Index;