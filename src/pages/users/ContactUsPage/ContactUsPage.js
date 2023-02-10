import classes from "./ContactUsPage.module.css";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
function ContactUsPage() {
  return (
    <div className={classes.contact_container}>
      <div className={classes.contact_sub_container}>
        <h1 className={classes.contact_title}> DUMMY TITLE</h1>
        <p className={classes.contact_description}> DUMMY DESCRIPTION</p>
        <div>
          {/* Classnames should be defined properly */}
          <div className={classes.contact_icons}>
            <a
              href="https://github.com/a1603169"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className={classes.contact_icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/bang-seunghun-18a465204/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className={classes.contact_icon} />
            </a>
            <a
              href="https://www.instagram.com/seunghun_bang/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className={classes.contact_icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.contact_sub_container}>HELLLOOO</div>
    </div>
  );
}

export default ContactUsPage;
