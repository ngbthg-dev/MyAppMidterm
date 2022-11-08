import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { GlobalStyleVar } from "../../constants";

interface PlaceCardProps
{
	style?: any
	onPress?: (event: any) => void
}

function PlaceCard(props: PlaceCardProps)
{
	return (
		<TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
			<Text style={styles.locationName}>Cho Bac My An</Text>
			<View style={styles.locationInfo}>
				<Text style={{color: "#0075fe", fontWeight: "bold"}}>2.5km</Text>
				<Text style={{color: "#0075fe", fontWeight: "bold", marginHorizontal: 7}}>-</Text>
				<Text style={{color: "#0075fe", fontWeight: "bold"}}>$3/h</Text>
			</View>
			<Image style={styles.image} source={{uri: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"}}/>
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

export {PlaceCard}
