import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import Timer from "../Timer";

function CountdownList(props) {
	const countdowns = props.countdowns.map((countdown) => {
		let color;
		if (countdown.timer >= 60000) {
			color = "green";
		} else if (countdown.timer < 45000 && countdown.timer >= 30000) {
			color = "yellow";
		} else if (countdown.timer < 30000) {
			color = "red";
		}


		return (
			<Card key={countdown.id} color={color}>
				<Image src={countdown.image} size="small" wrapped ui={false} />
				<Card.Content color={color}>
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
	return <Card.Group>{countdowns}</Card.Group>;
}
// export default CountdownList;

// class CountdownList extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			timer: []
// 		}
// 	}
// 	componentDidMount(){
// 		this.countdown();
// 	}

// 	countdown = () => {
// 		try{
// 			const countdown = this.props.countdowns.map((countdown) => {
// 				let color;
// 				if (countdown.timer >= 3600000) {
// 					color = "green";
// 				} else if (countdown.timer < 3600000 && countdown.timer >= 600000) {
// 					color = "yellow";
// 				} else if (countdown.timer < 600000) {
// 					color = "red";
// 				}
// 			})
// 			this.setState({
// 				timer: countdown
// 			})
// 		} catch(err) {
// 			console.log('This is the error');
// 			console.log(err);
// 		}
// 	}

// 	mapTimers = () => {

// 	}

// 	render(){
// 		return (
// 			<Card key={this.countdown.id} color={this.countdown.color}>
// 				<Image src={this.countdown.image} size="small" wrapped ui={false} />
// 				<Card.Content color={this.countdown.color}>
// 					<Card.Header>{this.countdown.name}</Card.Header>
// 					<Card.Description>{this.countdown.timer}</Card.Description>
// 				</Card.Content>
// 				<Card.Content extra>
// 					<Button onClick={() => this.props.deleteCountdown(this.countdown.id)}>
// 						Delete
// 					</Button>
// 					<Button onClick={() => this.props.editCountdown(this.countdown.id)}>
// 						Edit
// 					</Button>
// 					<Timer timer={this.state.timer} />
// 					{ this.mapTimers }
// 				</Card.Content>
// 			</Card>
// 				)
// 		return(
// 			<Card.Group>
// 				countdown
// 			</Card.Group>
// 			)
// 		}
// }

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
