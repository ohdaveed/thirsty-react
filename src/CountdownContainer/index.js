import React from "react";
import { Button } from "semantic-ui-react";
import CountdownList from "../CountdownList";
import CreateCountdown from "../CreateCountdownForm";
import EditCountdownModal from "../EditCountdownModal";

class CountdownContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			countdowns: [],
			editModalOpen: false,
			countdownToEdit: {
				name: "",
				image: "",
				timer: ""
			}
		}
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
	}

	deleteCountdown = async (id) => {
		// console.log(id);
		const deleteCountdownResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/countdowns/" + id, {
				method: "DELETE",
				credentials: "include"
		})

		const deleteCountdownParsed = await deleteCountdownResponse.json();

		console.log(deleteCountdownParsed);

		this.setState({
			countdowns: this.state.countdowns.filter(
				(countdown) => countdown.id !== id
			)
		})
	}

	editCountdown = (idOfCountdownToEdit) => {
		const countdownToEdit = this.state.countdowns.find(
			(countdown) => countdown.id === idOfCountdownToEdit
		);
		this.setState({
			editModalOpen: true,
			countdownToEdit: {
				...countdownToEdit
			}
		})
	}

	handleEditChange = (e) => {
		this.setState({
			countdownToEdit: {
				...this.state.countdownToEdit,
				[e.target.name]: e.target.value
			}
		})
	}

	updateCountdown = async (e) => {
		e.preventDefault();

		try {
			const url =
				process.env.REACT_APP_API_URL +
				"/api/v1/countdowns/" +
				this.state.countdownToEdit.id;

			const updateResponse = await fetch(url, {
				method: "PUT",
				credentials: "include",
				body: JSON.stringify(this.state.countdownToEdit),
				headers: {
					"Content-Type": "application/json"
				}
			});

			const updateResponseParsed = await updateResponse.json();

			const newCountdownArrayWithUpdate = this.state.countdowns.map(
				(countdown) => {
					if (countdown.id === updateResponseParsed.data.id) {
						countdown = updateResponseParsed.data;
					}
					return countdown;
				}
			)
				this.setState({
					countdowns: newCountdownArrayWithUpdate
				})

			this.closeModal();
		} catch (err) {
			console.log(err);
		}
	}

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('getDerivedStateFromProps is being called');
	// 	console.log('props' , props);
	// 	console.log('state' , state);
	// }

	closeModal = () => {
		this.setState({
			editModalOpen: false
		});
	};

	logout = () => {
		console.log("log out button clicked");
		this.props.logout();
	};

	render() {
		return (
			<React.Fragment>
				<h2>Thirsty</h2>
				<Button onClick={this.logout}>Log Out</Button>
				<CountdownList
					countdowns={this.state.countdowns}
					deleteCountdown={this.deleteCountdown}
					editCountdown={this.editCountdown}
				/>

				<EditCountdownModal
					open={this.state.editModalOpen}
					updateCountdown={this.updateCountdown}
					countdownToEdit={this.state.countdownToEdit}
					closeModal={this.closeModal}
					handleEditChange={this.handleEditChange}
				/>

				<CreateCountdown addCountdown={this.addCountdown} />
			</React.Fragment>
		);
	}
}

export default CountdownContainer;
