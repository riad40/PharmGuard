import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Pharmacy } from "../../@types"
interface ModalProps {
    pharmacy: Pharmacy
    toggleModal: () => void
}

const ModalContent = ({ pharmacy, toggleModal }: ModalProps): JSX.Element => {
    return (
        <View style={styles.modal}>
            <TouchableOpacity style={styles.modalClose} onPress={toggleModal}>
                <Ionicons name="chevron-down-outline" size={30} />
            </TouchableOpacity>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{pharmacy.name}</Text>
                <Text style={styles.modalTitle}>{pharmacy.distance} m</Text>
            </View>
            <Text style={styles.content}>{pharmacy.address}</Text>
            <View style={styles.bottomContent}>
                <Ionicons name="time-outline" size={20} color="#000" />
                <Text style={[styles.content, { marginLeft: 5 }]}>
                    {pharmacy.openingHours}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#e6e6e6",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingTop: 5,
        height: "20%",
        width: "100%",
    },
    modalClose: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
    },
    modalContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    heading: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    content: {
        fontSize: 16,
        color: "#000",
    },
    bottomContent: {
        fontSize: 16,
        fontWeight: "bold",
        position: "absolute",
        bottom: 10,
        left: 20,
        flexDirection: "row",
        alignItems: "center",
    },
})

export default ModalContent
