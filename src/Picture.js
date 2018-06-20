import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Image } from "react-native";
import { Icon } from 'react-native-elements';

export class Picture extends PureComponent {
	render() {
		if( this.props.source !== null ) {
			return <Image source={{ uri: this.props.source }} style={ styles.picture } />
		} else {
			return <View style={ styles.picture }><Icon name="image" style={{size: 80}}/></View>
		}
	}
}

const styles = StyleSheet.create( {
	picture: {
		width: 75,
		height: "100%",
		alignSelf: "center",
		alignItems: "center",
		alignContent: "center"
	}
} );
