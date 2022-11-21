import firstImg from '../images/props-1.png'
import secondImg from '../images/props-2.png'
import thirdImg from '../images/props-3.png'

function Props() {
    return ( 
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
     );
}

export default Props;