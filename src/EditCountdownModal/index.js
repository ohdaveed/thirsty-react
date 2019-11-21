import React from "react";
import { Form, Button, Label, Header, Modal } from "semantic-ui-react";

function EditCountdownModal(props) {
	return (
		<Modal open={props.open} closeIcon onClose={props.closeModal}>
			<Header>Edit Countdown</Header>
			<Modal.Content>
				<Form onSubmit={props.updateCountdown}>
					<Label> Name: </Label>
					<Form.Input
						type="text"
						name="name"
						value={props.countdownToEdit.name}
						onChange={props.handleEditChange}
					/>
					<Label> Image: </Label>
					<Form.Input
						type="text"
						name="image"
						value={props.countdownToEdit.image}
						onChange={props.handleEditChange}
					/>
					<Label> Timer: </Label>
					<Form.Input
						type="text"
						name="timer"
						value={props.countdownToEdit.timer}
						onChange={props.handleEditChange}
					/>

					<Modal.Actions>
						<Button color="green" type="submit">
							Update Countdown
						</Button>
					</Modal.Actions>
				</Form>
			</Modal.Content>
		</Modal>
	);
}

export default EditCountdownModal;
