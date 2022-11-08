import { StyleSheet, StyleProp, TextInput, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { GlobalStyleVar } from "../../constants";

interface SearchBarProps
{
	style?: StyleProp<any>
}

function SearchBar(props: SearchBarProps)
{
	return (
		<View style={[props.style, styles.container]}>
			<TextInput
				style={styles.input}
				placeholderTextColor={"#c8cad9"}
				placeholder={"Find Parking Area ..."}/>
			<FontAwesomeIcon
				size={21}
				color={"white"}
				icon={faMagnifyingGlass}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: GlobalStyleVar.colorB,
		paddingHorizontal: 15,
		paddingVertical: 2,
		borderRadius: 10
	},
	input: {
		color: GlobalStyleVar.colorC,
		width: "80%"
	}
})

export {SearchBar}
