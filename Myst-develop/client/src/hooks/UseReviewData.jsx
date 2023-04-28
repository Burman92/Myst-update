import { useContext } from "react";
import ReviewsContext from "../context/ReviewsContext";

export const UseReviewData = () => {
    const { reviews } = useContext(ReviewsContext);
    
    const reviewsArray = Object.values(reviews); 
    
    const numOfReviews = reviewsArray.length;
    const reviewsCopy = [...reviewsArray];
    const anotherreviewsCopy = [...reviewsArray];
    const decendingTimeReviews = reviewsCopy.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const acendingTimeReviews = anotherreviewsCopy.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    return {
        reviewsArray,
        numOfReviews,
        decendingTimeReviews,
        acendingTimeReviews
    };
}