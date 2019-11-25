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

	startCountdown = () => {
		// setInterval	

			// time_since_last_watering = Date.now - last watered

			// timeLeft = total_time_between_waterings - time_since_last_watering

			// set state -- update timeleft

	}


	

	waterPlant = () => {
		// update last_watered in db
			// use route in back end

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
