import Nav from "../components/Layout/Header/Nav";
import picture from "../assets/mission.jpg";
import classes from "./OurMission.module.css";
import { useState } from "react";

export default function OurMission() {
    const [showNavMenu, setShowNavMenu] = useState(false);

  
    function handleMenuToggle() {
      setShowNavMenu(!showNavMenu);
      console.log("hej");
    }
  
  return (
    <>
      <Nav showNavMenu={showNavMenu} handleMenuToggle={handleMenuToggle} />
       <div className={classes.DropDownMenu}>
        {/*om showNavMeny är true så visas DropDownMenu komponenten annars inte*/}
        {showNavMenu && (
          <DropDownMenu
            showNavMenu={showNavMenu}
            handleMenuToggle={handleMenuToggle}
          />
        )}
        {/*Skickar med showNavMenu state till DropDownMeny och funktionen handleMenuToggle */}
      </div>
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <div className={classes.textContainer}>
            <h1 className={classes.title}>Our Mission</h1>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo
              alias vel dolores necessitatibus reiciendis cum. Expedita sint nam
              deleniti cupiditate ut quos vero sapiente aliquam minus? Pariatur,
              rerum libero.
            </p>
          </div>
          <div className={classes.textContainer}>
            <h1 className={classes.title}>Our Mission</h1>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo
              alias vel dolores necessitatibus reiciendis cum. Expedita sint nam
              deleniti cupiditate ut quos vero sapiente aliquam minus? Pariatur,
              rerum libero.
            </p>
          </div>
        </div>
        <img className={classes.image} src={picture} alt="mission" />
      </div>
    </>
  );
}
