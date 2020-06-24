import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import "./App.css";

const hats = (props) => {
	console.log(props);

	return (
		<div>
			<button onClick={() => props.history.push("/")}>home</button>
			<h1>Hats page</h1>;
		</div>
	);
};

function App() {
	return (
		<div>
			<Link to="/">Home</Link>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/hats" component={hats} />
			</Switch>
		</div>
	);
}

export default App;
