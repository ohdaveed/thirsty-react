import React from "react";
import ms from "pretty-ms";

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			isOn: false,
			start: 0
		};
		this.startCountdown = this.startCountdown.bind(this);
		this.stopCountdown = this.stopCountdown.bind(this);
		this.resetCountdown = this.resetCountdown.bind(this);
	}

	componentDidMount() {
		this.setState({
			time: this.props.countdown.timer
		});
	}
	startCountdown() {
		this.setState({
			isOn: true,
			time: this.state.time,

			start: this.state.time--
		});
		this.Countdown = setInterval(() =>
			this.setState({
				time: this.state.start--
			})
		);
	}

	// now - last fed ====> how long since last fed
	// timer should show diff bt desired interval and how long since last fed

	stopCountdown() {
		this.setState({ isOn: false });
		clearInterval(this.Countdown);
	}
	resetCountdown() {
		this.setState({ time: this.props.countdown.timer, isOn: false });
	}
	render() {
		let start =
			this.state.time === 0 ? (
				<button onClick={this.startCountdown}>start</button>
			) : null;
		let stop =
			this.state.time === 0 || !this.state.isOn ? null : (
				<button onClick={this.stopCountdown}>stop</button>
			);
		let resume =
			this.state.time === 0 || this.state.isOn ? null : (
				<button onClick={this.startCountdown}>Start</button>
			);
		let reset =
			this.state.time === 0 || this.state.isOn ? null : (
				<button onClick={this.resetCountdown}>Water</button>
			);
		return (
			<div>
				<h3>Countdown: {ms(this.state.time)}</h3>
				{start}
				{resume}
				{stop}
				{reset}
			</div>
		);
	}
}

export default Timer;
