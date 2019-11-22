import React from "react";
import { Form, Button, Label } from "semantic-ui-react";

class LoginRegisterForm extends React.Component {
	constructor() {
		super();

		this.state = {
			password: "",
			email: "",
			action: "login"
		};
	}

	loginRegister = () => {
		if (this.state.action === "login") {
			this.props.login({
				email: this.state.email,
				password: this.state.password
			});
		} else {
			this.props.register({
				email: this.state.email,
				password: this.state.password
			});
		}
	};

	switchForm = () => {
		if (this.state.action === "login") {
			this.setState({
				action: "register"
			});
		} else {
			this.setState({
				action: "login"
			});
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.loginRegister();
	};

	render() {
		return (
			<div className="LoginRegisterForm">
				<h1 className="thirstyLogo">Thirsty</h1>
				<h4>Stay hydrated! Your personal reminder<br/>
					to water yourself and everything else.</h4>
				<Form onSubmit={this.handleSubmit}>
					<React.Fragment>
						<Label>Email:</Label>
						<Form.Input
							onChange={this.handleChange}
							type="text"
							name="email"
							value={this.state.email}
						/>
					</React.Fragment>

					<Label>Password:</Label>
					<Form.Input
						onChange={this.handleChange}
						type="password"
						name="password"
						value={this.state.password}
					/>

					<Button type="Submit">
						{this.state.action === "register"
							? "Register"
							: "Log in"}
					</Button>
				</Form>
				{this.state.action === "register" ? (
					<h3>
						Already have an account? Log in{" "}
						<span onClick={this.switchForm}>here</span>.
					</h3>
				) : (
					<h3>
						Need an account? Sign up{" "}
						<span onClick={this.switchForm}>here</span>.
					</h3>
				)}
			</div>
		);
	}
}

export default LoginRegisterForm;
