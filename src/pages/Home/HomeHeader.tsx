import { StyleSheet, Text, View } from "react-native";
import { Icon, SearchBar } from "../../components/Base";
import { GlobalStyleVar } from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function HomeHeader()
{
	return (
		<View style={[styles.container]}>
			<View style={styles.headerTopContainer}>
				<View>
					<Text style={{color: GlobalStyleVar.colorB, fontWeight: "bold"}}>Your location</Text>
					<View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
						<FontAwesomeIcon size={20} color={"#0075fe"} icon={faLocationDot}/>
						<Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}> 99, To Hien Thanh</Text>
					</View>
				</View>
				<Icon/>
			</View>
			<Text style={styles.heading}>Let's Find The Best Parking Space</Text>
			<SearchBar/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: GlobalStyleVar.colorA,
		paddingHorizontal: GlobalStyleVar.pHScreen,
		paddingVertical: 25
	},
	heading: {
		fontSize: 35,
		color: GlobalStyleVar.colorC,
		fontWeight: "bold",
		marginVertical: 25
	},
	headerTopContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}
})

export {HomeHeader}
