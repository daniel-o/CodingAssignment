import React from "react";
import { createStackNavigator } from 'react-navigation';
import { EventList } from "./EventList";

export const Navigation = createStackNavigator( {
	Home: {
		screen: EventList
	}
},
{ initialRouteName: "Home" } );
