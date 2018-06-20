import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { EventItem } from "./EventItem";

export class EventList extends PureComponent {
	render() {
		return (
			<FlatList
				data={ this.props.events }
				renderItem={ ({item}) => (<EventItem item={item} />) }
				keyExtractor={ ( item, index ) => index.toString() }
			/>
		)
	}
}
