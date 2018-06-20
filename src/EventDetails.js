import React from "react";
import { PureComponent } from "react";
import { Text } from 'react-native-elements'

export class EventDetails extends PureComponent {
	constructor( props ) {
		super( props );

		this.state = props.navigation.getParam( "item" );
	}

	render() {
		return (
			<Text h4>{ this.state.title }</Text>
		)
	}
}
