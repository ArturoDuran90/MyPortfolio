import '../Scss/Layout.scss';
import '../Scss/About.scss';

function About(){
  return(
    <>
      <span>
        <div class="box side-space"></div>
        <div class="box container">
            <div class="box about_left">
                <div class="box">First Div Left</div>
                <div class="box">Second Div Left</div>
                <div class="box">Third Div Left</div>
            </div>
            <div class="box about_middle">
              <div class="box">First Div Middle</div>
              <div class="box">Second Div Middle</div>
              <div class="box about_middle_child">
                <div class="box about_middle_child_left"></div>
                <div class="box about_middle_child_right"></div>
              </div>
            </div>
            <div class="box about_right">
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

export default About;