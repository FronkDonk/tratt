import classes from "./Card.module.css";
//card används för formen på contact, sign in och sign up sidorna
export default function Card(props) {
  return <div className={classes["contact-form"]}>{props.children}</div>;
}
