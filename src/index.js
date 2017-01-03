import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DisplayArea from './components/DisplayArea';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {plainText: "Type your *markdown* here!"};
	}

	markdownTextChange(rawMarkdown) {
		this.setState({ plainText: rawMarkdown })
	}

	render() {
		return (
				<div>
					<h1>Markdown Previewer</h1>
					<div className="row">
						<div className="col-md-6">
							<textarea rows="10" cols="40" onChange={ event => this.markdownTextChange(event.target.value) } defaultValue = "Type your *markdown* here!"></textarea>
						</div>
						<div className="col-md-6">
							<DisplayArea markdown = { this.state } />
						</div>
					</div>
				</div>
			);
	}
};

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);