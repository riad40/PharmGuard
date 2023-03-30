import {
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Modal,
} from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps"
import { useSelector } from "react-redux"
import { rootState, Pharmacy } from "../@types"
import MapViewDirections from "react-native-maps-directions"
import { GOOGLE_MAPS_API_KEY } from "../enviroment"
import { useState } from "react"
import calculateDistance from "../helpers/calculateDistance"
import { ModalContent } from "../components"

const Map = (): JSX.Element => {
    const location = useSelector((state: rootState) => state.location)

    const { latitude, longitude } = location.coords

    const pharmacies: any[] = useSelector(
        (state: rootState) => state.pharmacies
    )

    const [nearestPharmacy, setNearestPharmacy] = useState<Pharmacy>(
        {} as Pharmacy
    )
    const [nearestDistance, setNearestDistance] = useState<number>(0)

    pharmacies.forEach((pharmacy: Pharmacy) => {
        const distance = calculateDistance(
            latitude,
            longitude,
            pharmacy.latitude,
            pharmacy.longitude
        )
        if (nearestDistance === 0 || distance < nearestDistance) {
            setNearestDistance(distance)
            setNearestPharmacy(pharmacy)
        }
    })

    const handlePharmacyPress = (pharmacy: Pharmacy) => {
        // show the direction to the clocked pharmacy on the map
        setNearestPharmacy(pharmacy)
        setToggleModale(true)
    }

    const [toggleModale, setToggleModale] = useState<boolean>(false)

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
                            onPress={() => handlePharmacyPress(pharmacy)}
                            pinColor="green"
                        />
                    ))}
                {nearestPharmacy && (
                    <MapViewDirections
                        origin={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        destination={{
                            latitude: nearestPharmacy.latitude,
                            longitude: nearestPharmacy.longitude,
                        }}
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={6}
                        strokeColor="blue"
                        onError={(err) => console.error("error", err)}
                        mode="WALKING"
                    />
                )}
            </MapView>

            <Modal visible={toggleModale} animationType="slide" transparent>
                <ModalContent
                    pharmacy={nearestPharmacy}
                    toggleModal={() => setToggleModale(false)}
                />
            </Modal>
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
