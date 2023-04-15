import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Signup = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [addUser, { error, data }] = useMutation(ADD_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { username, value } = event.target;

		setFormState({
			...formState,
			[username]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);

		try {
			const { data } = await addUser({
				variables: { ...formState },
			});

			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<Form onSubmit={handleFormSubmit}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Username"
						name="username"
						value={formState.username}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						placeholder="Enter email"
						name="email"
						type="email"
						value={formState.email}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						type="password"
						placeholder="Password"
						value={formState.password}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Sign In
				</Button>
			</Form>
		</>
	);
};

export default Signup;
