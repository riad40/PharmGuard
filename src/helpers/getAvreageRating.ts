import { Review } from "../@types"

const getAverageRating = (reviews: Review[]) => {
    if (reviews.length === 0) {
        return 0
    }

    let sum = 0
    reviews.forEach((review) => {
        sum += review.rating
    })
    return sum / reviews.length
}

export default getAverageRating
