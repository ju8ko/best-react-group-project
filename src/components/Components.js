import CreateReactComponent from '../sub-components/CreateReactComponent';
import firstImg from '../images/props-1.png'
import secondImg from '../images/props-2.png'
import thirdImg from '../images/props-3.png'
import followup from '../images/children-followup.png'
import setup from '../images/children-setup.png'
import create1 from '../images/createComponent-1.png'
import create2 from '../images/createComponent-2.png'
import create3 from '../images/createComponent-3.png'



function Components() {
    return ( 
        <div className="components">
            <h1>Components</h1>
            <section className="components__create">
                <h3>Building a component</h3>
                <p>Building a components is what React is based on. Without them we cannot use the word React in the same sentence. It is the building block, the brick, the foundation that allows us to create our app</p>
            </section>
            <section>
                <CreateReactComponent/>
            </section>
            <section className="components__props">
                <h3>Props</h3>
                <p>Props (properties) are a way to share data through parent/child components. You could pass a single value, but you can also pass objects, functions or arrays.</p>
                <p>They are so called snapshots: an "image" that doesn't change, unless triggered to (a change in State or a re-rendering, we will discuss this later on)</p>
                <p>The values are in the parent</p>
                <div className='components__props-image'>
                    <img src={firstImg} alt="" />
                </div>
                <p>Value are passed as props in the child</p>
                <div className='components__props-image'>
                    <img src={secondImg} alt="" />
                </div>
                <p>You could also destructure the props (JavaScript object destructuring) to make it more readable</p>
                <div className='components__props-image'>
                    <img src={thirdImg} alt="" />
                </div>
            </section>
            <section className="components__children">
                <h3>Children</h3>
                <p>Every component in React can have a child, children or no children. By default every component has <code>props.children</code> passed to it and it renders the content between opening and closing tags of the component</p>
                <div className='components__children-image'>
                    <img src={setup} alt="" />
                </div>
                <p>We nest our content inside a component and the outcome will not change and it will still be rendered. 
                We could wrap a components with layouts if wanted, so to be able to customise it without inheriting from a parent  </p>
                <div className='components__children-image'>
                    <img src={followup} alt="" />
                </div>
            </section>
            <section className="reusable-ui">
                <h3>Reusable UI</h3>
                <p>This is where React allows you to use it's full potential. You may have noticed that the 'Create a Component' section looks very similar to the part in the 'Basics' section. It is the same! One of React's strengths is exactly in this example. It can be replicated anywhere: button, forms, etc</p>
                <div className='reusable-ui__image'>
                    <img src={create1} alt="" />
                </div>
                <div className='reusable-ui__image'>
                    <img src={create2} alt="" />
                </div>
                <div className='reusable-ui__image'>
                    <img src={create3} alt="" />
                </div>
            </section>
        </div>
     );
}

export default Components;