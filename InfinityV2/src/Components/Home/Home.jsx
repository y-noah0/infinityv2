import Footer from "../Defaults/Footer/Footer";
import Navigation from "../Defaults/Navigation/Navigation";
import CallToAction from "./CallToAction/CallToAction";
import Faq from "./Faqs/Faq";
import Features from "./Features/Features";
import HeroSection from "./HeroSection/HeroSection";
import PricingSection from "./PricingSection/PricingSection";
import Stats from "./Stats/Stats";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
    return(
        <>
        <Navigation/>
        <HeroSection/>
        <Stats/>
        <Features/>
        <PricingSection/>
        <CallToAction/>
        <Testimonials/>
        <Faq/>
        <Footer/>
        </>
    )
}
export default Home