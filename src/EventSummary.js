import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

export class EventSummary extends PureComponent {
	render() {
		return (
			<View style={ styles.summary }>
				<Text style={ styles.title }>{ this.props.item.short_title }</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create( {
	summary: {
		flexDirection: "column",
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},

	title: {
		fontSize: 18
	}
} );
