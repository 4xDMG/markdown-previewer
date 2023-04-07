import React, { SyntheticEvent, useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
	const [parsedMarkdown, setParsedMarkdown] = useState<string>("");

	const onChange = (event: SyntheticEvent) => {
		const target = event.target as HTMLTextAreaElement;

		setParsedMarkdown(marked.parse(target.value));
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Markdown Previewer</h1>
			</header>
			<main>
				<section>
					<textarea data-testid="input__markdown" onChange={onChange} />
				</section>
				<section data-testid="ouput__markdown" dangerouslySetInnerHTML={{ __html: parsedMarkdown }}></section>
			</main>
		</div>
	);
}

export default App;
