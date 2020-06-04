import apiFetch from "@wordpress/api-fetch";

export class Fetcher {
	public async fetchThing(): Promise<string> {
		await this.timeout( 1500 );
		try {
			return await apiFetch( { path: "http://my.yoast.test:3000/api/customers/nonce" } );
		} catch ( e ) {
			console.log(e );
			return "Failed fetching. Error: " + e.message;
		}
	}

	public async timeout( ms ) {
		return new Promise( resolve => setTimeout( resolve, ms ) );
	}
}
