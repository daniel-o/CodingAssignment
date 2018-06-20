import { PureComponent } from "react";
import { StyleSheet, Text TouchableOpacity } from "react-native";

class EventItem extends PureComponent {
	render() {
		return (
			<TouchableOpacity>
				<Text>{ this.props.title }</Text>
			</TouchableOpacity>
		)
	}
}
