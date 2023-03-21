import { PermissionsAndroid } from "react-native"

const useLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message: "This app needs access to your location",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK",
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Location permission granted")
            return true
        } else {
            console.log("Location permission denied")
            return false
        }
    } catch (err) {
        console.error(err)
    }
}

export default useLocationPermission
