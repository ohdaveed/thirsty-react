import React, { Component } from 'react';


class CountdownContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			countdowns: [],
			// this will keep track of which countdown we want to edit
			editModalOpen: false,
			// this data will be what we are editing with the form in the modal
			countdownToEdit: {
				name: '',
				image: '',
				timer: '',
				type: ''
			}
		}
	}
	componentDidMount(){
		this.getCountDowns();
	}
	getCountDowns = async () => {
		try {
			// process.env allows us to access our environment variable
			const countdowns = await fetch(process.env.REACT_APP_API_URL + '/api/v1/countdowns/', {
				credentials: 'include' // with this you must manually send the cookie everytime in order to stay logged in
			});
			const parsedCountdowns = await countdowns.json();
			console.log(parsedCountdowns);

			this.setState({
				countdowns: parsedCountdowns.data // array from flask
			})
		}
		catch (err) {
			console.log(err)
		}
	}

	addCountdown = async (e, countdownFromTheForm) => {
		e.preventDefault();
		// post request
		try {
			// we have to send JSON
			// createdCountdown variable will store the response from the express API
			const createdCountdownResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/countdowns/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(countdownFromTheForm),
				headers: {
					'Content-Type': 'applicatioin/json'
				}
			});
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

	render(){
		return (


		)
	}
}

export default CountdownContainer;