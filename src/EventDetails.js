import React from "react";
import { PureComponent } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, CheckBox, Icon } from 'react-native-elements'

export class EventDetails extends PureComponent {
	constructor( props ) {
		super( props );

		this.state = props.navigation.getParam( "item" );
	}

	imageURL() {
		const main = this.state.performers.find( performer => performer.primary );
		return main.image;
	}

	toggleFavorite() {
		// Hack: Passing objects via react-navigation params is "pass by value"
		this.setState( prev => ({ favorite: !prev.favorite }) );
		this.props.screenProps.toggleFavorite( this.state.id );
	}

	render() {
		return (
			<View style={{ flexDirection: "column" }}>
				<Text h4>{ this.state.title }</Text>
				<Image source={{ uri: this.imageURL()}} style={ styles.image } />
				<CheckBox
					center
					checkedIcon="heart"
					uncheckedIcon="heart"
					checkedColor="red"
					uncheckedColor="black"
					checked={ this.state.favorite }
					onPress={ () => this.toggleFavorite() }
					title="FAVORITE"
				/>
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
