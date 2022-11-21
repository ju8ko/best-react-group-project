import create1 from '../images/createComponent-1.png'
import create2 from '../images/createComponent-2.png'
import create3 from '../images/createComponent-3.png'

function ReUsableUi() {
    return ( 
        <section className="reusable-ui">
                <h3>Reusable UI</h3>
                <p>This is where React allows you to use it's full potential. You may have noticed that the 'Create a Component' section looks very similar to the part in the 'Basics' section. It is the same! One of React's strengths is exactly in this example. It can be replicated anywhere: button, forms, etc and it has been used everywhere in the project. Actually, this part is an added component itself!</p>
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
     );
}

export default ReUsableUi;