import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState, useEffect } from "react"
import { MAIN_COLOR } from "./constants"

import { Home, PharmacyDetails, Map, GetStarted } from "./screens"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(false)

    useEffect(() => {
        AsyncStorage.clear()
    }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline"
                        } else if (route.name === "Map") {
                            iconName = focused ? "location" : "location-outline"
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
                    tabBarActiveTintColor: MAIN_COLOR,
                    tabBarInactiveTintColor: "#524A4E",
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        marginHorizontal: 20,
                        height: 60,
                        elevation: 0,
                        display: route.name === "GetStarted" ? "none" : "flex",
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                        marginBottom: 4,
                        fontWeight: "bold",
                    },
                    tabBarHideOnKeyboard: true,
                    tabBarAllowFontScaling: true,
                    tabBarPressColor: "#45a6f0",
                    tabBarPressOpacity: 0.8,
                })}
            >
                {/* {isFirstLaunch ? ( */}
                {/* <> */}
                <Tab.Screen
                    name="GetStarted"
                    component={GetStarted}
                    options={{
                        tabBarButton: (props) => null,
                    }}
                />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen
                    name="PharmacyDetails"
                    component={PharmacyDetails}
                    options={{
                        tabBarButton: (props) => null,
                    }}
                />
                {/* </> */}
                {/* ) : ( */}
                {/* <>
                        <Tab.Screen name="Home" component={Home} />
                        <Tab.Screen name="Map" component={Map} />
                        <Tab.Screen
                            name="PharmacyDetails"
                            component={PharmacyDetails}
                            options={{
                                tabBarButton: (props) => null,
                            }}
                        />
                    </> */}
                {/* )} */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export { AppNavigator }
