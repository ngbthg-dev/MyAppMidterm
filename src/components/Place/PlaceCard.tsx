import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { GlobalStyleVar } from "../../constants";
import { useNavigation } from "@react-navigation/native";

interface PlaceCardProps
{
	style?: any
	image: string
	locationName: string
	pricePerHour: number
	location: {
		latitude: number,
		longitude: number
	}
}

function PlaceCard(props: PlaceCardProps)
{
	const navigation = useNavigation<any>()

	return (
		<TouchableOpacity onPress={(event: any) => navigation.navigate('Map', props.location)} style={[styles.container, props.style]}>
			<Text style={styles.locationName}>{props.locationName}</Text>
			<View style={styles.locationInfo}>
				<Text style={{color: "#0075fe", fontWeight: "bold"}}>2.5km</Text>
				<Text style={{color: "#0075fe", fontWeight: "bold", marginHorizontal: 7}}>-</Text>
				<Text style={{color: "#0075fe", fontWeight: "bold"}}>${props.pricePerHour}/h</Text>
			</View>
			<Image style={styles.image} source={{uri: props.image}}/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: 310,
		padding: 15,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: GlobalStyleVar.colorB,
	},
	image: {
		width: "100%",
		height: 150,
		borderRadius: 10
	},
	locationName: {
		color: GlobalStyleVar.colorD,
		fontSize: 19,
		fontWeight: "bold",
	},
	locationInfo: {
		marginVertical: 5,
		display: "flex",
		flexDirection: "row",
		marginLeft: 2,
		marginBottom: 10
	}
})

export {PlaceCard, type PlaceCardProps}
