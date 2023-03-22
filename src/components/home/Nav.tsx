import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react"

const Nav = (): JSX.Element => {
    const [active, setActive] = useState<string>("pharmacies")

    const handlePress = (type: string) => {
        setActive(type)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    active === "pharmacies" && styles.active,
                ]}
                onPress={() => handlePress("pharmacies")}
            >
                <Text style={styles.text}>All Pharmacies</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    active === "pharmaciesOnGuard" && styles.active,
                ]}
                onPress={() => handlePress("pharmaciesOnGuard")}
            >
                <Text style={styles.text}>Pharmacies on guard</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
    },
    button: {
        backgroundColor: "transparent",
        borderRadius: 5,
        padding: 5,
        borderWidth: 1,
        width: "40%",
        marginHorizontal: 5,
        borderColor: "#000",
    },
    active: {
        backgroundColor: "green",
    },
})

export default Nav
