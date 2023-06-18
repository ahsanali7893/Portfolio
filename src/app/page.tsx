import About from "@/components/About/page";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Skill from "@/components/Skill/page";
import "style/scroll.css";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      
    </>
  );
}
