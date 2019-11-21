import React from "react";
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

	editCountdown = (idOfCountdownToEdit) => {
		const countdownToEdit = this.state.countdowns.find(
			(countdown) => countdown.id === idOfCountdownToEdit
		);
		this.setState({
			editModelOpen: true,
			countdownToEdit: {
				...countdownToEdit
			}
		});
	};

	handleEditChange = (e) => {
		this.setState({
			countdownToEdit: {
				...this.state.countdownToEdit,
				[e.target.name]: e.target.value
			}
		});
	};

	closeModal = () => {
		this.setState({
			editModalOpen: false
		});
	};

	render() {
		return (
			<React.Fragment>
				<h2>Countdowns</h2>
				<CountdownList
					countdowns={this.state.countdowns}
					deleteCountdown={this.deleteCountdown}
					editCountdown={this.editCountdown}
				/>

				<EditCountdownModal
					open={this.state.editModelOpen}
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
