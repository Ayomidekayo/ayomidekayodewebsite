import About from "@/components/About";
import CorePillars from "@/components/CorePillars";
import Hero from "@/components/Hero";
import Service from "@/components/Service";


export default function Home() {
  return (
<div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
    <CorePillars/>
       <Service />

 
    </div>
  );
}
