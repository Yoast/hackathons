import _ from 'lodash';
import { Component, Fragment } from '@wordpress/element';
import ReactDOM from 'react-dom';
import { ButtonSection } from "yoast-components";

import styles from "../css/ei-to-ij.css";


function changeEiToIj( text ) {
	return _.replace(text, /ei/g, 'ij');
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
			outputText: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({inputText: event.target.value, outputText:changeEiToIj(event.target.value)});
	}

	render() {
		return (
			<Fragment>
				{/*<ButtonSection*/}
					{/*id={ "yoast-snippet-editor-sidebar" }*/}
					{/*title={ 'Hoi' }*/}
					{/*suffixIcon={ { size: "20px", icon: "pencil-square" } }*/}
					{/*hasSeparator={ true }*/}
					{/*onClick={ () => {} }*/}
					{/*{ ...this.props }*/}
				{/*/>*/}
				<input className={styles.inputFields} value={this.state.inputText} onChange={this.handleChange}></input>
				<input className={styles.inputFields} value={this.state.outputText}></input>
			</Fragment>
		);
	}
}





ReactDOM.render(<App/>, document.getElementById( "wpbody-content" ) );
