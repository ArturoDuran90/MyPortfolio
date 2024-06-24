import '../Scss/SkillsTable.scss';

function SkillsTable(){
  return(
    <>
     <span className='box skills_table'>
      <h2 className=' section_subtitles'>Skills</h2>
      <div className=' skills_content'>
        <div className='skills_left'>
          <ul>
            <li><label>JavaScript</label></li>
            <li><label>JFX</label></li>
            <li><label>Java</label></li>
            <li><label>C#</label></li>
            <li><label>PHP</label></li>
            <li><label>HTML5</label></li>
            <li><label>ReactJS</label></li>
            <li><label>Express/NodeJS</label></li>
            <li><label>Bootstrap</label></li>
            <li><label>CSS</label></li>
            <li><label>SASS</label></li>
            <li><label>MongoDB</label></li>
          </ul>
        </div>
        <div className='skills_right'>
          <ul>
            <li><label>MySQL</label></li>
            <li><label>RestAPI</label></li>
            <li><label>JSON</label></li>
            <li><label>Postman</label></li>
            <li><label>Git/Github</label></li>
            <li><label>SCRUM/Agile</label></li>
            <li><label>Jira/Trello</label></li>
            <li><label>Adobe Suite</label></li>
            <li><label>Proxmox</label></li>
            <li><label>Docker</label></li>
            <li><label>Linux</label></li>
            <li><label>Figma</label></li>
          </ul>
        </div>
      </div>
     </span>
    </>
  );
}

export default SkillsTable;