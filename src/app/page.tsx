import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Portfolio from "@/components/Portfolio/page";
import Skill from "@/components/Skill/page";



export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer />
      
    </>
  );
}
