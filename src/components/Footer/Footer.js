import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.css";
import githubLogo from "../../assets/github-mark.png";

function Footer() {
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_content}>
        <ul className={classes.footer_logos_container}>
          <li className={classes.footer_logo}>
            <Link target="_BLANK" className={classes.external_url} to="#">
              L
            </Link>
          </li>
          <li className={classes.footer_logo}>
            <Link target="_BLANK" className={classes.external_url} to="#">
              L
            </Link>
          </li>
          <li className={classes.footer_logo}>
            <Link target="_BLANK" className={classes.external_url} to="#">
              L
            </Link>
          </li>
          <li className={classes.footer_logo}>
            <Link target="_BLANK" className={classes.external_url} to="#">
              <img
                className={classes.logo_image}
                src={githubLogo}
                alt="github_logo"
              />
            </Link>
          </li>
          <li className={classes.footer_logo}>
            <Link target="_BLANK" className={classes.external_url} to="#">
              L
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.footer_content}>
        <div className={classes.copy_write}>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <hr />
          <span>
            &copy; 2023 example.com <br /> All right reserved. Powered by the
            BANGS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
