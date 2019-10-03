import React from 'react';
import logo from './logo.svg';
import './App.css';

function bla() {
	const Http = new XMLHttpRequest();
	const url='http://localhost:3000/person';
	let persons;

	Http.onreadystatechange = () => {
		if(Http.readyState===4 && Http.status===200) {
			persons = ( JSON.parse( Http.responseText) );
			document.getElementById("textbox").innerHTML = Http.responseText;
		}
	};
	Http.open( "GET", url);
	Http.send();
}


function App() {
	bla();
  return (
    <div className="App">
	    <div id="textbox"><p>hallo manuel</p></div>
    </div>
  );
}

export default App;
