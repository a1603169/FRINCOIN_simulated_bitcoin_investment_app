import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header.module.css";
import useWindowDimensions from "../../CustomHooks/getWindowDimensions";

function Header() {
  const [isWide, setIsWide] = useState(true);
  const [btnActive, setBtnActive] = useState(true);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 954) {
      setIsWide(false);
      setBtnActive(false);
    } else {
      setIsWide(true);
      setBtnActive(true);
    }
  }, [width]);

  function hamburgerMenuHandler() {
    setBtnActive(!btnActive);
  }

  return (
    <nav className={classes.nav_container}>
      <RxHamburgerMenu
        onClick={hamburgerMenuHandler}
        className={classes.hamburger_icon}
      />
      <div className={classes.logo_container}>
        <NavLink
          onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(151, 90, 208)" : "",
              borderColor: isActive ? "rgb(151,90,208)" : "",
            };
          }}
          className={classes.home_logo}
          to="/"
        >
          FRINCOIN
        </NavLink>
      </div>
      {btnActive && (
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className={classes.notice_text}
          style={() => {
            return { display: btnActive ? "block" : "none !important" };
          }}
        >
          <span style={{ marginLeft: "30px" }}>
            NOTICE: TEST YOUR COIN INVESTMENT HERE FOR FREE 4/1/2023
          </span>
          <span style={{ marginLeft: "30px" }}>
            CONTACT US IF YOU HAVE ANY PROBLEM 4/1/2023
          </span>
          {/* Later there will be notice here */}
        </Marquee>
      )}

      {btnActive && (
        <ul className={classes.lists_container}>
          <li className={classes.list_innerContainer}>
            <NavLink
              onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
              style={({ isActive }) => {
                return { color: isActive ? "rgb(151, 90, 208)" : "" };
              }}
              className={classes.list}
              to="/all_coins"
            >
              COINS
            </NavLink>
          </li>
          <li className={classes.list_innerContainer}>
            <NavLink
              onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
              style={({ isActive }) => {
                return { color: isActive ? "rgb(151, 90, 208)" : "" };
              }}
              className={classes.list}
              to="/notice"
            >
              NOTICE
            </NavLink>
          </li>
          <li className={classes.list_innerContainer}>
            <NavLink
              onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
              style={({ isActive }) => {
                return { color: isActive ? "rgb(151, 90, 208)" : "" };
              }}
              className={classes.list}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
          <li className={classes.list_innerContainer}>
            <NavLink
              onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
              style={({ isActive }) => {
                return { color: isActive ? "rgb(151, 90, 208)" : "" };
              }}
              className={classes.list}
              to="/coin_review"
            >
              REVIEW
            </NavLink>
          </li>
          <li className={classes.list_innerContainer}>
            <NavLink
              onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
              style={({ isActive }) => {
                return { color: isActive ? "rgb(151, 90, 208)" : "" };
              }}
              className={classes.list}
              to="/ranking"
            >
              RANKING
            </NavLink>
          </li>
          <li className={classes.list_innerContainer}>
            <NavLink
              onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
              style={({ isActive }) => {
                return { color: isActive ? "rgb(151, 90, 208)" : "" };
              }}
              className={classes.list}
              to="/profile"
            >
              PROFILE
            </NavLink>
          </li>
          <li className={classes.list_innerContainer}>
            <NavLink
              onClick={!isWide && btnActive ? hamburgerMenuHandler : null}
              style={({ isActive }) => {
                return { color: isActive ? "rgb(151, 90, 208)" : "" };
              }}
              className={classes.list}
              to="/login"
            >
              LOGIN
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
