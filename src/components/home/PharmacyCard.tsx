import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { NavigationProp } from "@react-navigation/native"
import { Pharmacy } from "../../@types"

interface Props {
    pharmacy: Pharmacy
    navigation: NavigationProp<any>
}

const PharmacyCard = ({ pharmacy, navigation }: Props) => {
    const { name, address, distance, images } = pharmacy

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("PharmacyDetails", { pharmacy })}
        >
            <Image source={{ uri: images[0] }} style={styles.logo} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.distance}>{distance} km</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginVertical: 5,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    address: {
        fontSize: 14,
        color: "#666",
    },
    distance: {
        fontSize: 14,
        color: "#666",
    },
})

export default PharmacyCard
