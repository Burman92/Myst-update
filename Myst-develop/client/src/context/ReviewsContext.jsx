import React, { createContext, useState, useEffect } from 'react';

const ReviewsContext = createContext();

export const ReviewsContextProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [showReviewType, setShowReviewType] = useState(false);
    const [showPurchaseType, setShowPurchaseType] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showDateRange, setShowDateRange] = useState(false);
    const [showPlayTime, setShowPLayTime] = useState(false);
    const [showGraph, setShowGraph] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/reviews/users')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <ReviewsContext.Provider value={{ 
            reviews,
            showReviewType,
            setShowReviewType,
            showPurchaseType,
            setShowPurchaseType,
            showLanguage,
            setShowLanguage,
            showDateRange,
            setShowDateRange,
            showPlayTime,
            setShowPLayTime,
            showGraph,
            setShowGraph 
        }}>
            {children}
        </ReviewsContext.Provider>
    )
}
export default ReviewsContext