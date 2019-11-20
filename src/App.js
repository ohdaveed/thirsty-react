import React from "react";
import "./App.css";
<<<<<<< HEAD

import LoginRegisterForm from "./LoginRegisterForm";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			loggedIn: false,
			loggedInUsername: null // you might want to track some info here
			// helpful for "logged in as reuben@reuben.com"
		};
	}

	login = async (loginInfo) => {
		const response = await fetch(
			process.env.REACT_APP_API_URL + "/api/v1/users/login",
			{
				method: "POST",
				// in the express unit, the browser would automatically send the cookie
				// with each request (GET and POST), but fetch will not.
				// adding this line will make fetch send the cookie
				// if you forget this you will not be logged in for that request
				credentials: "include",
				body: JSON.stringify(loginInfo),
				headers: {
					"Content-Type": "application/json"
				}
			}
		);

		console.log(response);

		const parsedLoginResponse = await response.json();

		// want to change the screen in the app when we know the login was good
		// and show dog container
		if (parsedLoginResponse.status.code === 200) {
			this.setState({
				loggedIn: true,
				loggedInEmail: parsedLoginResponse.data.email
			});
		} else {
			// hungry for more/in your project -- show a message to the user, or maybe
			// show the message from the response to the user,
			// clear the login form, if snazzy, highlight in red?
			// so they can try again
			console.log("Login Failed:");
			console.log(parsedLoginResponse);
		}
	};

	register = async (registerInfo) => {
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

	render() {
		return (
			<div className="App">
				<LoginRegisterForm
					login={this.login}
					register={this.register}
				/>
			</div>
		);
	}
=======
import CoundownContainer from './CoundownContainer'
import LoginRegisterForm from './LoginRegisterForm'

// D4S1
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // loggedIn: false,
      // loggedInUserEmail: null
    }
  }

  }
  render(){
    return(
        <div className="App">
          {
            // this.state.loggedIn
            // ?
            <CoundownContainer />
            // :
            // <LoginRegisterForm login={this.login} register={this.register}/>
          }
        </div>
      );
  }
>>>>>>> 422fe4cf5a5f5ff1a718b4c563a171d57028a227
}

export default App;
