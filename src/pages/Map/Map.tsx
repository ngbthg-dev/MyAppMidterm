import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import { useState, useRef, useEffect } from "react";
import Geolocation from '@react-native-community/geolocation';

function Map({route}: any)
{
	const [pickupCords, setPickupCords] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	})

	const [dropLocationCords, setDropLocationCords] = useState({
		...route.params,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	})

	const mapRef = useRef<any>()

	useEffect(() => {
		console.log(route.params);
		Geolocation.getCurrentPosition(info => {
			console.log(info);
			setPickupCords((prevState) => ({
				...prevState,
				latitude: info.coords.latitude,
				longitude: info.coords.longitude,
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
