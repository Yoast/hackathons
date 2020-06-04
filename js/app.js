import { toUpper } from "lodash";
import PrimaryButton from "./components/button";
import React from "react";
import ReactDOM from "react-dom";

console.log( "Great succes!" );

const targetParagraphs = document.querySelectorAll( "#aida-maarten" );

console.log( targetParagraphs );

targetParagraphs.forEach( paragraph => paragraph.textContent = toUpper( "We are the best programmers!" ) );

const ourFunction = function () { alert( toUpper( "derp" ) ) };

window.addEventListener( "DOMContentLoaded", () => {
	const headerRegion = document.querySelector( ".edit-post-header" );
	if ( ! headerRegion ) {
		return;
	}

	const ourButton = <PrimaryButton onClick={ ourFunction }>Click me!</PrimaryButton>;
	
	ReactDOM.render(
		ourButton,
		document.getElementsByClassName( "edit-post-header" )
	  );
	console.log( headerRegion || "Sad, did not find" );
	headerRegion.style[ "background-color" ] = "red";
	console.log( headerRegion.children );
} )
