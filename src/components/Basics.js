import final from '../images/final.png'
import whatToDelete from '../images/whatToDelete.png'
import initial from '../images/initial.png'
import CreateReactComponent from '../sub-components/components-sub-components/CreateReactComponent';


function ReactBasics() {
    
  return (
    <div className="react-basics">
      <h1>React Basics</h1>
      <section>
        <h3>How to install</h3>
        <div className="react-basics__how-to-install">
          <p> The simplest way to create a react project is to type this in your
            terminal
          </p>
          <div className="code-section">
            <code>npx create-react-app my-app </code><br />
            <code>cd my-app </code><br />
            <code>code .</code>
          </div>
          <p>This operation will take a while, depending on your system</p>
          <p>Make sure you have npm installed (version 14 or higher)</p>
        </div>
      </section>
      <section className="react-basics__remove">
        <h3>Remove useless stuff from it</h3>
        <p>Some parts of what we have installed can be deleted, we wouldn't
          normally use the standardized blueprint
        </p>
        <div className="react-basics__images">
          <div>
            <img src={initial} alt="initial"  />
          </div>
          <div>
            <img src={whatToDelete}  alt="delete"  />
          </div>
          <div>
            <img src={final} alt="final"   />
          </div>
        </div>
      </section>
      <section className="react-basics__npm">
        <h3>Start the project</h3>
        <p>Next step is to type the following code to acces your project in real
          time
        </p>
        <div className="code-section">
          <code>npm start</code>
        </div>
        <p>Wait for the browser to open up and show you</p>
        <p>'Ctrl+SHIFT+i' to access your developer tool on the web paged that just opened and check to solve the errors: </p>
        <p>you have deleted some files and you have to delete the connections to the files that are not there anymore</p>
      </section>
      <CreateReactComponent/>
      <section className="react-basics__jsx">
        <h3>Writing JSX</h3>
        <p>Be prepared to write code in JSX, that is HTML with a twist and flavoured with JavaScript. Confusing at first, I know, but nothing simpler:</p>
        <p>similar semantic to HTML but by adding JavaScript context in within curly brackets ({"{"}like this{"}"})</p>
      </section>
    </div>
  );
}

export default ReactBasics;
