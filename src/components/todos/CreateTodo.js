import React, { Component } from "react";

class CreateTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ text: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.store.dispatch({
			type: "ADD_TODO",
			todo: this.state
		});
		this.setState({ text: "" });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>add todo</label>
						<input
							type="text"
							onChange={this.handleChange}
							value={this.state.text}
						/>
					</p>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default CreateTodo;
