import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyleVar } from "../../constants";
import { VehicleCard, VehicleCardProps } from "../../components/Vehicle";
import { faCarSide, faMotorcycle, faTruckFast, faPlane } from "@fortawesome/free-solid-svg-icons";

function VehicleList()
{
	const vehicleCardList: VehicleCardProps[]  = [
		{
			icon: faMotorcycle,
			title: "MOTO"
		},
		{
			icon: faCarSide,
			title: "CAR"
		},
		{
			icon: faTruckFast,
			title: "TRUCK"
		},
		{
			icon: faPlane,
			title: "PLANE"
		}
	]

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Your Transportation</Text>
			<View style={styles.vehicleList}>
				{vehicleCardList.map((item: VehicleCardProps, index: number) =>
						<VehicleCard key={index} {...item}/>)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		marginBottom: 20
	},
	title: {
		paddingLeft: GlobalStyleVar.pHScreen,
		fontSize: 18,
		color: "black",
		marginBottom: 15,
		textTransform: "uppercase"
	},
	vehicleList: {
		paddingHorizontal: GlobalStyleVar.pHScreen,
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between"
	},
})

export {VehicleList}
