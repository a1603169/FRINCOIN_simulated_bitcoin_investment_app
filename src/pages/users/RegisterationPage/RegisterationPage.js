import classes from "./RegisterationPage.module.css";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

function RegisterationPage() {
  const [isEmailDup, setIsEmailDup] = useState(null);
  const [isNicknameDup, setIsNicknameDup] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(null);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(null);

  const emailRef = useRef("");
  const validationCodeRef = useRef("");
  const nicknameRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");
  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const handleDuplicateCheck = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!emailRegex.test(email)) {
      // console.log(email);
      alert("Please enter a valid email address.");
      setIsEmailValid(true);
      return;
    }

    // Get reqeust to the server with the email to check if the email is already registered
    // if the email is already registered, setIsEmailDup(true)
    // if the email is not registered, setIsEmailDup(false)
    axios
      .get("example.url", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          email: email,
        },
      })
      .then((res) => {
        if (res.message === "Email already registered") {
          setIsEmailDup(true);
        } else {
          setIsEmailDup(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("DUPLICATE CHECK");
  };

  const handleConfirmCodeSend = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (isEmailDup === false) {
      axios
        .post("example.url", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          params: {
            email: email,
          },
        })
        .then((res) => {
          if (res.message === "Email sent successfully") {
            setIsEmailSent(true);
          } else if (res.message === "Mail already sent to the email") {
            alert(
              "Mail already sent to the email. Please check your email and junk folder. If you didn't receive the email, please try again in a few minutes."
            );
            setIsEmailSent(true);
          } else {
            setIsEmailSent(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert(
        "Please wait a min for the email to be checked as a valid email address."
      );
      return;
    }

    // send email to the server with the email
    console.log(email, "CONFIRM CODE SEND");

    // get data details from the server
    // 1. email already registered
    // 2. mail already sent to the email
    // 3. email sent successfully
  };

  const handleConfirmCodeCheck = (e) => {
    e.preventDefault();
    const validationCode = validationCodeRef.current.value;

    // Get reqeust to the server with the email and validation code to check if the validation code is correct
    axios
      .get("example.url", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          email: emailRef.current.value,
          validationCode: validationCode,
        },
      })
      .then((res) => {
        if (res.message === "Validation code is correct") {
          setIsEmailValid(true);
        } else {
          setIsEmailValid(false);
        }
      });
    // if the validation code is correct, setIsEmailValid(true)
    // if the validation code is not correct, setIsEmailValid(false)

    console.log(validationCode, "CONFIRM CHECK");
  };

  const handleNicknameSubmit = (e) => {
    e.preventDefault();
    const nickname = nicknameRef.current.value;

    if (nickname.length < 8) {
      alert("Nickname must be at least 8 characters long.");
      return;
    } else if (nickname.length >= 16) {
      alert("Nickname must be less than 16 characters long.");
      return;
    }

    // Get reqeust to the server with the nickname to check if the nickname is already registered
    axios
      .get("example.url", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          nickname: nickname,
        },
      })
      .then((res) => {
        if (res.message === "Nickname already registered") {
          setIsNicknameDup(true);
        } else {
          setIsNicknameDup(false);
        }
      });

    // if the nickname is already registered, setIsNicknameDup(true)
    // if the nickname is not registered, setIsNicknameDup(false)

    setIsNicknameDup(true);
    console.log(nickname, "NICKNAME CHECK");
    // POST request to the server with the ID and password as the request body
  };

  const handlePasswordValidation = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    if (password.length < 8) {
      alert(
        "Password must be at least 8 characters and less than 16 characters long."
      );
      return;
    } else if (password.length >= 16) {
      alert(
        "Password must be at least 8 characters and less than 16 characters long."
      );
      return;
    }
    setIsPasswordValid(true);
  };

  const handlePasswordMatch = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    if (password !== passwordConfirm) {
      setIsPasswordMatch(false);
      return;
    }
    setIsPasswordMatch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const nickname = nicknameRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    console.log(email, nickname, password, passwordConfirm);
    if (
      !isEmailDup &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordMatch &&
      !isNicknameDup &&
      isEmailSent
    ) {
      setIsRegisterSuccess(true);
      // Success alert
      alert("Registeration Success!");
      // POST request to the server with the ID and password as the request body
      axios
        .post("example.url", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          params: {
            email: email,
            nickname: nickname,
            password: password,
          },
        })
        .then((res) => {
          console.log(res, "REGISTERATION SUCCESS");
        })
        .catch((err) => {
          console.log(err, "REGISTERATION FAIL");
        });

      // Redirect to the login page
      window.history.push("/login");
    }
  };

  if (isRegisterSuccess) {
    return (
      <div className={classes.container}>
        <h1 className={classes.title}>Registeration Success!</h1>
        <p className={classes.description}>Please login to continue.</p>
      </div>
    );
  }

  return (
    <div>
      <form className={classes.form}>
        {/* Create me a registeration form  */}
        <label className={classes.form_title} htmlFor="email">
          Email
        </label>
        {isEmailDup ? (
          <p className={classes.form_fail}>This email already exists.</p>
        ) : null}
        <input
          onBlur={handleDuplicateCheck}
          onFocus={() => setIsEmailDup(null)}
          ref={emailRef}
          type="email"
          id="email"
          className={classes.form_input}
          style={
            isEmailDup ? { border: "2px solid red", borderRadius: "5px" } : null
          }
          placeholder="Enter your email"
        />
        <div className={classes.form_btn_container}>
          <button
            onClick={handleConfirmCodeSend}
            className={classes.form_button}
            type="submit"
          >
            Send Validation Code
          </button>
        </div>
        <label className={classes.form_title} htmlFor="email">
          Email Validation Code (6 digits)
        </label>
        <input
          ref={validationCodeRef}
          maxLength={6}
          type="confirmcode"
          id="confirmcode"
          className={classes.form_input}
          placeholder="Enter your confirm codes"
        />
        <div className={classes.form_btn_container}>
          <button
            onClick={handleConfirmCodeCheck}
            className={classes.form_button}
            type="submit"
          >
            Confirm Email
          </button>
          <button className={classes.form_button} type="submit">
            Resend Code
          </button>
        </div>
        <div className={classes.form_identity}>
          <label className={classes.form_title} htmlFor="id">
            Nickname (English only)
          </label>
          {isNicknameDup ? (
            <p className={classes.form_fail}>This nickname already exists.</p>
          ) : null}
          <input
            onBlur={handleNicknameSubmit}
            onFocus={() => setIsNicknameDup(null)}
            ref={nicknameRef}
            type="text"
            id="id"
            className={classes.form_input}
            placeholder="Enter your nickname"
          />
          <label className={classes.form_title} htmlFor="password">
            Password
          </label>
          <input
            onBlur={handlePasswordValidation}
            ref={passwordRef}
            type="password"
            id="password"
            className={classes.form_input}
            placeholder="Enter your password"
          />
          <label className={classes.form_title} htmlFor="password">
            Confirm Password
          </label>
          {!isPasswordMatch ? (
            <p className={classes.form_fail}>Password does not match</p>
          ) : null}
          <input
            onBlur={handlePasswordMatch}
            onFocus={() => setIsPasswordMatch(null)}
            ref={passwordConfirmRef}
            type="password"
            id="password"
            className={classes.form_input}
            placeholder="Confirm your password"
          />
        </div>
        <button
          onClick={handleSubmit}
          className={classes.form_button}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
export default RegisterationPage;
