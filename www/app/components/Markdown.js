import React from "react";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";

const md = new Remarkable;
md.set({
  	html: true,
  	breaks: true,
	highlight: (str, lang) => {
	    if (lang && hljs.getLanguage(lang)) try {
	        return hljs.highlight(lang, str).value;
	    } catch (err) {}
	    try {
	      	return hljs.highlightAuto(str).value;
	    } catch (err) {}
	    return "";
	}
});

class Markdown extends React.Component {
	render() {
		return (
			<div className="markdown" dangerouslySetInnerHTML={{ __html: md.render(this.props.children) }} />
		);
	}
}

export default Markdown;
