import React from "react";
import { Component } from "react";
import FormInput from "../form-input/form-input";
import "./signin.scss";
import CustomButton from "../custome-button/custom-button.jsx";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
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

					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
