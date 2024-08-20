import FeaturePageFive from "./FeaturePageFive/FeaturePageFive";
import FeaturePageFour from "./FeaturePageFour/FeaturePageFour";
import FeaturePageOne from "./FeaturePageOne/FeaturePageOne";
import FeaturePageThree from "./FeaturePageThree/FeaturePageThree";
import FeaturePageTwo from "./FeaturePageTwo/FeaturePageTwo";
import FeaturePageSix from "./FeaturePageSix/FeaturePageSix";

function FeaturePageSection() {
    return(
        <div>
            <FeaturePageOne/>
            <FeaturePageTwo/>
            <FeaturePageThree/>
            <FeaturePageFour/>
            <FeaturePageFive/>
            <FeaturePageSix/>
        </div>
    )
}
export default FeaturePageSection;