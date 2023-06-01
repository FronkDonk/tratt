import classes from "./Nav.module.css";
import { useState, useEffect, useContext } from "react";
import AnimatedButton from "../../UI/AnimatedButton";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Nav(props) {
  const [navStyle, setNavStyle] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/Contact":
        setNavStyle(true);
        break;
      case "/our-mission":
        setNavStyle(true);
        break;
      default:
        setNavStyle(false);
        break;
    }
  }, [window.location.pathname]);

  function dropDownMenuHandler() {
    props.handleMenuToggle();
    //kallar handleMenyToggle som ändrar statet för att visa dropdownmenyn
  }

  return (
    <nav className={navStyle ? classes["contact-nav"] : classes.nav}>
      <div className={classes.dropdown}>
        <p>
          <a
            className={navStyle ? classes["link-contact"] : classes.link}
            href="/"
          >
            NextTech
          </a>
        </p>
        <svg
          //klick funktionen som kallar på dropDownMenuHandler
          onClick={dropDownMenuHandler}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25"
            stroke={navStyle ? "#12182f" : "white"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className={classes["navbar-container"]}>
        <p>
          <a
            className={navStyle ? classes["link-contact"] : classes.link}
            href="/"
          >
            NextTech
          </a>
        </p>
        <ul className={classes["navbar-list"]}>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="/our-mission"
            >
              Our mission
            </a>
          </li>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="/Contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="#"
            >
              Documentation
            </a>
          </li>
        </ul>
        {!navStyle && (
          //om navStyle är false så visas AnimatedButton komponenten
          <AnimatedButton
            class="navbarSignup"
            buttonText={currentUser ? "Dashboard" : "Sign in"}
            buttonLink={currentUser ? "/dashboard" : "/sign-in"}
            //om currentUser finns så visas Dashboard annars visas sign in
            arrowFill="white"
            arrowStroke="white"
          />
        )}
        {navStyle && (
          //om navStyle är true så visas AnimatedButton komponenten som är för contact sidan
          <AnimatedButton
            class="navbarContactSignup"
            buttonText="Sign in"
            buttonLink="/sign-in"
            arrowFill="white"
            arrowStroke="white"
          />
        )}
      </div>
    </nav>
  );
}
