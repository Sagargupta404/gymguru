
import Hero from "@/components/home/Hero";


import WhyChooseUs from "@/components/home/WhyChooseUs";
import Navbar from "@/components/layout/Navbar";
import Stats from "@/components/layout/Stats";
import Programs from "@/components/programs/Programs";


export default function Home() {
  return (
    <>
      <Navbar/>
        <Hero/>
        <Stats/>
      <Programs/>
        <WhyChooseUs/>
        
       

    </>
  );
}
