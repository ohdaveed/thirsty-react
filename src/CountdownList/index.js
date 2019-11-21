import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import Timer from "../Timer";

function CountdownList(props) {
	const countdowns = props.countdowns.map((countdown) => {
		return (
			<Card key={countdown.id}>
				<Image src={countdown.image} size="small" wrapped ui={false} />
				<Card.Content>
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
					<Timer />
				</Card.Content>
			</Card>
		);
	});
	return <Card.Group>{countdowns}</Card.Group>;
}
export default CountdownList;
