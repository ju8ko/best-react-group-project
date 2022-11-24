import setUseParams from '../../images/setUseParams.png'
import setUseParams2 from '../../images/setUseParams2.png'
import setUseParams3 from '../../images/setUseParams3.png'



function ParamsSection() {
    return ( 
        <section className="params-section">
            <h3><code>useParams</code> to create dynamic routes</h3>
            <p>Extremely useful when we have to display the appropriate data, for example, from a list of products we are selling or displaying in our app. We must prefix a <code>:</code> and then identify a name or a detail that we can use to identify the data from the item/product and it's data we want to render. Let's say in this example in this blog. </p>
            <div>
                <img src={setUseParams} alt="set up" />
            </div>
            <p>We are now following <code>id</code> and we can do so by using the <code>useParams</code> hook. Do not forget to <code>import</code> it at the top of your component.</p>
            <div>
                <img src={setUseParams2} alt="" />
            </div>
            <p>In our <code>Blog</code> component we can then return the object. If there is multiple properties, a <code>map()</code> or <code>filter()</code> high order function would be needed to display every single one of them in our component</p>
            <div>
                <img src={setUseParams3} alt="" />
            </div>
        </section>
     );
}

export default ParamsSection;