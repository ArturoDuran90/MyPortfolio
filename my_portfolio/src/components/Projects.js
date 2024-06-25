import '../Scss/Layout.scss';
import '../Scss/Projects.scss';
import ProjectsSections from './ProjectSections';

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
            <ProjectsSections />
          </div>
          <div className="box projects_right"></div>
        </div>
        <div className="box side-space"></div>
      </span>
    </>
  );
}

export default Projects;
