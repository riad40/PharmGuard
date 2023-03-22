import { Text, SafeAreaView, StyleSheet } from "react-native"
import appContainer from "../assets/styles/appContainer"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useSelector } from "react-redux"
import { rootState } from "../@types"

const Map = (): JSX.Element => {
    const location = useSelector((state: rootState) => state.location)

    const { latitude, longitude } = location.coords

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
