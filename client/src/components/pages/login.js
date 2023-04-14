// // import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';
// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";

// import Auth from '../../utils/auth';

// const Login = (props) => {
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login, { error, data }] = useMutation(LOGIN_USER);

//     // update state based on form input changes
//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     // submit form
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formState);
//         try {
//             const { data } = await login({
//                 variables: { ...formState },
//             });

//             Auth.login(data.login.token);
//         } catch (e) {
//             console.error(e);
//         }

//         // clear form values
//         setFormState({
//             email: '',
//             password: '',
//         });
//     };

//     return (
//         <Form onSubmit={handleFormSubmit}>
//             <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                     type="email"
//                     name='email'
//                     placeholder="Enter email"
//                     value={formState.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                     type="password"
//                     name='password'
//                     placeholder="Password"
//                     value={formState.password}
//                     onChange={handleChange}
//                     required
//                 />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Log In
//             </Button>
//         </Form>
//     );
// }

// export default Login;
