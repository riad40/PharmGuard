import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons"

import { Home, Favorites, PharmacyDetails, Map } from "./screens"

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline"
                        } else if (route.name === "Map") {
                            iconName = focused ? "map" : "map-outline"
                        } else if (route.name === "Favorites") {
                            iconName = focused ? "heart" : "heart-outline"
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    tabBarActiveTintColor: "#41CD7D",
                    tabBarInactiveTintColor: "#524A4E",
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 40,
                        marginHorizontal: 20,
                        height: 60,
                        borderRadius: 20,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderWidth: 2,
                        borderColor: "#41CD7D",
                        borderTopColor: "#41CD7D",
                        borderTopWidth: 2,
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                        marginBottom: 4,
                        fontWeight: "bold",
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Favorites" component={Favorites} />
                <Tab.Screen
                    name="PharmacyDetails"
                    component={PharmacyDetails}
                    options={{
                        tabBarButton: (props) => null,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export { AppNavigator }
