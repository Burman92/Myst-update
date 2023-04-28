import React, {useContext} from "react";
import ModalContext from "../context/ModalContext";
import "/src/styles/ReportModal.css"

function ReportModal() {
    const {handleCloseReportModal} = useContext(ModalContext);

    return(
        <div className="rm">
            <div className="rmTopBar"></div>
            <div className="rmHeaderBoarder">
                <div className="rmHeader">
                    <div className="rmX" onClick={handleCloseReportModal}></div>
                    <div className="rmTitle">Report this product</div>
                </div>
            </div>
            <div className="rmContentBoarder">
                <div className="rmContent">
                    
                        <div className="rmReportDialog">
                            <div className="rmIntro">Please choose a reason why you are reporting this product.</div>
                            <div className="rmOption">
                                <div className="rmInput">
                                    <input className="rmBuble" type="radio" id="1"></input>
                                </div>
                                <div className="rnInputText">
                                    <label className="rmLabel" for="1">
                                        Child Exploitation -
                                        <span className="rmOptionText">
                                            Contains content that exploits children in any way
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="rmOption">
                                <div className="rmInput">
                                    <input className="rmBuble" type="radio" id="2"></input>
                                </div>
                                <div className="rnInputText">
                                    <label className="rmLabel" for="2">
                                        Broken -
                                        <span className="rmOptionText">
                                            Does not download, launch, or run correctly, even on a machine that meets the minimum system requirements.
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="rmOption">
                                <div className="rmInput">
                                    <input className="rmBuble" type="radio" id="3"></input>
                                </div>
                                <div className="rnInputText">
                                    <label className="rmLabel" for="3">
                                        Defamatory -
                                        <span className="rmOptionText">
                                            Contains Libelous or defamatory statements
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="rmOption">
                                <div className="rmInput">
                                    <input className="rmBuble" type="radio" id="4"></input>
                                </div>
                                <div className="rnInputText">
                                    <label className="rmLabel" for="4">
                                        Harmful -
                                        <span className="rmOptionText">
                                            This software modifies a customer's computer in unexpected or harmful ways (e.g. is malware or a virus)
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="rmOption">
                                <div className="rmInput">
                                    <input className="rmBuble" type="radio" id="5"></input>
                                </div>
                                <div className="rnInputText">
                                    <label className="rmLabel" for="5">
                                        Legal Violation -
                                        <span className="rmOptionText">
                                            Contains content that violates the laws in your jurisdiction
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="rmOption">
                                <div className="rmInput">
                                    <input className="rmBuble" type="radio" id="6"></input>
                                </div>
                                <div className="rnInputText">
                                    <label className="rmLabel" for="6">
                                        Adult Content -
                                        <span className="rmOptionText">
                                            Contains adult content that isn't appropriately labeled and age-gated
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="rmOption">
                                <div className="rmInput">
                                    <input className="rmBuble" type="radio" id="7"></input>
                                </div>
                                <div className="rnInputText">
                                    <label className="rmLabel" for="7">
                                        Fraud -
                                        <span className="rmOptionText">
                                            This software fraudulently attempts to gather sensitive information, such as your Steam credentials or financial data (e.g. credit card information).
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="rmIntro">You may enter additional information that you feel is relevant here:</div>
                            <textarea className="rmTextBox"></textarea>
                            <div className="rmCopyRight">
                                If you'd like to report Copyright Infringement and are the copyright holder, please proceed to our DMCA compliant notice of copyright infringement form
                                <a className="rmATag" href="https://steamcommunity.com/dmca/create/">here</a>.
                            </div>
                            <div className="rmCopyRight">
                                If you'd like to file a Trademark complaint, please fill out the form
                                <a className="rmATag" href="https://steamcommunity.com/trademark/createtrademarkcomplaint/">here</a>.
                            </div>
                        </div>
                    
                    <div className="rmFooter">
                        <div className="rmRBtn" onClick={handleCloseReportModal}>
                            <span className="rmSpan">Report</span>
                        </div>
                        <div className="rmCancelBtn" onClick={handleCloseReportModal}>
                            <span className="rmSpan">Cancel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReportModal;