import React, { Component } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import Timer from "../Timer";

<<<<<<< HEAD
class UpdateColor extends Component {
	constructor() {
		super()

		this.state = {
			timer: ""
=======
function CountdownList(props) {
	const countdowns = props.countdowns.map((countdown) => {
		let color;
		// greater than 1 hour
		if (countdown.timer >= 3600000) {
			color = "green";

			// between 59 mins and 10 mins
		} else if (countdown.timer < 3600000 && countdown.timer >= 600000) {
			color = "yellow";

			// 600000 is equal to 10 mins
		} else if (countdown.timer < 600000) {
			color = "red";
>>>>>>> f47db05a6ed22b555e46d423ad3bde6bc3856c9f
		}
	}
	componentDidMount(){
		this.getCountdowns();
	}
	countdownList = async (e) = {
		const countdowns = props.countdowns.map((countdown) => {
			let color;
			if (countdown.timer >= 3600000) {
				color = "green";
			} else if (countdown.timer < 3600000 && countdown.timer >= 600000) {
				color = "yellow";
			} else if (countdown.timer < 600000) {
				color = "red";
			}
	}

	render(){
		return (
			<Card key={countdown.id} color={color}>
				<Image src={countdown.image} size="small" wrapped ui={false} />
				<Card.Content color="red">
					<Card.Header>{countdown.name}</Card.Header>
					<Card.Description>{countdown.timer}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button onClick={() => props.deleteCountdown(countdown.id)}>
						Delete
					</Button>
					<Button onClick={() => props.editCountdown(countdown.id)}>
						Edit
					</Button>
					<Timer countdown={countdown} />
				</Card.Content>
			</Card>
			);
		});
			<Card.Group>{ countdowns }</Card.Group>
	}
}
}
// 	updateColor = async (e) => {
// 		e.preventDefault()
// 		let color
// 		const countdowns = this.countdowns.map(countdown) => {
// 				if (countdown.timer >= 3600000) {
// 					color = "green";
// 				} else if (countdown.timer < 3600000 && countdown.timer >= 600000) {
// 					color = "yellow";
// 				} else if (countdown.timer < 600000) {
// 					color = "red";
// 				}
// 			}
// 		}





export default CountdownList;
