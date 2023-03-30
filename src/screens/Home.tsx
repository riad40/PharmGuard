import { StyleSheet, View, FlatList, Text } from "react-native"
import appContainer from "../assets/styles/appContainer"
import { Header, Nav, PharmacyCard, Search } from "../components"
import { Pharmacy, rootState } from "../@types"
import { NavigationProp } from "@react-navigation/native"
import { useSelector } from "react-redux"

const Home = ({
    navigation,
}: {
    navigation: NavigationProp<any>
}): JSX.Element => {
    const data: Pharmacy[] = useSelector((state: rootState) => state.pharmacies)

    return (
        <View style={appContainer.container}>
            <Header />
            <Search />
            <Nav />
            {data.length === 0 ? (
                <Text style={styles.hading}>No Pharmacies Found</Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <PharmacyCard pharmacy={item} navigation={navigation} />
                    )}
                    keyExtractor={(item: Pharmacy) => item.id.toString()}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    hading: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
})

export default Home
