import { Text, FlatList, View } from "react-native"
import { Header, PharmacyCard } from "../components"
import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSelector } from "react-redux"
import { rootState, Pharmacy } from "../@types"
import appContainer from "../assets/styles/appContainer"
import { NavigationProp } from "@react-navigation/native"

interface Props {
    navigation: NavigationProp<any>
}

const Favorites = ({ navigation }: Props): JSX.Element => {
    const [favorites, setFavorites] = useState<Pharmacy[]>([])

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem("favorites")
                setFavorites(jsonValue != null ? JSON.parse(jsonValue) : [])
            } catch (e) {
                console.log(e)
            }
        }
        getFavorites()
    }, [])

    console.log(favorites)

    if (favorites.length === 0) {
        return (
            <View style={appContainer.container}>
                <Header />
                <Text>No favorites</Text>
            </View>
        )
    }

    return (
        <View style={appContainer.container}>
            <Header />
            <Text>Favorites</Text>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <PharmacyCard pharmacy={item} navigation={navigation} />
                )}
                keyExtractor={(item: any) => item.id.toString()}
            />
        </View>
    )
}

export default Favorites
