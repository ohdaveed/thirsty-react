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
			loggedInEmail: null // you might want to track some info here
			// helpful for "logged in as reuben@reuben.com"
		};
	}

	login = async (loginInfo) => {
		const url = process.env.REACT_APP_API_URL + "/api/v1/users/login";
		console.log(url);
		const response = await fetch(url, {
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
		});

		const parsedLoginResponse = await response.json();
		console.log(parsedLoginResponse);

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
			// in the express unit, the browser would automatically send the cookie
			// with each request (GET and POST), but fetch will not.
			// adding this line will make fetch send the cookie
			// if you forget this you will not be logged in for that request
			credentials: "include",
			body: JSON.stringify(),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const parsedLoginResponse = await response.json();
		console.log(parsedLoginResponse);

		// want to change the screen in the app when we know the login was good
		// and show dog container
		if (parsedLoginResponse.status.code === 200) {
			this.setState({
				loggedIn: false
			});
		} else {
			// hungry for more/in your project -- show a message to the user, or maybe
			// show the message from the response to the user,
			// clear the login form, if snazzy, highlight in red?
			// so they can try again
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
					<h4>
						Stay hydrated! Your personal reminder
						<br />
						to water yourself and everything else.
					</h4>
				</Header>
				{this.state.loggedIn ? (
					<CountdownContainer logout={this.logout} />
				) : (
					<LoginRegisterForm
						login={this.login}
						register={this.register}
					/>
				)}
			</div>
		);
	}
}

export default App;
