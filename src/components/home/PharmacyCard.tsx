import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { NavigationProp } from "@react-navigation/native"
import { Pharmacy } from "../../@types"
import StarsRating from "./StarsRating"
import getAverageRating from "../../helpers/getAvreageRating"

const PharmacyCard = ({
    pharmacy,
    navigation,
}: {
    pharmacy: Pharmacy
    navigation: NavigationProp<any>
}) => {
    const { name, address, reviews, images } = pharmacy

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("PharmacyDetails", { pharmacy })}
        >
            <Image source={{ uri: images[0] }} style={styles.logo} />

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.infoChild}>
                    <Ionicons name="location-outline" size={20} color="#000" />
                    <Text
                        style={[
                            styles.text,
                            {
                                width: "90%",
                            },
                        ]}
                    >
                        {address}
                    </Text>
                </View>
                <View style={styles.infoChild}>
                    <StarsRating rating={getAverageRating(reviews)} />
                </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={30} color="#000" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 5,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginLeft: 5,
        marginVertical: 5,
    },
    text: {
        fontSize: 14,
        color: "#000",
        marginLeft: 5,
    },
    infoChild: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 2,
    },
})

export default PharmacyCard
