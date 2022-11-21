import {FaReact } from 'react-icons/fa'

function Home() {
    return ( 
        <div className="home">
            <h1>Welcome to the React app, where to learn how to build a React app</h1>
            <h3>Addressed to people that do not enjoy React, but want to learn React</h3>
            <section>
                <p>First and foremost, this is a beginner friendly guide and does not want to substitute the official React <a href="https://beta.reactjs.org/"> documentation</a> . It is an extrapolation of it, build by three Junior Web Developers to try and master it themselves.</p>
                <p>We really hope it helps!</p>
            </section>
            <section>
                <h3>What is React?</h3>
                <p>React is a JavaScript Front End Library developed by Facebook (Instagram, Netflix, AirBnb and many others are build on it) to simplify a developer's life on building fast user interfaces for websites and applications using a declarative method. Work smarter, not harder!</p>
                <p>Main concept is the virtual DOM: a tree of small pieces based on JavaScript that mimics a DOM tree with the minimum amount of manipulation of it to keep all the components up to date.</p>
                <p>Extremely light and fast performing with components and concepts "simple" to figure out (we'll do our best to simplify it even more!).</p>
                <p>With no need to ever refresh the page, React is component based, it allows everything to be reused in any part of the project multiple times, thus avoiding and totally skipping extra coding</p>
            </section>
            <h3>Why is it name React?</h3>
            <p>We assume it is based on the logo <FaReact/> : multiple small parts create a big reaction!</p>

        </div>
     );
}

export default Home;