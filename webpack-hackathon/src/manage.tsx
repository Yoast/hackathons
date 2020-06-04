import React, { useEffect, useState } from "react";
import { Fetcher } from "./fetcher";

export function Manage( props ) {
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
		return "loading";
	}
	return (
		<div className="blablaframe">
			{body || "No body"}
		</div>
	);
}



