import '../Scss/ProjectSection.scss';
import ReviewIt from '../Assets/reviewIt.png';
import LangOwl from '../Assets/langOwl.png';
import KnowUrCar from '../Assets/knowurcar.png';
import VehicleDBwithCrudPHP from '../Assets/vehicleWebsitePhp.png';
import TodoApp from '../Assets/todoApp.png';
import { useEffect } from 'react';

function ProjectsSections() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.projects_middle_child_1, .projects_middle_child_2');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="box projects_middle_child_container">
      <div className="box projects_middle_child_1">
        <div className="box projects_middle_child_1_left">
          <a id="image_container" className="image_container" href="https://review-it.herokuapp.com" target="_blank" rel="noreferrer">
            <img className="project_image" src={ReviewIt} alt="ReviewIt Homepage" />
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
        <div className="box projects_middle_child_1_right">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">ReviewIt</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">
              A collaboration project with two more people with the idea of creating a website from scratch that will allow users
              <br />
              to look up any movies and being able to review them by choosing an amount of stars and leaving a written review for
              other users to see and read. &#128187;
              <br />
              You can visit the final project by clicking on the image. &#128072;
              <br />
              &#8226; A website created using React.JS, MySQL, RestAPI, Express, Heroku, and more.
              <br />
              &#8226; Stored users data in a SQL database🗄️ as well as IMDB api to pull any movies and add reviews to it.
              <br />
              &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop. &#128241; &#128187;
            </p>
          </div>
        </div>
      </div>
      <div className="box projects_middle_child_2">
        <div className="box projects_middle_child_2_left">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">LangOwl</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">
              A collaboration projectwith the main idea of creating a website from scratch that will allow users to learn a
              <br />
              new language by creating flashcards and adding them to its card deck, as well as a translator to help. &#128187;
              <br />
              You can visit the final project by clicking on the image. &#128073;
              <br />
              &#8226; A website created using React.JS, MySQL, RestAPI, Express, Amplify, and more.
              <br />
              &#8226; Stored users data in a SQL database🗄️ as well as Google's Translate API to translate any input data from the user.
              <br />
              &#8226; The website uses flexbox to make sure it is visible and enjoyable in any type of device, from mobile to desktop. &#128241; &#128187;
            </p>
          </div>
        </div>
        <div className="box projects_middle_child_2_right">
          <a id="image_container" className="image_container" href="https://main.d215kahaxd6ror.amplifyapp.com/" target="_blank" rel="noreferrer">
            <img className="project_image" src={LangOwl} alt="LangOwl Homepage" />
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
      </div>
      <div className="box projects_middle_child_1">
        <div className="box projects_middle_child_1_left">
          <a id="image_container" className="image_container" href="https://github.com/ArturoDuran90/capstoneProject" target="_blank" rel="noreferrer">
            <img className="project_image" src={KnowUrCar} alt="KnowUrCar Homepage" />
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
        <div className="box projects_middle_child_1_right">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">KnowUrCar</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">
              A website that allows users to look up any vehicle by its year, make, model, and trim and get maintenance information,
              <br />
              like engine type, oil change interval, dashboard lights meaning, user manual, and more. 🛠️ 🚗
              <br />
              You can visit the final project by clicking on the image. &#128072;
              <br />
              &#8226; Used ReactJS, CSS, Flexbox to create the front-end of the website, to make it appealing for the user and
              <br />
              accessible from any devices including desktop all the way down to mobile sizes. &#128241; &#128187;
              <br />
              &#8226; Processed the data using RestAPI calls from different companies with their permission to have a wide variety of vehicles and
              speed up the search and responses
            </p>
          </div>
        </div>
      </div>
      <div className="box projects_middle_child_2">
        <div className="box projects_middle_child_2_left">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">To-Do List Website with Golang</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">
              A simple website that allows users to Create, Read, Update, and Delete any tasks. &#128221;
              <br />
              You can visit the final project by clicking on the image. &#128073;
              <br />
              &#8226; A website created using ReactJS, CSS, MondoDB and Golang. 🗄️
              <br />
              &#8226; The website uses Goang as the Back-end to perform the tasks faster. &#9889;
              <br />
              &#8226; Created a MondoDB shema to Store &#128229;, Read &#128228;, and Write all the tasks using json formating.
            </p>
          </div>
        </div>
        <div className="box projects_middle_child_2_right">
          <a id="image_container" className="image_container" href="https://github.com/ArturoDuran90/Golang-TodoList" target="_blank" rel="noreferrer">
            <img className="project_image" src={TodoApp} alt="To-Do Application Homepage" />
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
      </div>
      <div className="box projects_middle_child_1">
        <div className="box projects_middle_child_1_left">
          <a id="image_container" className="image_container" href="https://github.com/ArturoDuran90/Vehicle-Db-with-CRUD-in-PHP" target="_blank" rel="noreferrer">
            <img className="project_image" src={VehicleDBwithCrudPHP} alt="CRUD with PHP Homepage" />
            <div className="project_title_overlay">View Project</div>
          </a>
        </div>
        <div className="box projects_middle_child_1_right">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">CRUD operations to a Vehicle Database Website in PHP</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc">
              A simple website that allows users to look up any vehicle from the Database by selecting an ID and
              <br />
              Create 🆕, Update 🔄, or Delete 🗑️ the entry selected. 🚗
              <br />
              You can visit the final project by clicking on the image. &#128072;
              <br />
              &#8226; Created only using PHP files while adding some CSS for styling and MySQL as database.
              <br />
              &#8226; Stored all the data in a MySQL Database to perfom the CRUD operations. 🗄️
            </p>
          </div>
        </div>
      </div>
      <div className="box projects_middle_child_2 coming_soon">
        <div className="box projects_middle_child_2_left">
          <div className="box projects_middle_child_title">
            <h3 className="projects_title">Coming Soon &#8987;</h3>
          </div>
          <div className="box projects_middle_child_desc">
            <p className="projects_desc"></p>
          </div>
        </div>
        <div className="box projects_middle_child_2_right"></div>
      </div>
    </div>
  );
}

export default ProjectsSections;
