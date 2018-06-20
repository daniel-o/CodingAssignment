export class EventController {
	buildQueryParams( obj ) {
		return "?" + Object.entries( obj )
			.map( field => field.join( "=" ) )
			.join( "&" );
	}

	grabEvents( page = 1 ) {
		const host = "https://api.seatgeek.com/2/events/"
		const params = this.buildQueryParams( {
			page,
			"client_id": "MTE5NzM5MDB8MTUyOTI5Mjg5Ni42Mw",
			"client_secret": "e4cdee90a1edb47e6de72569bc173e5d4d845dc7052232f1fde6dd3bced9691d"
		} );

		return fetch( host + params )
			.then( response => response.json()
				.then( data => data.events ) );
	}
}
