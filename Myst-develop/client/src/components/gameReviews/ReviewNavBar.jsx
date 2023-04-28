import React, {useContext}from "react";
import "/src/components/gameReviews/styles/ReviewNavBar.css"
import { UseReviewData } from "../../hooks/UseReviewData";
import ReviewsContext from "../../context/ReviewsContext";

function ReviewNavBar(){
    const { reviewsArray, numOfReviews, decendingTimeReviews, acendingTimeReviews } = UseReviewData();
    const { 
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
    } =useContext(ReviewsContext)

    return(
        <>
            <div className="navContainer">
                <div className={showReviewType ? "reviewFilterOpen" : "reviewFilter"}>
                    <div className="revFilterTitle" onMouseEnter={() => setShowReviewType(true)} onMouseLeave={() => setShowReviewType(false)}>REVIEW TYPE</div>
                    
                    

                </div>
                <div className={showPurchaseType ? "reviewFilterOpen" : "reviewFilter"}>
                    <div className="revFilterTitle" onMouseEnter={() => setShowPurchaseType(true)} onMouseLeave={() => setShowPurchaseType(false)}>PURCHASE TYPE</div>

                </div>
                <div className={showLanguage ? "reviewFilterOpen" : "reviewFilter"}>
                    <div className="revFilterTitle" onMouseEnter={() => setShowLanguage(true)} onMouseLeave={() => setShowLanguage(false)}>LANGUAGE</div>

                </div>
                <div className="reviewFilter">
                    <div className="revFilterTitle" >DATE RANGE</div>

                </div>
                <div className="reviewFilter">
                    <div className="revFilterTitle">PLAYTIME</div>

                </div>
                <div className="reviewDisplayAs">
                    <span className="reviewDisplaySpan">DISPLAY AS:</span>
                    <select className="reviewContext">
                        <option className="revOptions">Summary</option>
                        <option className="revOptions">Most Helpful</option>
                        <option className="revOptions">Recent</option>
                        <option className="revOptions">Funny</option>
                    </select> 

                </div>                
                <div className="showGraphContainer">
                    <span className="showGraphBtn" >
                        <span className="showGraphBtnText" >Show graph</span>
                        <div className="showGraphIcon"></div>
                    </span>
                </div>
            </div>
            <div className={showReviewType ? "flyOutOpen" : "flyOut"} onMouseEnter={() => setShowReviewType(true)} onMouseLeave={() =>setShowReviewType(false)}>
                <div className="flyContainer">
                    <input type="radio"className="flyInput"  name="reviewType"></input>
                    <label className="flyLabel">
                        All
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                    <input type="radio" className="flyInput" name="reviewType"></input>
                    <label className="flyLabel">
                        Positive
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                    <input type="radio" className="flyInput" name="reviewType"></input>
                    <label className="flyLabel">
                        Negative
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                </div>
            </div>
            <div className={showPurchaseType ? "flyOutOpen2" : "flyOut2"} onMouseEnter={() => setShowPurchaseType(true)} onMouseLeave={() => setShowPurchaseType(false)}>
                <div className="flyContainer">
                    <input type="radio" className="flyInput" name="reviewType"></input>
                    <label className="flyLabel">
                        All
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                    <input type="radio" className="flyInput" name="reviewType"></input>
                    <label className="flyLabel">
                        Steam Purchasers
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                    <input type="radio" className="flyInput" name="reviewType"></input>
                    <label className="flyLabel">
                        Other
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                </div>
            </div>
            <div className={showLanguage ? "flyOutOpen3" : "flyOut3"} onMouseEnter={() => setShowLanguage(true)} onMouseLeave={() => setShowLanguage(false)}>
                <div className="flyContainer">
                    <input type="radio" className="flyInput" name="reviewType"></input>
                    <label className="flyLabel">
                        All languages
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                    <input type="radio" className="flyInput" name="reviewType" checked></input>
                    <label className="flyLabel">
                        Your languages
                        <span className="flySpan">{numOfReviews}</span>
                    </label>
                    <br></br>
                    <div className="flyRD">
                        <a href="https://store.steampowered.com/login/?redir=account%2Flanguagepreferences&redir_ssl=1" className="flyAtag">Customize</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReviewNavBar