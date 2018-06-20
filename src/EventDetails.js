import React from "react";
import { PureComponent } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from 'react-native-elements'

export class EventDetails extends PureComponent {
	constructor( props ) {
		super( props );

		this.state = props.navigation.getParam( "item" );
	}

	imageURL() {
		const main = this.state.performers.find( performer => performer.primary );
		return main.image;
	}

	render() {
		return (
			<View style={{ flexDirection: "column" }}>
				<Text h4>{ this.state.title }</Text>
				<Image source={{ uri: this.imageURL()}} style={ styles.image } />
			</View>
		)
	}
}

const styles = StyleSheet.create( {
	image: {
		width: "85%",
		aspectRatio: 1,
		alignSelf: "center"
	}
} );
