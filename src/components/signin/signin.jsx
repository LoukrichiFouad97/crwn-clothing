import React from "react";
import { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custome-button/custom-button.jsx";
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";
import "./signin.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (e) {
			console.log(e);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Log in with your email and password</span>
				<form>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						label="email"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
