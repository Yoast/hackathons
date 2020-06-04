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
	
	console.log( headerRegion || "Sad, did not find" );
	
	const target = document.createElement( "span" );
	target.classList.add( "react-goes-here" );
	headerRegion.style[ "background-color" ] = "red";
	headerRegion.appendChild( target );
	ReactDOM.render(
		ourButton,
		document.getElementsByClassName( "react-goes-here" )[ 0 ]
	);
	console.log( headerRegion.children );
} )
