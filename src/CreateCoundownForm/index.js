import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateCountdown extends Component {
	constructor(){
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
				<Form onSubmit={(e) => this.props.addCountDown(e, this.state)}>
					<Label>Name:</Label>
					<Form.Input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
					<Label>Image:</Label>
					<Form.Input type='text' name='image' value={this.state.image} onChange={this.handleChange} />
					<Label>Timer:</Label>
					<Form.Input type='text' name='timer' value={this.state.timer} onChange={this.handleChange} />
					<Label>Type:</Label>
					<Form.Input type='text' name='type' value={this.state.type} onChange={this.handleChange} />
					<Button></Button>
					<Button type='Submit'>Create Countdown</Button>
				</Form>
			<Segment>
			)
	}
}


