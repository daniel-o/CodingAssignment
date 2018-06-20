import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

export class EventSummary extends PureComponent {
	get venueLabel() {
		const { name, city, state } = this.props.item.venue;
		return `${ name } in ${ city }, ${ state }`
	}

	get timestamp() {
		const date = new Date( Date.parse( this.props.item.datetime_local ) );
		const time = date.toLocaleString( "en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true
		} );
		return date.toDateString() + " " + time;
	}

	render() {
		return (
			<View style={ styles.summary }>
				<Text style={ styles.title }>{ this.props.item.short_title }</Text>
				<Text>{ this.venueLabel }</Text>
				<Text>{ this.timestamp }</Text>
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
