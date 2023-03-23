import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import appContainer from "../assets/styles/appContainer"
import Iocicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
import { Pharmacy } from "../@types"
interface Props {
    route: any
    navigation: NavigationProp<any>
}

const PharmacyDetails = ({ route, navigation }: Props): JSX.Element => {
    const { pharmacy } = route.params

    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const [favorites, setFavorites] = useState<Pharmacy[]>([])

    const handlePress = async (pharmacy: Pharmacy) => {
        await addToFavorites(pharmacy)
    }

    // add the pharmacy to the favorite list
    const addToFavorites = async (pharmacy: Pharmacy) => {
        try {
            // get old data from the async storage
            const jsonValue = await AsyncStorage.getItem("favorites")
            const oldData = jsonValue != null ? JSON.parse(jsonValue) : []
            // add the new pharmacy to the old data
            const newData = [...oldData, pharmacy]
            // save the new data to the async storage
            await AsyncStorage.setItem("favorites", JSON.stringify(newData))
            setFavorites(newData)
            setIsFavorite(true)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={appContainer.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Iocicons
                        name="chevron-back-outline"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Pharmacy Details</Text>
                <TouchableOpacity onPress={() => handlePress(pharmacy)}>
                    {
                        // Check if the pharmacy is already in the favorite list
                        isFavorite ? (
                            <Iocicons name="heart" size={24} color="#000" />
                        ) : (
                            <Iocicons
                                name="heart-outline"
                                size={24}
                                color="#000"
                            />
                        )
                    }
                </TouchableOpacity>
            </View>
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
})

export default PharmacyDetails
