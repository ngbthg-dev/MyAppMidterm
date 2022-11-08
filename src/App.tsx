import React from "react";
import { Map, Home } from "./pages";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App()
{
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
				<Stack.Screen name="Map" component={Map} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
