import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { EventItem } from "./EventItem";

export class EventList extends PureComponent {
	get list() {
		return this.props.screenProps.events;
	}

	render() {
		return (
			<FlatList
				data={ this.list }
				renderItem={ ({item}) => (<EventItem item={item} />) }
				keyExtractor={ ( item, index ) => index.toString() }
				onEndReached={event => this.props.screenProps.nextPage()}
			/>
		)
	}
}
