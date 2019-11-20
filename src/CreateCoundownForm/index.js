import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateCountdown extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			image: '',
			timer: '',
			type: ''
		}
	}
	handleChange = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}
	render(){
		return(
			<Segment>
				<h4>Create Countdown</h4>
				<Form>
					<Label>Name:</Label>
					<Form.Input/>
					<Label>Image:</Label>
					<Form.Input/>
					<Label>Timer:</Label>
					<Form.Input/>
					<Label>Type:</Label>
					<Form.Input/>
					<Button></Button>
					<Button type='Submit'>Create Countdown</Button>
				</Form>
			<Segment>
			)
	}
}