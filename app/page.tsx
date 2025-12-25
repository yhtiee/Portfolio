import About from "@/components/landing page/About";
import Companies from "@/components/landing page/Companies";
import Discover from "@/components/landing page/Discover";
import Hero from "@/components/landing page/Hero";
import Technologies from "@/components/landing page/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white font-sans dark:bg-black">
      <Hero/>
      <About/>
      <Technologies/>
      <Companies/>
      <Discover/>
    </div>
  );
}
