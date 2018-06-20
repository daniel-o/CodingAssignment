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

	openDetails() {
		this.props.navigation.navigate( "Details", { item: this.props.item } );
	}

	render() {
		return (
			<TouchableOpacity
				style={{ flexDirection: "row" }}
				onPress={ event => this.openDetails() }
			>
				{ this.props.item.favorite &&
					<Icon
						type="font-awesome"
						name="heart"
						color="red"
						style={ styles.icon }
					/> }
				<Picture source={ this.imageURL } />
				<EventSummary item={this.props.item} />
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create( {
	icon: {
		position: "absolute",
		left: 0
	}
} );
