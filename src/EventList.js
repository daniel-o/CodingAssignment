import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { SearchBar } from 'react-native-elements';
import { EventItem } from "./EventItem";

export class EventList extends PureComponent {
	get list() {
		return this.props.screenProps.events;
	}

	render() {
		return (
			<View>
				<SearchBar
					placeholder="Search"
				/>
				<FlatList
					data={ this.list }
					renderItem={ ({item}) => (<EventItem item={item} navigation={ this.props.navigation } />) }
					keyExtractor={ ( item, index ) => index.toString() }
					onEndReached={event => this.props.screenProps.nextPage()}
				/>
			</View>
		)
	}
}
