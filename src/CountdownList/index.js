import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import Timer from "../Timer";

function CountdownList(props) {
	const countdowns = props.countdowns.map((countdown) => {
		let color;
		if (countdown.timer >= 5000) {
			color = "green";
		} else if (countdown.timer < 3500 && countdown.timer >= 2500) {
			color = "yellow";
		} else if (countdown.timer < 2500) {
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

export default CountdownList;
