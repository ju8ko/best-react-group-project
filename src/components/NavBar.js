import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";


function NavBar() {
    return ( 
        <Fragment>
            <div className="navBar">
                <Link to='/'>HOME</Link>
                <Link to='/info'>    INFO</Link>
                <Link to='/needToKnow'>    NEED TO KNOW</Link>
                <Link to='/basics'>     REACT BASICS</Link>
                <Link to='/components'>    COMPONENTS</Link>
                <Link to='/state'>    State</Link>
                <Link to='/conditionalRendering'>    CONDITIONAL RENDERING</Link>
                <Link to='/eventListeners'>    EVENT LISTENERS</Link>
                <Link to='/routerSection' >    ROUTER SECTION</Link>
                <Link to='/contextApi' >    CONTEXT API</Link>
                <Link to='/useReducer'>    USE REDUCER</Link>
            </div>
            <Outlet/>
        </Fragment>
     );
}

export default NavBar;