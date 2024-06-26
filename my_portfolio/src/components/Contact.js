import '../Scss/Layout.scss';
import '../Scss/Contact.scss';
import portrait from '../Assets/portrait.png';
import githubLogo from '../Assets/githubLogo.png';
import linkedinLogo from '../Assets/linkedinLogo.png';
import youtubeLogo from '../Assets/youtubeLogo.png';

function Contact(){
  return(
    <>
      <span>
        <div className="box side-space"></div>
        <div className="box container" id="contact">
            <div className="box contact_left"></div>
            <div className="box contact_middle">
              <div className="box section_titles_container">
                <h1 className='section_titles'>Contact</h1>
              </div>
              <div className="box contact_middle_child">
                <div className="box contact_middle_content">
                  <p id="contact_message">Thank you so much for checking out my Portfolio.<br/>
                  Send me a message to keep in touch!</p>
                  <div className="box contact_socials_container">
                    <div className="box contact_socials_container_child">
                      <a className="contact_socials" href="https://www.linkedin.com/in/arturoduran" target="_blank" rel="noreferrer">
                        <img className="socials_image" src={linkedinLogo} alt="LinkedIn"/>/arturoduran
                      </a>
                      <a className="contact_socials" href="https://github.com/ArturoDuran90" target="_blank" rel="noreferrer">
                        <img className="socials_image" src={githubLogo} alt="GitHub"/>ArturoDuran90
                      </a>
                      <a className="contact_socials" href="https://www.youtube.com/@ArturoDuran_" target="_blank" rel="noreferrer">
                        <img className="socials_image" src={youtubeLogo} alt="YouTube"/>ArturoDuran_
                      </a>
                    </div>
                    <div className="portrait_container">
                      <img id="contact_portrait_image" src={portrait} alt="Portrait"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box contact_right"></div>
        </div>
        <div className="box side-space"></div>
      </span>
    </>
  );
}

export default Contact;