import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { GlobalStyleVar } from "../../constants";
import { PlaceCard } from "../../components/Place";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function PlaceList()
{
	const navigation = useNavigation<any>()
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Nearly Parking Place</Text>
			<ScrollView showsHorizontalScrollIndicator={false} style={styles.placeList} horizontal={true}>
				<PlaceCard onPress={() => {navigation.navigate('Map')}} style={{marginRight: 22}}/>
				<PlaceCard style={{marginRight: 22}}/>
				<PlaceCard style={{marginRight: 22}}/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		// backgroundColor: "#f5f3f3"
	},
	title: {
		paddingHorizontal: GlobalStyleVar.pHScreen,
		fontSize: 18,
		color: "black",
		marginBottom: 15,
		textTransform: "uppercase"
	},
	placeList: {
		paddingHorizontal: GlobalStyleVar.pHScreen
	}
})

export {PlaceList}
