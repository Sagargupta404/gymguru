import BMI from "@/components/home/BMI";
import Hero from "@/components/home/Hero";
import ProgramsSlider from "@/components/home/Program";

import WhyChooseUs from "@/components/home/WhyChooseUs";
import Navbar from "@/components/layout/Navbar";
import Stats from "@/components/layout/Stats";


export default function Home() {
  return (
    <>
      <Navbar/>
        <Hero/>
        <Stats/>
        <ProgramsSlider/>
        <WhyChooseUs/>
        <BMI/>
       

    </>
  );
}
