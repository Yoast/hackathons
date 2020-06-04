import React from "react";
import ReactDOM from "react-dom";
import kirbyDance from "kirby-dance";

import { Input, Label, Button } from "@yoast/components";

import "./style.css";

console.log( kirbyDance( 11 ) );

function render() {
	return (
		<form>
			<div className="wpseo_content_wrapper">
				<Label for='discover-input' className='textinput'>How did you discover our plugin?</Label>
				<Input className='textinput' name='discover-input'/>
			</div>
			<div className="wpseo_content_wrapper">
				<Label for='free-or-premium-input' className='textinput'>Do you use the free or the premium version
					of Yoast SEO?</Label>
				<Input className='textinput' name='free-or-premium-input'/>
			</div>
			<Button type='submit'>Submit</Button>
		</form>
	);
}

ReactDOM.render(
	render(),
	document.getElementById( "app" )
);

