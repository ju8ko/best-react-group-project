import CreateReactComponent from '../sub-components/components-sub-components/CreateReactComponent';
import ReUsableUi from '../sub-components/components-sub-components/ReUsableUI';
import Props from '../sub-components/components-sub-components/Props';
import ChildrenSection from '../sub-components/components-sub-components/ChildrenSection'
import ComponentsSection from '../sub-components/components-sub-components/ComponentsSection';



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