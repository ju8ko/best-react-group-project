import createIt from '../images/create.png'
import buildIt from '../images/build.png'
import importIt from '../images/import.png'

function CreateReactComponent() {
    return ( 
        // <section className="create-react-component">
      <section className="react-basics__components">
        <h3>Create your first react Component</h3>
        <p>In your <code>src</code> folder create a file and name it with a capital letter (Pascal case) and end it with .js or .jsx 
        </p>
        <div className="create-react-component__images">
          <img src={createIt} alt="creating" />
        </div>
        <p>Build your component. Don't forget, a component can only return one element</p>
        <div className="create-react-component__images">
          <img src={buildIt} alt="building" />
        </div>
        <p>Import the created component in App and use it</p>
        <div className="create-react-component__images">
          <img src={importIt} alt="import it" />
        </div>
      </section>
        // </section>
     );
}

export default CreateReactComponent;