import { PureComponent } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { EventItem } from "./src/EventItem";

export class EventList extends PureComponent {
	render() {
		return (
			<FlatList
				data="this.prop.events"
				renderItem={ ({item}) => (<EventItem item={item} />) }
			/>
		)
	}
}
