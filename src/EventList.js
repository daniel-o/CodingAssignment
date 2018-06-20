import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { SearchBar } from 'react-native-elements';
import { EventItem } from "./EventItem";

function hasValue( obj, search ) {
	const cleanedTerm = search.trim().toLowerCase();
	return Object.values( obj ).reduce( ( accumulator, current ) => {
		const match = ( function( value ) {
			switch( typeof value ) {
				case "string": return value.toLowerCase().includes( cleanedTerm );
				case "object": return value !== null ? hasValue( current, cleanedTerm ) : false;
				default: return false;
			}
		} )( current );
		return match || accumulator;
	}, false );
}

export class EventList extends PureComponent {
	constructor( props ) {
		super( props );

		this.state = {
			filtered: []
		};
	}
	get list() {
		return this.state.filtered.length ? this.state.filtered : this.props.screenProps.events;
	}

	search( word ) {
		const { events } = this.props.screenProps;
		const filtered = (word.trim() === "") ?
			events : events.filter( event => hasValue( event, word ) );

		this.setState( { filtered } );
	}

	render() {
		return (
			<View>
				<SearchBar
					placeholder="Search"
					onChangeText={event => this.search(event)}
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
