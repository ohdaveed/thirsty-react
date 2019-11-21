import React from "react";
import CountdownList from "../CountdownList";

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

	render() {
		return <CountdownList countdowns={this.state.countdowns} />;
	}
}

export default CountdownContainer;
