import { View } from "react-native";
import { HomeHeader } from "./HomeHeader";
import { VehicleList } from "./VehicleList";
import { PlaceList } from "./PlaceList";

function Home()
{
	return (
		<View>
			<HomeHeader/>
			<VehicleList/>
			<PlaceList/>
		</View>
	)
}

export {Home}
