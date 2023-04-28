import React from "react";
import "/src/components/gameReviews/styles/Header.css"
import { UseReviewData } from "../../hooks/UseReviewData";

function Header(){
    const { numOfReviews } = UseReviewData();
    return(
        <>
            <h2 className="headerH2">CUSTOMER REVIEWS</h2>
            <div className="grAtGlace">
                <div className="overAllReviews">
                    <div className="sumBar">
                        <div className="sumSection">
                            <div className="overallTitle">
                                Overall Reviews:
                            </div>
                            <span className="overallSpan">
                                Overwhelmingly Positive
                            </span>
                            <span className="overallAmount">
                                ({numOfReviews})
                            </span>
                            <a className="overallToolTip">
                                <img className="oatooltipimg" src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png" alt="idk"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="recentReviews">
                    <div className="rrsumBar">
                        <div className="rrsumSection">
                            <div className="overallTitle">
                                Recent Reviews:
                            </div>
                            <span className="overallSpan">
                                Overwhelmingly Positive
                            </span>
                            <span className="overallAmount">
                                ({numOfReviews})
                            </span>
                            <a className="overallToolTip">
                                <img className="oatooltipimg" src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png" alt="tool tip"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header