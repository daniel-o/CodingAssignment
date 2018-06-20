	buildQueryParams( obj ) {
		return "?" + Object.entries( obj )
			.map( field => field.join( "=" ) )
			.join( "&" );
	}
}
