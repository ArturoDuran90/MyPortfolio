import '../Scss/Layout.scss';
import '../Scss/About.scss';
import SkillsTable from './SkillsTable';
import FunFactsTable from './FunFactsTable';

function About(){
  return(
    <>
      <span className="flexible-span">
        <div className="box side-space"></div>
        <div className="box container" id="about">
            <div className="box about_left"></div>
            <div className="box about_middle">
              <div className="box section_titles_container">
                <h1 className='section_titles'>About me</h1>
              </div>
              <div className='box about_middle_inner_desc'>
                <div className="box about_introduction_text">
                  <p>I’m a <span class="highlight">Full Stack Web Developer &#128187; &#129374;</span> from <span class="highlight">Salt Lake City, Utah &#128204;</span>, who loves Front-End and Back-End.<br/>
                  During my college career I’ve been able to create lots of projects;<br/>
                  from simple Front-End only to Full-Stack Websites, mainly using 
                  <a className="hightlight_link" href="https://react.dev/"> ReactJS, </a>  
                  <a className="hightlight_link" href="https://getbootstrap.com/">Bootstrap, </a> <a className="hightlight_link" href="https://www.mysql.com/">MySQL, </a> 
                  <a className="hightlight_link" href="https://nodejs.org/en">Node.JS, </a> and more. &#9989;<br/>
                  During my free time I’m always keeping myself busy either on projects or learning something new that will<br/>
                  help me improve my skills and tech stack knowledge. &#128214; Currently working on multiple projects for various needs.<br/>
                  Fell free to take a look a my <a className="hightlight_link" href="#projects">Projects</a> below for more details. &#128279;<br/>
                  Also don’t forget to follow me on <a className="hightlight_link" href="https://github.com/ArturoDuran90">Github</a> as well as <a className="hightlight_link" href="https://www.linkedin.com/in/arturoduran">LinkedIn</a> to connect. &#129309;</p>
                </div>
              </div>
              <div className="box about_middle_child">
                <div className="box about_middle_child_left">
                  <SkillsTable />
                </div>
                <div className="box about_middle_child_right">
                  <FunFactsTable />
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