import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

const Header = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.childContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/imgs/logo.png")}
                />
                <Text style={styles.title}>PharmGuard</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
    },
    childContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
})

export default Header
