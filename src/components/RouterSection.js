import LinkSection from "../sub-components/router-sub-components/LinkSetup";
import ParamsSection from "../sub-components/router-sub-components/ParamsSection";
import SetUp from "../sub-components/router-sub-components/SetUp";
import UseNavigateSection from "../sub-components/router-sub-components/UseNavigateSection";

function RouterSection() {
    return ( 
        <div className="router-section">
            <SetUp/>
            <LinkSection/>
            <UseNavigateSection/>
            <ParamsSection/>
        </div>
     );
}

export default RouterSection;