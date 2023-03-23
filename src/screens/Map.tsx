import { Text, SafeAreaView, StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useSelector } from "react-redux"
import { rootState } from "../@types"

const Map = (): JSX.Element => {
    const location = useSelector((state: rootState) => state.location)

    const { latitude, longitude } = location.coords

    const pharmacies = useSelector((state: rootState) => state.pharmacies)

    return (
        <SafeAreaView>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude,
                    }}
                    title="My Location"
                    description="This is my location"
                />

                {pharmacies &&
                    pharmacies.map((pharmacy: any) => (
                        <Marker
                            key={pharmacy.id}
                            coordinate={{
                                latitude: pharmacy.latitude,
                                longitude: pharmacy.longitude,
                            }}
                            title={pharmacy.name}
                            description={pharmacy.address}
                            pinColor="green"
                        />
                    ))}
            </MapView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: "100%",
        width: "100%",
    },
})

export default Map
