import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const Header = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require("../../assets/imgs/logo.png")}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>PharmGuard</Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity>
                    <Ionicons name="search" size={30} color="green" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
    },
    logo: {
        width: 70,
        height: 70,
    },
    left: {
        width: "50%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    right: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
})

export default Header
