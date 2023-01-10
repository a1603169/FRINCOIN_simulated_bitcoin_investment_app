import { useState } from "react";
import axios from "axios";
import classes from "./LoginPage.module.css";

function LoginPage() {
  // Declare state variables for the ID and password
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a POST request to the server with the ID and password as the request body
    axios
      .post("/login", { id, password })
      .then((response) => {
        // Handle the server's response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that may occur
        console.error(error);
      });
  };

  // 나중에 클라스 입혀놔야함!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className={classes.form_container}>
      <form classesName={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          style={{
            boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.75)",
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.75)",
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
