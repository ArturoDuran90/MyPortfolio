import '../Scss/ProjectSection.scss';
import ReviewIt from '../Assets/reviewIt.png';
import LangOwl from '../Assets/langOwl.png';

function ProjectsSections(){
  return(
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
            to look up any movies and being able to review them by choosing an amount of stars and leaving a written review for other users to see and read. &#128187;<br/>
            You can visit the final project by clicking on the image. &#128072;<br/>
            &#8226; A website created using React.JS, MySQL, RestAPI, Express, Heroku, and more.<br/>
            &#8226; Stored users data in a SQL database🗄️ as well as IMDB api to pull any movies and add reviews to it.<br/>
            &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop. &#128241; &#128187;</p>
          </div>
        </div>
      </div>
      <div className="box projects_middle_child_2">   
        <div className="box projects_middle_child_2_left">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">LangOwl</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">A collaboration projectwith the main idea of creating a website from scratch that will allow users to learn a<br/>
            new language by creating flashcards and adding them to its card deck, as well as a translator to help. &#128187;<br/>
            You can visit the final project by clicking on the image. &#128073;<br/>
            &#8226; A website created using React.JS, MySQL, RestAPI, Express, Amplify, and more.<br/>
            &#8226; Stored users data in a SQL database🗄️ as well as Google's Translate API to translate any input data from the user.<br/>
            &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop. &#128241; &#128187;</p>
          </div>
        </div>
        <div className="box projects_middle_child_2_right">
          <a id="image_container" className="image_container" href="https://review-it.herokuapp.com" target="_blank" rel="noreferrer">
            <img className="project_image" src={LangOwl} alt="LangOwl Homepage"/>
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
      </div>
      <div className="box projects_middle_child_1">
        <div className="box projects_middle_child_1_left">
          <a id="image_container" className="image_container" href="" target="_blank" rel="noreferrer">
            <img className="project_image" src={KnowUrCar} alt="KnowUrCar Homepage"/>
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
        <div className="box projects_middle_child_1_right">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">KnowUrCar</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc"></p>
          </div>
        </div>
      </div>
      <div className="box projects_middle_child_2">   
        <div className="box projects_middle_child_2_left">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">To-Do Application</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc"></p>
          </div>
        </div>
        <div className="box projects_middle_child_2_right">
          <a id="image_container" className="image_container" href="" target="_blank" rel="noreferrer">
            <img className="project_image" src={TodoApp} alt="To-Do Application Homepage"/>
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
      </div>
      <div className="box projects_middle_child_1">
        <div className="box projects_middle_child_1_left">
          <a id="image_container" className="image_container" href="" target="_blank" rel="noreferrer">
            <img className="project_image" src={CrudWithPHP} alt="CRUD with PHP Homepage"/>
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
        <div className="box projects_middle_child_1_right">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">CRUD with PHP</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc"></p>
          </div>
        </div>
      </div>
      {/* <div className="box projects_middle_child_2">   
        <div className="box projects_middle_child_2_left">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">ReviewIt</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">A collaboration project with two more people with the idea of creating a website from scratch that will allow users<br/>
            to look up any movies and being able to review them by choosing an amount of stars and leaving a written review for other users to see and read. &#128187;<br/>
            &#8226; A website created using React.JS, MySQL, RestAPI, Express, Heroku, and more.<br/>
            &#8226; Stored users data in a SQL database🗄️ as well as IMDB api to pull any movies and add reviews to it.<br/>
            &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop. &#128241; &#128187;</p>
          </div>
        </div>
        <div className="box projects_middle_child_2_right">
          <a id="image_container" className="image_container" href="https://review-it.herokuapp.com" target="_blank" rel="noreferrer">
            <img className="project_image" src={ReviewIt} alt="ReviewIt Homepage"/>
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
      </div> */}


{/* New Section with Title on the Right and Description on the Left */}
      {/* <div className="box projects_middle_child_2">
        <div className="box projects_middle_child_2_left">
          <p className="projects_desc">A collaboration project with two more people with the idea of creating a website from scratch that will allow users<br/>
          to look up any movies and being able to review them by choosing an amount of stars and leaving a written review for other users to see and read. &#128187;<br/>
          &#8226; A website created using React.JS, MySQL, RestAPI, Express, Heroku, and more.<br/>
          &#8226; Stored users data in a SQL database🗄️ as well as IMDB api to pull any movies and add reviews to it.<br/>
          &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop. &#128241; &#128187;</p>
        </div>
        <div className="box projects_middle_child_2_right">
          <a id="image_container" className="image_container" href="https://review-it.herokuapp.com" target="_blank" rel="noreferrer">
            <img className="project_image" src={ReviewIt} alt="ReviewIt Homepage"/>
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
      </div> */}
      {/* <div className="box projects_middle_child_2">
        <div className="box projects_middle_child_2_left">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">ReviewIt</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">A collaboration project with two more people with the idea of creating a website from scratch that will allow users<br/>
            to look up any movies and being able to review them by choosing an amount of stars and leaving a written review for other users to see and read. &#128187;<br/>
            &#8226; A website created using React.JS, MySQL, RestAPI, Express, Heroku, and more.<br/>
            &#8226; Stored users data in a SQL database🗄️ as well as IMDB api to pull any movies and add reviews to it.<br/>
            &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop. &#128241; &#128187;</p>
          </div>
        </div>
        <div className="box projects_middle_child_2_right">
          <a id="image_container" className="image_container" href="https://review-it.herokuapp.com" target="_blank" rel="noreferrer">
            <img className="project_image" src={ReviewIt} alt="ReviewIt Homepage"/>
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
      </div> */}


    </div>
  );
}
export default ProjectsSections;