import React from "react";
import ms from "pretty-ms";

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			timer: 0,
			timeLeft: 0,
			watered: false
		};
	}

	componentDidMount() {
		this.startCountdown();
	}

	startCountdown = async () => {
		console.log("we are counting down");
		// setInterval
		const url =
			process.env.REACT_APP_API_URL +
			"/api/v1/countdowns/" +
			this.props.countdown.id;
		const lastWatered = await fetch(url, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			}
		});
		let parsedResponse = await lastWatered.json();
		console.log(parsedResponse);

		setInterval(async () => {
			// if watered is true, query for the updated countdown to get the new last_watered
			if (this.state.watered === true) {
				const urlWatered =
					process.env.REACT_APP_API_URL +
					"/api/v1/countdowns/" +
					this.props.countdown.id;
				const lastWateredWatered = await fetch(url, {
					method: "GET",
					credentials: "include",
					headers: {
						"Content-Type": "application/json"
					}
				});

				this.setState({
					watered: false
				});

				parsedResponse = await lastWateredWatered.json();
				console.log(parsedResponse);
			}

			const dateNow = Date.now() / 1000;
			const dateNowInt = parseInt(dateNow.toFixed(0));

			const timeSinceLastWatering =
				dateNowInt - parsedResponse.data.last_watered;
			// timeLeft = total_time_between_waterings - time_since_last_watering
			const timeLeft =
				(parsedResponse.data.timer - timeSinceLastWatering) * 1000;
			console.log("this is timeSinceLastWatering");
			console.log(timeSinceLastWatering);
			console.log("this is timeLeft");
			console.log(timeLeft);
			// set state -- update timeleft
			this.setState({
				timeLeft: timeLeft
			});
		}, 1000);
	};

	waterPlant = async () => {
		console.log("we are counting down");
		// setInterval
		const url =
			process.env.REACT_APP_API_URL +
			"/api/v1/countdowns/updatetime/" +
			this.props.countdown.id;
		const lastWatered = await fetch(url, {
			method: "PUT",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const parsedResponse = await lastWatered.json();
		console.log(parsedResponse);

		this.setState({
			watered: true
		});
	};

	render() {
		return (
			<div>
				<h3>Countdown: {ms(this.state.timeLeft)}</h3>
				<h3>Countdown: {ms(this.state.timer)}</h3>
				<button onClick={this.waterPlant}>Water</button>
			</div>
		);
	}
}

export default Timer;
