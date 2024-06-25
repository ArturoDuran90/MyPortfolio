import '../Scss/Layout.scss';
import '../Scss/Landing.scss';
import '../Scss/Arrows.scss';
import portrait from '../Assets/portrait.png';
import githubLogo from '../Assets/githubLogo.png';
import linkedinLogo from '../Assets/linkedinLogo.png';

function Landing() {
  return (
    <>
      <span>
        <div className="box side-space"></div>
        <div className="box container" id="home">
          <div className="box landing_left">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box flex-center">
              <aside className="box">
                <div className='box landing_socials'>
                  <a id="linkedin_container" href="https://www.linkedin.com/in/arturoduran" target="_blank" rel="noreferrer">
                    <img className="socials_image" src={linkedinLogo} alt="LinkedIn"/>/arturoduran
                  </a>
                </div>
                <div className="box">
                  <a id="github_container" href="https://github.com/ArturoDuran90" target="_blank" rel="noreferrer">
                    <img className="socials_image" src={githubLogo} alt="GitHub"/>ArturoDuran90
                  </a>
                </div>
              </aside>
            </div>  
          </div>
          <div className="box landing_middle">
            <div className="box"></div>
            <div className="box landing_middle_inner">
              <div className='box landing_middle_inner_title'>
                <div className="box" id="image_container">
                  <img id="portrait_image" src={portrait} alt="Portrait"/>
                </div>
                <div className="box" id="title_container">
                  <h1>Hola, <br/>I'm Arturo Duran</h1>
                </div>
              </div>
              <div className='box landing_middle_inner_desc'>
                <div className="box landing_introduction_text">
                  A passionate and versatile Full-Stack Web Developer skilled in<br/> 
                  JavaScript, ReactJS, Full-Stack Development, and more. Specializing<br/>
                  in creating dynamic and User-Friendly Web Applications.
                </div>
              </div>
            </div>
            <div className="box arrows_container">
              <div className="arrows arrow_big"></div>
              <div className="arrows arrow_small"></div>
            </div>
          </div>
          <div className="box landing_right">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
        <div className="box side-space"></div>
      </span>
    </>
  );
}

export default Landing;
