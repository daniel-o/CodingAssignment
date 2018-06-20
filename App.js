import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EventController } from "./src/EventController";
import { Favorites } from "./src/Favorites";

export default class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { events: [] };

		this.favorites = new Favorites();

		this.grabber = new EventController();
		this.grabber.grabEvents().then( events => this.setState( { events: addEvents( events ) } ) );
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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
