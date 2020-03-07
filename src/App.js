import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header } from "semantic-ui-react";
import "./App.css";
import LoginRegisterForm from "./LoginRegisterForm";
import CountdownContainer from "./CountdownContainer";

console.log(process.env);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      loggedInEmail: null
    };
  }

  login = async loginInfo => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/login";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(loginInfo),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const parsedLoginResponse = await response.json();
    console.log(parsedLoginResponse);

    if (parsedLoginResponse.status.code === 200) {
      this.setState({
        loggedIn: true,
        loggedInEmail: parsedLoginResponse.data.email
      });
    } else {
      console.log("Login Failed:");
      console.log(parsedLoginResponse);
    }
  };

  register = async registerInfo => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/users/register",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(registerInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response);

    const parsedRegisterResponse = await response.json();

    if (parsedRegisterResponse.status.code === 201) {
      this.setState({
        loggedIn: true,
        loggedInEmail: parsedRegisterResponse.data.email
      });
    } else {
      console.log("Register Failed:");
      console.log(parsedRegisterResponse);
    }
  };

  logout = async () => {
    console.log("log out button clicked");
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout";
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const parsedLoginResponse = await response.json();
    console.log(parsedLoginResponse);

    if (parsedLoginResponse.status.code === 200) {
      this.setState({
        loggedIn: false
      });
    } else {
      console.log("Logout Failed:");
      console.log(parsedLoginResponse);
    }
  };

  render() {
    return (
      <div className="App">
        <Header>
          {" "}
          <h1>Thirsty</h1>{" "}
        </Header>
        {this.state.loggedIn ? (
          <CountdownContainer logout={this.logout} />
        ) : (
          <LoginRegisterForm login={this.login} register={this.register} />
        )}
      </div>
    );
  }
}

export default App;
