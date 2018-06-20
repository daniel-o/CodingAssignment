import React from "react";
import { PureComponent } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Picture } from "./Picture";
import { EventSummary } from "./EventSummary";

export class EventItem extends PureComponent {
	get imageURL() {
		const main = this.props.item.performers.find( performer => performer.primary );
		return main.image;
	}

	render() {
		return (
			<TouchableOpacity style={{ flexDirection: "row" }}>
				<Picture source={ this.imageURL } />
				<EventSummary item={this.props.item} />
			</TouchableOpacity>
		)
	}
}
