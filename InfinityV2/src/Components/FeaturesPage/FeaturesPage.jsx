import Footer from "../Defaults/Footer/Footer";
import Navigation from "../Defaults/Navigation/Navigation";
import CallToAction from "../Home/CallToAction/CallToAction";
import FeaturePageSection from "./Features/FeaturePageSection";
import Header from "./Header/Header";

// import style from './FeaturesPage.module.css';
function FeaturesPage() {
    return(
        <div>
            <Navigation/>
            <Header/>
            <FeaturePageSection/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}
export default FeaturesPage;