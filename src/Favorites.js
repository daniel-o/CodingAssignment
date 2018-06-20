import { AsyncStorage } from "react-native";
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
		this.persist();
		return true;
	}

	remove( id ) {
		const index = this.favorites.findIndex( eventid => eventid === id );
		this.favorites.splice( index, 1 );
		this.persist();
		return false;
	}

	includes( id ) {
		return this.favorites.includes( id );
	}

	persist() {
		try {
			AsyncStorage.setItem( "favorites", JSON.stringify( this.favorites ) );
		} catch( error ) {
			console.error( error );
		}
	}
}
