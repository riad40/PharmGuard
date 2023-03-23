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
            <View>
                <Text style={styles.modalTitle}>{pharmacy.name}</Text>
                <Image
                    source={{ uri: pharmacy.images[0] }}
                    style={{ width: "100%", height: 200 }}
                />
                <View style={styles.modalContent}>
                    <Text style={styles.heading}> Address </Text>
                    <Text style={styles.content}> {pharmacy.address} </Text>
                </View>
                <View style={styles.modalContent}>
                    <Text style={styles.heading}> Opening Hours </Text>
                    <Text style={styles.content}>{pharmacy.openingHours}</Text>
                </View>
                <View style={styles.modalContent}>
                    <Text style={styles.heading}> Phone Number </Text>
                    <Text style={styles.content}> {pharmacy.phone} </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 20,
        paddingTop: 5,
        height: "70%",
        width: "100%",
    },
    modalClose: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    modalContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    heading: {
        fontSize: 16,
        fontWeight: "bold",
    },
    content: {
        fontSize: 16,
    },
})

export default ModalContent
