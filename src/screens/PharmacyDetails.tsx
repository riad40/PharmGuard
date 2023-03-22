import { Text, View, StyleSheet, Image } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import appContainer from "../assets/styles/appContainer"
interface Props {
    route: any
    navigation: NavigationProp<any>
}

const PharmacyDetails = ({ route, navigation }: Props): JSX.Element => {
    const { pharmacy } = route.params

    return (
        <View style={appContainer.container}>
            <View style={styles.container}>
                <Image
                    source={{ uri: pharmacy.images[0] }}
                    style={styles.logo}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{pharmacy.name}</Text>
                    <Text style={styles.address}>{pharmacy.address}</Text>
                    <Text style={styles.distance}>{pharmacy.distance} km</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Opening Hours</Text>
                <Text style={styles.text}>{pharmacy.stratHours}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Closing Hours</Text>
                <Text style={styles.text}>{pharmacy.endHours}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Contact</Text>
                <Text style={styles.text}>Phone: {pharmacy.phone}</Text>
                <Text style={styles.text}>Email: {pharmacy.email}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Services</Text>
                <Text style={styles.text}>{pharmacy.services[0]}</Text>
                <Text style={styles.text}>{pharmacy.services[1]}</Text>
            </View>
        </View>
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
    heading: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        color: "#666",
        marginRight: 10,
    },
})

export default PharmacyDetails
