import React from "react";
import { Card, Button } from "semantic-ui-react";
function CountdownList(props) {
	const countdowns = props.countdowns.map((countdown) => {
		return (
			<Card key={countdown.id}>
				<Card.Content>
					<Card.Header>{countdown.name}</Card.Header>
					<Card.Description>{countdown.timer}</Card.Description>
				</Card.Content>
				<Card.Content>
					<Button onClick={() => props.deleteCountdown(countdown.id)}>
						Delete Countdown
					</Button>
					<Button>Edit Countdown</Button>
				</Card.Content>
			</Card>
		);
	});
	return <Card.Group>{countdowns}</Card.Group>;
}
export default CountdownList;
