import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Picture } from "./Picture";

export class EventItem extends PureComponent {
	get imageURL() {
		const main = this.props.item.performers.find( performer => performer.primary );
		return main.image;
	}

	render() {
		return (
			<TouchableOpacity style={ flexDirection: "row" }>
				<Picture source={ this.imageURL } />
				<Text>{ this.props.item.title }</Text>
			</TouchableOpacity>
		)
	}
}
