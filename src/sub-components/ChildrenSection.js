
import followup from '../images/children-followup.png'
import setup from '../images/children-setup.png'

function ChildrenSection() {
    return ( 
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
     );
}

export default ChildrenSection;