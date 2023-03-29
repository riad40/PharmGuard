import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState, useEffect } from "react"

import { Home, Favorites, PharmacyDetails, Map, GetStarted } from "./screens"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem("firstLaunch").then((value) => {
            if (value === null) {
                AsyncStorage.setItem("firstLaunch", "true")
                setIsFirstLaunch(true)
            } else {
                setIsFirstLaunch(false)
            }
        })
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
                    tabBarActiveTintColor: "#45a6f0",
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
                        borderColor: "#45a6f0",
                        borderTopColor: "#45a6f0",
                        borderTopWidth: 2,
                        display: route.name === "GetStarted" ? "none" : "flex",
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                        marginBottom: 4,
                        fontWeight: "bold",
                    },
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarAllowFontScaling: true,
                    tabBarPressColor: "#45a6f0",
                    tabBarPressOpacity: 0.8,
                })}
            >
                {isFirstLaunch ? (
                    <>
                        <Tab.Screen
                            name="GetStarted"
                            component={GetStarted}
                            options={{
                                tabBarButton: (props) => null,
                            }}
                        />
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
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export { AppNavigator }
