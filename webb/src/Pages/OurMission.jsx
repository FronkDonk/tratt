import Nav from "../components/Layout/Header/Nav";
import picture from "../assets/mission.jpg";
import classes from "./OurMission.module.css";

export default function OurMission() {
  return (
    <>
      <Nav showNavMenu={showNavMenu} handleMenuToggle={handleMenuToggle} />
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
