import { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

const Login = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmitForm = async e => {
		e.preventDefault();

		const userInfo = {
			username,
			email,
			password,
		};

		console.log(userInfo);

		try {
			const response = await fetch("https://students-care.onrender.com/student/register/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInfo),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("Registration successful:", data);
			} else {
				const errorData = await response.json();
				console.error("Registration failed:", errorData);
			}
		} catch (error) {
			console.error("Error during registration:", error);
		}
	};

	return (
		<div className='w-50 mx-auto mt-5 bg-black text-white rounded-3 p-5'>
			<form onSubmit={handleSubmitForm}>
				<Form.Group as={Col} md='12' className='mb-2' controlId='validationFormikUsername'>
					<Form.Label>Username</Form.Label>
					<InputGroup hasValidation>
						<InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
						<Form.Control
							type='text'
							placeholder='Username'
							aria-describedby='inputGroupPrepend'
							name='username'
							onChange={e => setUsername(e.target.value)}
						/>
					</InputGroup>
				</Form.Group>

				<Form.Group as={Col} md='12' className='mb-2' controlId='validationFormikUsername'>
					<Form.Label>Email Address</Form.Label>
					<InputGroup hasValidation>
						<Form.Control
							type='email'
							placeholder='Email Address'
							aria-describedby='inputGroupPrepend'
							name='email'
							onChange={e => setEmail(e.target.value)}
						/>
					</InputGroup>
				</Form.Group>
				<Form.Group as={Col} md='12' className='mb-2' controlId='validationFormikUsername'>
					<Form.Label>Password</Form.Label>
					<InputGroup hasValidation>
						<Form.Control
							type='password'
							placeholder='Password'
							aria-describedby='inputGroupPrepend'
							name='password'
							onChange={e => setPassword(e.target.value)}
						/>
					</InputGroup>
				</Form.Group>
				<Button className='mt-2' type='submit'>
					Login
				</Button>
			</form>
		</div>
	);
};

export default Login;
