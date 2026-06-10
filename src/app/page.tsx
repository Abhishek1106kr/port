import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Angel from "@/components/Angel";

export default function Home() {
  return (
    <>
      {/* Angel floats above everything as a fixed overlay */}
      <Angel />

      <main>
        <Navbar />
        <Hero />
        <Ticker />
        <WorkGrid />
        <About />
        <Services />
        <Footer />
      </main>
    </>
  );
}
