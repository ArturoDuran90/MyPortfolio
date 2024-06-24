import '../Scss/Layout.scss';
import '../Scss/Projects.scss';
import ReviewIt from '../Assets/reviewIt.png';

function Projects() {
  return (
    <>
      <span className="flexible-span">
        <div className="box side-space"></div>
        <div className="box container">
          <div className="box projects_left"></div>
          <div className="box projects_middle">
            <div className="box section_titles_container">
              <h1 className='section_titles'>Projects</h1>
            </div>
            <div className="box projects_middle_child_container">
              <div className="box projects_middle_child_1">
                <div className="box projects_middle_child_1_left">
                  <a id="image_container" className="image_container" href="https://review-it.herokuapp.com" target="_blank" rel="noreferrer">
                    <img className="project_image" src={ReviewIt} alt="ReviewIt Homepage"/>
                    <div className="project_title_overlay">View Project</div>
                  </a>
                </div>
                <div className="box projects_middle_child_1_right">
                  <div className="box projects_middle_child_title">
                    <h3 className="projects_title">ReviewIt</h3>
                  </div>
                  <div className="box projects_middle_child_desc">
                    <p className="projects_desc">A collaboration project with two more people with the idea of creating a website from scratch that will allow users<br/>
                    to look up any movies and being able to review them by choosing an amount of stars and leaving a written review for other users to see and read.<br/>
                    &#8226; A website created using React.JS, MySQL, RestAPI, Express, Heroku, and more.<br/>
                    &#8226; Stored users data in a SQL database as well as IMDB api to pull any movies and add reviews to it.<br/>
                    &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box projects_middle_child_2">
              <div className="box projects_middle_child_2_left"></div>
              <div className="box projects_middle_child_2_right"></div>
            </div>
          </div>
          <div className="box projects_right"></div>
        </div>
        <div className="box side-space"></div>
      </span>
    </>
  );
}

export default Projects;
