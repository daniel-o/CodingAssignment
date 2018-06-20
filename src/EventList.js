import { PureComponent } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

export class EventList {
	render() {
		return (
			<FlatList data="this.prop.events" />
		)
	}
}
