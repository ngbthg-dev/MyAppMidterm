import { View, Text, StyleSheet, StyleProp } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { GlobalStyleVar } from "../../constants";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface VehicleCardProps
{
	style?: any
	icon: IconProp
	title: string
}

function VehicleCard(props: VehicleCardProps)
{
	return (
		<View style={[styles.container, props.style]}>
			<FontAwesomeIcon color={GlobalStyleVar.colorD} size={40} icon={props.icon} />
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderWidth: 1,
		borderColor: GlobalStyleVar.colorB,
		paddingHorizontal: 18.5,
		paddingVertical: 16,
		borderRadius: 17
	},
	title: {
		fontSize: 11,
		marginTop: 7,
		color: GlobalStyleVar.colorD,
		fontWeight: "bold",
		textTransform: "uppercase"
	}
})

export { VehicleCard, type VehicleCardProps };
