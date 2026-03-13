import Navbar from "../../layout/Navbar";
import Hero from "../../components/landing/Hero";
import Trusted from "../../components/landing/Trusted"
import Features from "../../components/landing/Features"
import HowItWorks from "../../components/landing/HowItWorks"
import ProductPreview from "../../components/landing/ProductPreview"
import CTA from "../../components/landing/CTA"
import Benefits from "../../components/landing/Benefits"
import Footer from "../../layout/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <ProductPreview />
      <HowItWorks />
      <CTA />
      <Benefits />
      <Footer />
    </>
  );
}

export default LandingPage;
