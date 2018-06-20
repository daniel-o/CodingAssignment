import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EventController } from "./src/EventController";
import { Favorites } from "./src/Favorites";
import { EventList } from "./src/EventList";

export default class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { events: [] };

		this.favorites = new Favorites();

		this.grabber = new EventController();
		this.grabber.grabEvents().then( events => this.setState( { events: this.addEvents( events ) } ) );
	}

	/**
	 * This method will attach a 'favorite' property to every event object loaded
	 * from SeatGeek.
	 */
	addEvents( additions ) {
		return additions.map(
			event => Object.assign( event, { favorite: this.favorites.includes( event.id ) } )
		);
	}

  render() {
    return (
			<EventList events={ this.state.events } />
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
