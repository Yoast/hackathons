import { Loader } from "@yoast/components";
import React, { useEffect, useState } from "react";
import { Fetcher } from "./fetcher";
import "./style.css";

export function App( props ) {
	const [ loading, setLoading ] = useState( false );
	const [ body, setBody ] = useState( null );

	const bla = new Fetcher();

	useEffect( () => {
		async function fetch() {
			setLoading( true );
			const resp = await bla.fetchThing();
			setBody( JSON.stringify( resp, null, 4 ) );
			setLoading( false );
		}

		fetch();
	}, [ props ] );

	if ( loading ) {
		return <Loader />;
	}
	return (
		<div className="blablaframe">
			{body || "No body"}
		</div>
	);
}



