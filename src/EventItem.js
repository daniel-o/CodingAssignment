import React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export class EventItem extends PureComponent {
	render() {
		return (
			<TouchableOpacity>
				<Text>{ this.props.item.title }</Text>
			</TouchableOpacity>
		)
	}
}
