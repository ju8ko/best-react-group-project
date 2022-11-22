import routesRoute from '../../images/routesRoute.png'

function LinkSection() {
    return ( 
        <section className="link-setup">
            <h3>Use <code>Link</code> to navigate </h3>
            <p>The <code>Link</code> component is exactly like an an anchor tag <code>{"<a>"}</code> in HTML, but in React we use it ONLY to go to an outside link (maybe Google or to connect to another website) we do not use it to navigate through our application. We infact use <code>Link</code> . We can then go navigate (unless styled the Link will look exactly like an anchor tag when rendered)</p>
            <div>
                <img src={routesRoute} alt="" />
            </div>
        </section>
     );
}

export default LinkSection;