/**
 * This class will act as a source of truth for our list of event ids that have been
 * marked as favorites.
 */
export class Favorites {
	constructor() {
		this.favorites = new Array();
	}

	add( id ) {
		this.favorites.push( id );
		return true;
	}

	remove( id ) {
		const index = this.favorites.findIndex( eventid => eventid === id );
		this.favorites.splice( index, 1 );
		return false;
	}
}
