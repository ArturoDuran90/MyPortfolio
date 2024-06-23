import '../Scss/Layout.scss';
import '../Scss/Landing.scss';
// import portrait from '../Assets/portrait.png';
import githubLogo from '../Assets/githubLogo.png';
import linkedinLogo from '../Assets/linkedinLogo.png';

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
              <div className="box"></div>
              <div className="box"></div>
              <div className="box flex-center">
                <aside className="box">
                  <div className='box landing_socials'>
                    <a id="linkedin_container" href="https://www.linkedin.com/in/arturoduran" target="_blank" rel="noreferrer">
                      <img id="linkedin_logo" src={linkedinLogo} alt="LinkedIn"/>/arturoduran
                    </a>
                  </div>
                  <div className="box">
                    <a id="github_container" href="https://github.com/ArturoDuran90" target="_blank" rel="noreferrer">
                      <img id="github_logo" src={githubLogo} alt="GitHub"/>ArturoDuran90
                    </a>
                  </div>
                </aside>
              </div>
                
            </div>
            <div className="box landing_middle">
              <div className="box"></div>
              <div className="box">First Div Middle</div>
              <div className="box arrows_container">Arrows</div>
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
