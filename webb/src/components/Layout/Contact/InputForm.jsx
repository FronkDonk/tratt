import classes from "./InputForm.module.css";
import Nav from "../Header/Nav";
import checkIcon from "../../../assets/1-circle.svg";
import InputField from "../../UI/InputField";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import InputFieldCard from "../../UI/InputFieldCard";
import { useRef, useState } from "react";
import BulletPoints from "../../UI/BulletPoints";
import DropDownMenu from "../../UI/DropDownMenu";

export default function InputForm() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  function handleMenuToggle() {
    setShowNavMenu(!showNavMenu);
    console.log("hej");
  }

  const nameRef = useRef(null);
  const companyRef = useRef(null);

  const [submit, setSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <>
      <Nav showNavMenu={showNavMenu} handleMenuToggle={handleMenuToggle} />
      {/*om showNavMenu är true så visas DropDownMenu komponenten annars inte*/}
      <div>
        {showNavMenu && (
          <DropDownMenu
            showNavMenu={showNavMenu}
            handleMenuToggle={handleMenuToggle}
          />
        )}
      </div>
      {submit && (
        //om submit är true så visas ett meddelande
        <div className={classes.submitMessage}>
          <Card>
            <h1>
              Thank you {nameRef.current.value} from {companyRef.current.value}{" "}
              we will reach back to you as soon as we can!
            </h1>
          </Card>
        </div>
      )}
      {!submit && (
        //om submit är false så visas formuläret och allt annat
        <div className={classes["flex-container"]}>
          <div className={classes.bulletPointsContainer}>
            {/* Tar emot en title via props */}
            <BulletPoints title="Speak with an expert" />
          </div>
          <div className={classes.formContainer}>
            <Card>
              <form onSubmit={handleSubmit}>
                <InputFieldCard>
                  <InputField
                    type="text"
                    id="name"
                    label="Name"
                    placeholder="Enter your name"
                    name="name"
                    ref={nameRef}
                    required
                  />
                </InputFieldCard>
                <InputFieldCard>
                  <InputField
                    type="email"
                    id="email"
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </InputFieldCard>
                <InputFieldCard>
                  <InputField
                    type="text"
                    id="company"
                    label="Company"
                    ref={companyRef}
                    placeholder="Enter your company name"
                    name="company"
                    required
                  />
                </InputFieldCard>
                <div className={classes["form-group"]}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className={classes["form-group"]}>
                  <label className={classes.maleLabel} htmlFor="gender">Gender</label>
                  <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <div className={classes["form-group"]}>
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country">
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                  </select>
                </div>

                <Button type="submit" buttonText="Send" />
              </form>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
