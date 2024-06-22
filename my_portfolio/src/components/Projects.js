import '../Scss/Layout.scss';
import '../Scss/Projects.scss';

function Projects() {
  return (
    <>
      <span className="flexible-span">
        <div className="box side-space"></div>
        <div className="box container">
          <div className="box projects_left"></div>
          <div className="box projects_middle">
            <div className="box">First Div Middle</div>
            <div className="box projects_middle_child_1">
              <div className="box projects_middle_child_1_left"></div>
              <div className="box projects_middle_child_1_right"></div>
            </div>
            <div className="box projects_middle_child_2">
              <div className="box projects_middle_child_2_left"></div>
              <div className="box projects_middle_child_2_right"></div>
            </div>
            <div className="box projects_middle_child_1">
              <div className="box projects_middle_child_1_left"></div>
              <div className="box projects_middle_child_1_right"></div>
            </div>
            <div className="box projects_middle_child_2">
              <div className="box projects_middle_child_2_left"></div>
              <div className="box projects_middle_child_2_right"></div>
            </div>
            <div className="box projects_middle_child_1">
              <div className="box projects_middle_child_1_left"></div>
              <div className="box projects_middle_child_1_right"></div>
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
