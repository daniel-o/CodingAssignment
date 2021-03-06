import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EventController } from "./src/EventController";
import { Favorites } from "./src/Favorites";
import { Navigation } from "./src/Navigation";

export default class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			page: 1,
			events: []
		};

		this.favorites = new Favorites();

		this.grabber = new EventController();

		this.favorites.load().then( results =>
			this.grabNextEventPage()
		);
	}

	/**
	 * This method will attach a 'favorite' property to every event object loaded
	 * from SeatGeek.
	 * Returns a new array of events that concats from existing entries and recently loaded
	 * to adhere to React's immutable state model.
	 */
	addEvents( additions ) {
		return this.state.events.concat( additions.map(
			event => Object.assign( event, { favorite: this.favorites.includes( event.id ) } )
		) );
	}

	grabNextEventPage() {
		this.grabber.grabEvents( this.state.page ).then(
			events => this.setState( prev => ( {
				page: prev.page + 1,
				events: this.addEvents( events )
			} )
		) );
	}

	toggleFavorite( id ) {
		const toggle = ( event ) =>
			event.favorite ? this.favorites.remove( id ) : this.favorites.add( id )

		// Have to replace the entire events array to update a single elements property
		// for the sake of immutability.
		const updated = this.state.events.map( event =>
			event.id !== id ? event : Object.assign( {}, event, { favorite: toggle( event ) } )
		);

		this.setState( { events: updated } );
	}

  render() {
    return (
			<Navigation
				screenProps={{
					events: this.state.events,
					nextPage: () => this.grabNextEventPage(),
					toggleFavorite: ( id ) => this.toggleFavorite( id )
				}}
			/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
