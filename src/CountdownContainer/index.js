<<<<<<< HEAD
import React, { Component } from 'react';
import CountdownList from '../CountdownList';
import createdCountdown from '../CreatedCountdown';
import EditCountdown from '../EditCountdownModal';
import { Grid } from 'semantic-ui-react';
=======
import React, { Component } from "react";
>>>>>>> 513453a97a1d20a2abc39c6b5c8d99fd09e6cebb

class CountdownContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countdowns: [],
			// this will keep track of which countdown we want to edit
			editModalOpen: false,
			// this data will be what we are editing with the form in the modal
			countdownToEdit: {
				name: "",
				image: "",
				timer: "",
				type: ""
			}
		};
	}
	componentDidMount() {
		this.getCountDowns();
	}

	getCountDowns = async () => {
		try {
			// process.env allows us to access our environment variable
			const countdowns = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/countdowns/",
				{
					credentials: "include" // with this you must manually send the cookie everytime in order to stay logged in
				}
			);
			const parsedCountdowns = await countdowns.json();
			console.log(parsedCountdowns);

			this.setState({
				countdowns: parsedCountdowns.data // array from flask
			});
		} catch (err) {
			console.log(err);
		}
	};

	addCountdown = async (e, countdownFromTheForm) => {
		e.preventDefault();
		console.log(countdownFromTheForm);
		// post request
		try {
			// we have to send JSON
<<<<<<< HEAD
			// createdCountdown variable will store the response from the express API
			const createdCountdownResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/countdowns/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(countdownFromTheForm),
				headers: {
					'Content-Type': 'applicatioin/json'
=======
			// createdCountdown
			const createdCountdownRequest = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/countdowns/",
				{
					method: "POST",
					credentials: "include",
					body: JSON.stringify(countdownFromTheForm),
					headers: {
						"Content-Type": "applicatioin/json"
					}
>>>>>>> 513453a97a1d20a2abc39c6b5c8d99fd09e6cebb
				}
			);

			const parsedResponse = await createdCountdownRequest.json();
			console.log(parsedResponse, "this is response");

			this.set({
				countdowns: [...this.state.countdowns, parsedResponse.data]
			});
<<<<<<< HEAD
			const parsedResponse = await createdCountdownResponse.json();
			console.log(parsedResponse, ' this is a response');

			// we are emptying all the countdowns that are living in state into a new array,
			// and then adding the countdown we just reated to the end of it
			// the new countdown which is called parsedResponse.data
			this.setState({countdowns: [...this.state.countdowns, parsedResponse.data]})

		}
		catch (err) {
			console.log('error');
			console.log(err)
		}
		// request address will start with 'http://localhost:9000'
		// because after we create it we want to add it to the countdowns array
	}
=======
		} catch (err) {
			console.log("error");
			console.log(err);
		}
	};
>>>>>>> 513453a97a1d20a2abc39c6b5c8d99fd09e6cebb

	render() {
		return (
<<<<<<< HEAD
			<Grid>
				<Grid.Row>
				<Grid.Column>
					<CountdownList
						// countdowns={this.state.countdowns}
						// deleteCountdown={this.deleteCountdown}
						// editCountdown={this.editCountdown}
					/>
				</Grid.Column>
				<Grid.Column>
					<CreatedCountdown addCountdown={this.addCountdown} />
				</Grid.Column>
				</Grid.Row>

			</Grid>
		)
=======
			<React.Fragment>
				<h2>Countdowns</h2>
			</React.Fragment>
		);
>>>>>>> 513453a97a1d20a2abc39c6b5c8d99fd09e6cebb
	}
}

export default CountdownContainer;
