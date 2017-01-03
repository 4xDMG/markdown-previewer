import React from "react";
import marked from "marked";

const DisplayArea = (rawMarkdown) => {

	const markdownTranslator = (rawMarkdown) => {
		let markdown = marked(rawMarkdown.markdown.plainText)
		return {__html: markdown }
	}

	return <span dangerouslySetInnerHTML={ markdownTranslator(rawMarkdown) } />;
}

export default DisplayArea;