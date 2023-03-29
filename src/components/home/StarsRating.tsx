import Ionicons from "react-native-vector-icons/Ionicons"
import { View } from "react-native"

const StarsRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating)
    const halfStars = Math.ceil(rating - fullStars)
    const emptyStars = 5 - fullStars - halfStars

    // make render stars function

    const renderStars = (count: number, type: string) => {
        const stars = []

        for (let i = 0; i < count; i++) {
            stars.push(
                <Ionicons key={i} name={type} size={20} color="#ffc107" />
            )
        }

        return stars
    }

    return (
        <View style={{ flexDirection: "row" }}>
            {renderStars(fullStars, "star")}
            {renderStars(halfStars, "star-half")}
            {renderStars(emptyStars, "star-outline")}
        </View>
    )
}

export default StarsRating
