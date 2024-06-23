import '../Scss/Layout.scss';
import '../Scss/Contact.scss';


function Contact(){
  return(
    <>
      <span>
        <div className="box side-space"></div>
        <div className="box container">
            <div className="box contact_left"></div>
            <div className="box contact_middle">
              <div class="box">First Div Middle</div>
              <div className="box contact_middle_child">
                <div className="box contact_middle_child_left"></div>
                <div className="box contact_middle_child_right"></div>
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