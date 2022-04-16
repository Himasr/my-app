import React, { useState } from "react";

import ReactDOM from "react-dom";

import "./App.css";
//import App from './../../project3/src/App';

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "eve.holt@reqres.in",
      password: "5cityslicka"
    },
    {
      
      username: "eve.holt@reqres.in",
      password: "5cityslicka"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit"></input> 
        </div><br></br>
        <div> 
        <label class="container">
  <input type="checkbox" />RememberPassword
  <span class="checkmark"></span>
</label>
       
        <label className="forgot">ForgotPassword? </label>
        </div>
      </form>
    </div>
  );

  return (
    
    <div className="app">
    
      
    <div class="topnav">
  <a class="active" href="#home"><h3>VOUCH DIGITAL</h3></a>
  
  <a href="#news">Login</a>
  <div/></div>
     
      <div className="login-form">
        <div className="title"><h1>Welcome Back</h1></div><div className="subtitle"><h2>My Website</h2></div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}export default App;
{

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
};