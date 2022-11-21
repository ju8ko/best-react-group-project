import CreateReactComponent from '../sub-components/CreateReactComponent';

import ReUsableUi from '../sub-components/ReUsableUI';
import Props from '../sub-components/Props';
import ChildrenSection from '../sub-components/ChildrenSection'
import ComponentsSection from '../sub-components/ComponentsSection';



function Components() {
    return ( 
        <div className="components">
            <h1>Components</h1>
            <ComponentsSection/>
            <CreateReactComponent/>
            <Props/>
            <ChildrenSection/>
            <ReUsableUi/>
        </div>
     );
}

export default Components;