import React from "react";
import ms from "pretty-ms";

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			timeLeft: 0,
		};

	}

	componentDidMount() {
		this.startCountdown()
	}

	startCountdown = async () => {
		console.log("we are counting down");
		// setInterval
		const url = process.env.REACT_APP_API_URL + '/api/v1/countdowns/updatetime/' + this.props.countdown.id
		const lastWatered = await fetch(url, {
			method: 'PUT',
			credentials: 'include',
			body: JSON.stringify(this.state.timeLeft),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedResponse = await lastWatered.json();
		console.log(parsedResponse);



		setInterval(() => {

			const dateNow = Date.now() / 1000
			const dateNowInt = parseInt(dateNow.toFixed(0))

			const timeSinceLastWatering = dateNowInt - parsedResponse.data.last_watered
			// timeLeft = total_time_between_waterings - time_since_last_watering
			const timeLeft = (parsedResponse.data.timer - timeSinceLastWatering) * 1000
			console.log("this is timeSinceLastWatering")
			console.log(timeSinceLastWatering);
			console.log("this is timeLeft");
			console.log(timeLeft);
			// set state -- update timeleft
			this.setState({
				timeLeft: timeLeft
			})
				
		}, 1000)
	}

// THIS IS MVP!!!!!
	waterPlant = (e) => {
		if (this.state.timeLeft !== this.props.countdown.timer){
			this.state.timer.clearInterval() && this.startCountdown()
		}
	}


	render() {
		return (
			<div>
				<h3>Countdown: {ms(this.state.timeLeft)}</h3>
				<button onClick={this.waterPlant}>Water</button>
			</div>
		);
	}
}

export default Timer;
