import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import { useState, useRef, useEffect } from "react";
import Geolocation from '@react-native-community/geolocation';


function Map()
{
	const [pickupCords, setPickupCords] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0
	})

	const [dropLocationCords, setDropLocationCords] = useState({
		latitude: 16.047079,
		longitude: 108.206230,
		latitudeDelta: 0,
		longitudeDelta: 0
	})

	const mapRef = useRef<any>()

	useEffect(() => {
		Geolocation.getCurrentPosition(info => {
			console.log(info);
			setPickupCords((prevState) => ({
				latitude: info.coords.latitude,
				longitude: info.coords.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421
			}))
		});
	}, [])


	return (
		<MapView
			showsUserLocation={true}
			ref={mapRef}
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			region={pickupCords}
			initialRegion={pickupCords}>
			{/*<Marker coordinate={pickupCords}/>*/}
			<Marker coordinate={dropLocationCords}/>
			<MapViewDirections
				origin={pickupCords}
				destination={dropLocationCords}
				apikey={"AIzaSyDHOX9TxA1ba8QCz8cB2moT3MKmDL5_G6s"}
				strokeWidth={3}
				strokeColor={"hotpink"}
				optimizeWaypoints={true}
				// onReady={result => {
				// 	mapRef.current.fitToCoordinates(result.coordinates, {
				// 		edgePadding: {
				//
				// 		}
				// 	})
				// }}
			/>
		</MapView>
	)
}

const styles = StyleSheet.create({
	map: {
		height: "100%"
	},
});

export {Map}
