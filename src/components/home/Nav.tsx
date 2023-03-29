import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Pharmacy } from "../../@types"
import data from "../../helpers/data"
import { MAIN_COLOR } from "../../constants"

const Nav = (): JSX.Element => {
    const [active, setActive] = useState<string>("GET_PHARMACIES")

    const dispatch = useDispatch()

    const handlePress = (type: string) => {
        setActive(type)
    }

    const savePharmacies = () => {
        let pharmacies: Pharmacy[] = []

        if (active === "GET_PHARMACIES") {
            pharmacies = data
        } else if (active === "GET_ON_GUARD_PHARMACIES") {
            pharmacies = data.filter((pharmacy) => pharmacy.onGuard)
        }

        dispatch({
            type: "SAVE_PHARMACIES",
            payload: pharmacies,
        })
    }

    useEffect(() => {
        savePharmacies()
    }, [active])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    active === "GET_PHARMACIES" && styles.active,
                ]}
                onPress={() => handlePress("GET_PHARMACIES")}
            >
                <Text style={styles.text}>All Pharmacies</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    active === "GET_ON_GUARD_PHARMACIES" && styles.active,
                ]}
                onPress={() => handlePress("GET_ON_GUARD_PHARMACIES")}
            >
                <Text style={styles.text}>Pharmacies On Guard</Text>
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
        borderColor: MAIN_COLOR,
    },
    active: {
        backgroundColor: MAIN_COLOR,
    },
})

export default Nav
