import '../Scss/Layout.scss';
import '../Scss/About.scss';
import SkillsTable from './SkillsTable';

function About(){
  return(
    <>
      <span className="flexible-span">
        <div className="box side-space"></div>
        <div className="box container">
            <div className="box about_left"></div>
            <div className="box about_middle">
              <div className="box">
                <h1 className='section_titles'>About me</h1>
              </div>
              <div className='box about_middle_inner_desc'>
                <div className="box about_introduction_text">
                  {/* I’m a <em>Full Stack Web Developer</em> from <em>Salt Lake City, Utah</em>, who loves Front-End and Back-End.<br/>
                  During my college career I’ve been able to create lots of projects;<br/>
                  from simple Front-End only to Full-Stack Websites, mainly using <em>ReactJS, Bootstrap, MySQL, Node.JS, and more.</em><br/>
                  During my free time I’m always keeping myself busy either on projects or learning something new that will<br/>
                  help me improve my skills and tech stack knowledge. Currently working on multiple projects for various needs.<br/>
                  Fell free to take a look a my Projects below for more details.<br/>
                  Also don’t forget to follow me on <em>GitHub</em> as well as <em>LinkedIn</em> to connect. */}
                  I’m a Full Stack Web Developer from Salt Lake City, Utah, who loves Front-End and Back-End.<br/>
                  During my college career I’ve been able to create lots of projects;<br/>
                  from simple Front-End only to Full-Stack Websites, mainly using ReactJS, Bootstrap, MySQL, Node.JS, and more.<br/>
                  During my free time I’m always keeping myself busy either on projects or learning something new that will<br/>
                  help me improve my skills and tech stack knowledge. Currently working on multiple projects for various needs.<br/>
                  Fell free to take a look a my Projects below for more details.<br/>
                  Also don’t forget to follow me on GitHub as well as LinkedIn to connect.
                </div>
              </div>
              <div className="box about_middle_child">
                <div className="box about_middle_child_left">
                  {/* <div className='box'> */}
                    {/* <h2 className='section_subtitles'>Skills</h2> */}
                    <SkillsTable />
                  {/* </div> */}
                </div>
                <div className="box about_middle_child_right">
                  <div className='box'>
                    Fun Facts
                    <ul>
                      <li>I like plain food.</li>
                      <li>I love Front-End but I think I'm colorblind.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="box about_right"></div>
        </div>
        <div className="box side-space"></div>
      </span>
    </>
  );
}

export default About;