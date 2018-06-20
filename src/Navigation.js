import React from "react";
import { createStackNavigator } from 'react-navigation';
import { EventList } from "./EventList";
import { EventDetails } from "./EventDetails";

export const Navigation = createStackNavigator( {
	Home: {
		screen: EventList,
		navigationOptions: {
			header: null
		}
	},
	Details: {
		screen: EventDetails,
		navigationOptions: {
			title: "Event Details"
		}
	}
},
{ initialRouteName: "Home" } );
