import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native"
import appContainer from "../assets/styles/appContainer"
import { NavigationProp } from "@react-navigation/native"
import useLocationPermission from "../helpers/useLocationPermission"
import Geolocation from "react-native-geolocation-service"
import { useDispatch } from "react-redux"
interface Props {
    navigation: NavigationProp<any>
}

const GetStarted = ({ navigation }: Props): JSX.Element => {
    const dispatch = useDispatch()

    const handlePress = () => {
        const granted = useLocationPermission()

        granted.then((granted) => {
            if (granted) {
                console.log("granted", granted)

                Geolocation.getCurrentPosition(
                    (position) => {
                        dispatch({
                            type: "SET_LOCATION",
                            payload: position,
                        })
                    },
                    (error) => {
                        console.log(error)
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                    }
                )
            }
        })

        navigation.navigate("Home")
    }

    return (
        <View style={appContainer.container}>
            <View style={styles.wrapper}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../assets/imgs/logo.png")}
                        style={styles.logo}
                    />
                </View>

                <Text style={styles.title}>Welcome to PharmGuard </Text>

                <Text style={styles.subtitle}>
                    A mobile application that helps you reach pharmacies in your
                    area so easily
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handlePress}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        width: "100%",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        color: "#000",
    },
    subtitle: {
        fontSize: 16,
        color: "#000",
        textAlign: "center",
        marginTop: 20,
        marginHorizontal: 20,
    },
    buttonContainer: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#45a6f0",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default GetStarted
