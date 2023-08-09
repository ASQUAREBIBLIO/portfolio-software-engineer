import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Lines from "@/components/Lines";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Lines />
      <Hero />
      <Resume />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
