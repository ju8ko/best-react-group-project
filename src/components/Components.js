import CreateReactComponent from '../sub-components/CreateReactComponent';


function Components() {
    return ( 
        <div className="components">
            <h1>Components</h1>
            <section className="components__">
                <h3>Building a component</h3>
                <p>Building a components is what React is based on. Without them we cannot use the word React in the same sentence. It is the building block, the brick, the foundation that allows us to create our app</p>
                <CreateReactComponent/>
            </section>
        </div>
     );
}

export default Components;