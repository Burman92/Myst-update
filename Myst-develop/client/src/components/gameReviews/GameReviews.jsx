import React from "react";
import Header from "./Header";
import "/src/components/gameReviews/styles/GameReviews.css"
import ReviewNavBar from "./ReviewNavBar";
import { UseReviewData } from "../../hooks/UseReviewData";

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate.toUpperCase();
}

function GameReviews(){
    const { reviewsArray } = UseReviewData()
    const currentDate = new Date();
    const thirtyDaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);

    const filteredReviews = reviewsArray.filter(review => {
        const reviewDate = new Date(review.created_at);
        return reviewDate >= thirtyDaysAgo && reviewDate <= currentDate;
    });

    const sortedReviews = filteredReviews.sort((a, b) => b.helpfulcount - a.helpfulcount);

    const topTenReviews = sortedReviews.slice(0, 10);
    console.log(reviewsArray);
    return(
        
        <div className="grPage">
            <div className="grPageContent">
                <div className="grContainer">
                    <Header />
                    <ReviewNavBar />
                    <div className="revFilterBox">
                        <div className="selectedRevFilters">
                            <div className="revFilterTitless">Filters</div>
                            <div className="activeYourLanguages">Your Languages</div>
                        </div>
                        <div className="showingResultsContainer">
                            <div>
                                <span className="spannySpanSpan">
                                    Showing
                                    <b> {reviewsArray.length} </b>
                                    reviews that match the filters above
                                </span>
                                (
                                    <span className="reviewsOverwhelminglyPositive">
                                         Overwhelmingly Positive 
                                    </span>
                                )
                            </div>
                        </div>
                    </div>
                    <div className="leftReviewColumn">
                        <div className="leftReviewHeader">
                            Most Helpful Reviews
                            <span className="leftReviewHeaderSpan">In the past 30 Days</span>
                        </div>
                    {topTenReviews.map((review, index) => (
                        <div key={index }className="reviewBox">
                            <div className="rmTopBar"></div>
                            <div className="reviewContents">
                                <div className="reviewer">
                                    <div className="reviewerAvatar">
                                        <a href="" className="revPic">
                                            <div className="revPicBoarder">
                                                <img className="revActualPic" src={review.image} alt="broken"></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="reviewerName">
                                        <a href="" className="revName">{review.name}</a>
                                    </div>
                                    <div className="reviewerOwnedGames">
                                        <a href="" className="revOwnedGames">{review.gamesowned} games owned</a>
                                    </div>
                                    <div className="reviewerReviewCount">
                                        <a href="" className="revReviewCount">{review.reviewcount} reviews!</a>
                                    </div>
                                </div>
                                <div className="reviewersReview">
                                    <a href="" className="revToolTip">
                                        <div className="thumb">
                                            <img className="thumbsUp" src={review.recommended ? "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png" : "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png"} alt="thumb image"/>
                                            {/* <img className="activedBy" src=""></img> */}
                                        </div><div className="reviewStatusTitle">{review.recommended ? "Recomended" : "Not Recomended"}</div>
                                        <div className="reviewHoursOnRecord">{review.hours_played} hours played</div>
                                        
                                    </a>
                                    <div></div>
                                    <div className="dateOfReview">POSTED {formatDate(review.created_at)}</div>
                                    <div className="theActualReview">{review.review}</div>
                                    <div className="reviewGradiant"></div>
                                    <div className="reviewHr"></div>
                                    <div className="reviewControls">
                                        <span className="controllerSpan">Was this review helpful?</span>
                                        <div className="votingContainer">
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <i className="yesI"></i>
                                                     Yes
                                                </span>
                                            </a>
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <i className="noI"></i>
                                                     No
                                                </span>
                                            </a>
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <i className="funnyI"></i>
                                                     Funny
                                                </span>
                                            </a>
                                            <a className="voteYes">
                                                <span className="voteSpan">
                                                    <img className="awardI" src="https://store.akamai.steamstatic.com/public/shared/images//award_icon.svg" alt="award"></img>
                                                     Award
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="votingInfo">
                                        {review.helpfulcount} people found this review helpful
                                        <br></br>
                                        {review.funnycount} people found this review funny
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}    
                    </div>
                    <div className="rightReviewColumn">
                        <div className="rightSubRevHeader">
                            Recently Posted
                        </div>
                        {reviewsArray.sort((a, b) => {
                            if (a.created_at > b.created_at) return -1; // sort by latest created_at first
                            if (a.created_at < b.created_at) return 1;
                            return 0;
                        }).slice(0, 5).map((review, index) => (
                        <div key={index} className="rightColumnReviewBox">
                            <div className="rightReviewContent">
                                <a href="" className="rightReviewHeader">
                                <div className="rightThumb">
                                            <img className="rightThumb" src={review.recommended ? "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png" : "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png"} alt="thumb image"></img>
                                </div>
                                <div className="rightName">
                                    <span className="rightNameSpan">{review.name}</span>
                                </div>
                                    <div className="rightHours">{review.hours_played} hrs</div>
                                    <img className="rightReviewSrc" src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_review_steam.png" alt="stream logo"></img>

                                </a>
                                <div className="rightReviewBox">
                                    <div className="rightPostedDate">Posted: {formatDate(review.created_at)}</div>
                                    <div className="rightActualContent">
                                            {review.review}
                                    </div>
                                    <div className="rightWeirdLine"></div>
                                    <div className="rightControlBox">
                                        <span className="helpfulRight">Helpful?</span>
                                        <div className="rightButtons">
                                            <a href="" className="rightATag">
                                                <span>
                                                    <i className="rightYes"></i>
                                                    Yes
                                                </span>
                                            </a>
                                            <a href="" className="rightATag">
                                                <span>
                                                    <i className="rightNo"></i>
                                                    No
                                                </span>
                                            </a>
                                            <a href="" className="rightATag">
                                                <span>
                                                    <i className="rightFunny"></i>
                                                    Funny
                                                </span>
                                            </a>
                                            <a href="" className="rightATag">
                                                <span>
                                                    <img src="https://store.akamai.steamstatic.com/public/shared/images//award_icon.svg" className="rightAward" alt="award"></img>
                                                    Award
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        ))} 
                    </div>
                </div>            
                <div className="browseAllRevs">
                    <a href="https://steamcommunity.com/app/70/reviews/?browsefilter=toprated&snr=1_5_100010_" className="browsingSpan">
                        Browse all {reviewsArray.length} reviews
                    </a>
                </div>
            </div>

        </div>
       
    )
}

export default GameReviews