import { View, TextInput, StyleSheet } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from "react-redux"
import data from "../../helpers/data"

const Search = () => {
    const dispatch = useDispatch()

    // make Search functionality
    const handleSearch = (text: string) => {
        // handle if text is empty just return all pharmacies
        if (text === "") {
            dispatch({
                type: "SAVE_PHARMACIES",
                payload: data,
            })
            return
        }

        dispatch({
            type: "SEARCH_PHARMACIES",
            payload: text,
        })
    }

    return (
        <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#000" />

            <TextInput
                style={styles.searchInput}
                placeholder="Search Pharmacies"
                onChangeText={handleSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        marginVertical: 10,
    },
    searchInput: {
        color: "#000",
        marginLeft: 8,
        width: "100%",
    },
})

export default Search
