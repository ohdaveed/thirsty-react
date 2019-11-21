import React from "react";
import CountdownList from "../CountdownList";
import CreateCountdownForm from "../CreateCountdownForm";

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

				<CreateCountdownForm />
			</React.Fragment>
		);
	}
}

export default CountdownContainer;
