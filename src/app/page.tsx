import Brand from "@/components/Brand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Technology from "@/components/Technology";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Vision />
      <Technology />
      <Brand />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
