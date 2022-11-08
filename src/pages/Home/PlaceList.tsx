import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { GlobalStyleVar } from "../../constants";
import { PlaceCard, PlaceCardProps } from "../../components/Place";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function PlaceList()
{


	const placeList: PlaceCardProps[] = [
		{
			location: {
				latitude: 16.063011,
				longitude: 108.243354
			},
			image: "https://images.unsplash.com/photo-1600052300324-fa910a6be071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
			locationName: "Big C Super Market",
			pricePerHour: 3,
		},
		{
			location: {
				latitude: 16.058383,
				longitude: 108.240247
			},
			image: "https://images.unsplash.com/photo-1597736115102-34ad67aee75c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			locationName: "101B Le Huu Trac",
			pricePerHour: 3,
		},
		{
			location: {
				latitude: 16.060910,
				longitude: 108.240773
			},
			image: "https://images.unsplash.com/photo-1417816491410-d61e1546e539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
			locationName: "San Bong WinWin",
			pricePerHour: 3,
		}
	]

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Nearly Parking Place</Text>
			<ScrollView showsHorizontalScrollIndicator={false} style={styles.placeList} horizontal={true}>
				{
					placeList.map((place, index) => {
						return <PlaceCard key={index} {...place} style={{marginRight: 22}}/>
					})
				}
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
