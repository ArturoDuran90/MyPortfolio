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
        <div class="box side-space"></div>
        <div class="box container">
            <div class="box landing_left">
                <div class="box">First Div Left</div>
                <div class="box">Second Div Left</div>
                <div class="box">Third Div Left</div>
            </div>
            <div class="box landing_middle">
              <div class="box">First Div Middle</div>
              <div class="box">First Div Middle</div>
              <div class="box">First Div Middle</div>
            </div>
            <div class="box landing_right">
                <div class="box">First Div Right</div>
                <div class="box">Second Div Right</div>
                <div class="box">Third Div Right</div>
            </div>
        </div>
        <div class="box side-space"></div>
      </span>
    </>
  );
}

export default Landing;
