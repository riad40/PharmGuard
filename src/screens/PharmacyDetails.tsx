import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
} from "react-native"
import { NavigationProp } from "@react-navigation/native"
import appContainer from "../assets/styles/appContainer"
import Iocicons from "react-native-vector-icons/Ionicons"
import { MAIN_COLOR } from "../constants"
import StarsRating from "../components/home/StarsRating"
import getAverageRating from "../helpers/getAvreageRating"
interface Props {
    route: any
    navigation: NavigationProp<any>
}

const PharmacyDetails = ({ route }: Props): JSX.Element => {
    const { pharmacy } = route.params

    return (
        <ScrollView style={appContainer.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{pharmacy.name}</Text>
            </View>
            <View style={styles.imgsContainer}>
                <Image
                    source={{
                        uri: pharmacy.images[0],
                    }}
                    style={styles.img}
                />
            </View>
            <View style={[styles.center, { marginVertical: 10 }]}>
                <StarsRating rating={getAverageRating(pharmacy.reviews)} />
            </View>
            <View
                style={[
                    styles.center,
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 10,
                    },
                ]}
            >
                <Iocicons name="location" size={30} color={MAIN_COLOR} />
                <Text style={[styles.title, { marginLeft: 10 }]}>
                    {pharmacy.address}
                </Text>
            </View>
            <View
                style={[
                    styles.header,
                    {
                        flexDirection: "row",
                        justifyContent: "space-around",
                    },
                ]}
            >
                <View style={styles.generalInfos}>
                    <Text style={styles.title}>Opening Time</Text>
                    <Text>{pharmacy.openingHours}</Text>
                </View>
                <View style={styles.generalInfos}>
                    <Text style={styles.title}>Closing Time</Text>
                    <Text>{pharmacy.closingHours}</Text>
                </View>
            </View>

            <Text style={styles.heading}>Contcat Infos</Text>
            <View
                style={[
                    styles.header,
                    {
                        flexDirection: "row",
                        justifyContent: "space-around",
                    },
                ]}
            >
                <View style={styles.generalInfos}>
                    <Text style={styles.title}>Phone</Text>
                    <Text>{pharmacy.phone}</Text>
                </View>
                <View style={styles.generalInfos}>
                    <Text style={styles.title}>Email</Text>
                    <Text>{pharmacy.email}</Text>
                </View>
            </View>
            <Text style={styles.heading}>Reviews</Text>
            <FlatList
                data={pharmacy.reviews}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.reviewCard}>
                            <ScrollView
                                contentContainerStyle={styles.center}
                                nestedScrollEnabled={true}
                            >
                                <Iocicons
                                    name="person"
                                    size={30}
                                    color={MAIN_COLOR}
                                />
                                <Text style={styles.title}>
                                    {item.username}
                                </Text>
                                <StarsRating rating={item.rating} />
                                <Text style={styles.paragraph}>
                                    {item.comment}
                                </Text>
                            </ScrollView>
                        </View>
                    )
                }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
    imgsContainer: {
        marginTop: 20,
        width: "100%",
        height: 200,
        borderWidth: 2,
        borderColor: MAIN_COLOR,
        borderRadius: 10,
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 9,
    },
    center: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    generalInfos: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        marginVertical: 10,
    },
    reviewCard: {
        width: 200,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
        alignItems: "center",
    },
    paragraph: {
        fontSize: 16,
        color: "#000",
        textAlign: "center",
    },
})

export default PharmacyDetails
