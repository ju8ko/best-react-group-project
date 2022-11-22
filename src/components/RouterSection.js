import LinkSection from "../sub-components/router-sub-components/LinkSetup";
import SetUp from "../sub-components/router-sub-components/SetUp";
import UseNavigateSection from "../sub-components/router-sub-components/UseNavigateSection";

function RouterSection() {
    return ( 
        <div className="router-section">
            <SetUp/>
            <LinkSection/>
            <UseNavigateSection/>
        </div>
     );
}

export default RouterSection;