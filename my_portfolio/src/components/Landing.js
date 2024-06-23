import '../Scss/Layout.scss';
import '../Scss/Landing.scss';

function Landing() {
  return (
    // <main id="parent_container">
    //   <div className='box'>
    //     <h1>Uno</h1>
    //   </div>
    //   <div className='box'>
    //     <h1>Dos</h1>
    //   </div>
    //   <div className='box'>
    //     <h1>Tres</h1>
    //   </div>
    // </main>
    <>
      <span>
        <div className="box side-space"></div>
        <div className="box container">
            <div className="box landing_left">
                <div className="box">First Div Left</div>
                <div className="box">Second Div Left</div>
                <div className="box">Third Div Left</div>
            </div>
            <div className="box landing_middle">
              <div className="box">First Div Middle</div>
              <div className="box">First Div Middle</div>
              <div className="box">First Div Middle</div>
            </div>
            <div className="box landing_right"></div>
        </div>
        <div className="box side-space"></div>
      </span>
    </>
  );
}

export default Landing;
