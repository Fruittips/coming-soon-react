import { useState, useEffect } from "react";
import validator from "validator";
import Logo from "./Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  const [isValid, setIsValid] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState(null);
  const [inputColor, setInputColor] = useState("blue");

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    console.log(enteredEmail);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validator.isEmail(enteredEmail)) {
      setIsValid(true);
      console.log(enteredEmail);
      setInputColor("blue");
    } else {
      setIsValid(false);
      console.log("Enter a valid email address!");
      setInputColor("red");
    }

    console.log(enteredEmail);
  }

  return (
    <div className="wrapper">
      <img src={Logo} style={{ marginBottom: "10px" }}></img>

      <h1 style={{ marginBottom: "-20px" }}>
        <span className="launching">We are launching</span> soon!
      </h1>
      <p>Subscribe and get notified!</p>

      <input
        type="email"
        id="email"
        name="email"
        defaultValue={"Your email address..."}
        onChange={emailChangeHandler}
        className="input email"
        style={{ borderColor: inputColor }}
      />
      <button
        onClick={handleSubmit}
        onEnter={handleSubmit}
        className="input notify"
      >
        Notify Me
      </button>
      {isValid ? (
        <></>
      ) : (
        <p style={{ color: "red" }}>Enter a valid email address!</p>
      )}
      <img
        src={require("./Images/illustration-dashboard.png")}
        alt="dash board name"
        style={{ margin: "40px auto" }}
      />
      <div className="center">
        <span className="icon">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </span>
      </div>

      <p className="copyright">Copyright Ping. All rights reserved.</p>

      <br />
    </div>
  );
}

export default App;
