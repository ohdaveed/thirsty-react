import React from "react";
import CountdownList from "../CountdownList";
import CreateCountdown from "../CreateCountdownForm";
import Timer from "../Timer";
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility
} from "semantic-ui-react";

class CountdownContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			countdowns: []
		};
	}

	componentDidMount() {
		this.getCountdowns();
	}

	addCountdown = async (e, countdownFromTheForm) => {
		e.preventDefault();
		console.log(countdownFromTheForm);

		try {
			const createdCountdownResponse = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/countdowns/",
				{
					method: "POST",
					credentials: "include",
					body: JSON.stringify(countdownFromTheForm),
					headers: {
						"Content-Type": "application/json"
					}
				}
			);

			const parsedResponse = await createdCountdownResponse.json();
			console.log(parsedResponse, "this is the response");

			this.setState({
				countdowns: [...this.state.countdowns, parsedResponse.data]
			});
		} catch (err) {
			console.log("error");
			console.log(err);
		}
	};

	getCountdowns = async () => {
		try {
			const countdowns = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/countdowns/",
				{
					credentials: "include"
				}
			);

			const parsedCountdowns = await countdowns.json();
			console.log(parsedCountdowns);

			this.setState({
				countdowns: parsedCountdowns.data
			});
		} catch (err) {
			console.log(err);
		}
	};

	deleteCountdown = async (id) => {
		console.log(id);

		const deleteCountdownResponse = await fetch(
			process.env.REACT_APP_API_URL + "/api/v1/countdowns/" + id,
			{
				method: "DELETE",
				credentials: "include"
			}
		);

		const deleteCountdownParsed = await deleteCountdownResponse.json();

		console.log(deleteCountdownParsed);

		this.setState({
			countdowns: this.state.countdowns.filter(
				(countdown) => countdown.id !== id
			)
		});
	};

	render() {
		return (
			<React.Fragment>
				<CountdownList
					countdowns={this.state.countdowns}
					deleteCountdown={this.deleteCountdown}
				/>

				<CreateCountdown addCountdown={this.addCountdown} />

				<Timer />
			</React.Fragment>
		);
	}
}

export default CountdownContainer;
