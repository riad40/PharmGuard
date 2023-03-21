import { Text, StyleSheet, View } from "react-native"
import appContainer from "../assets/styles/appContainer"

const Home = (): JSX.Element => {
    return (
        <View style={appContainer.container}>
            <Text> Home Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F4F4F4",
    },
})

export default Home
