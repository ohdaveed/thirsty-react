import React, { Component } from "react";
import { Form, Button, Label, Segment } from "semantic-ui-react";

class CreateCountdown extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			image: "",
			timer: ""
		};
	}

	render() {
		return (
			<Segment>
				<h4>Create Countdown</h4>
				<Form>
					<Label>Name:</Label>
					<Form.Input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>

					<Label>Image:</Label>
					<Form.Input
						type="text"
						name="image"
						value={this.state.image}
						onChange={this.handleChange}
					/>

					<Label>Timer:</Label>
					<Form.Input
						type="text"
						name="timer"
						value={this.state.timer}
						onChange={this.handleChange}
					/>

					<Button type="Submit">Create Countdown</Button>
				</Form>
			</Segment>
		);
	}
}

export default CreateCountdown;
