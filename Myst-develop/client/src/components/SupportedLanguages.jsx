import React, {useState} from "react";
import { useGameLanguages } from "../hooks/UseGameLanguages";
import "/src/styles/SuportedLanguages.css"

function SupportedLanguages(){
    const [showExpanded, setShowExpanded] = useState(false);
    const languages = useGameLanguages();
    const displayedLanguages = showExpanded ? languages : languages.slice(0, 5);

    return(
        <div className="lContainer">
            <div className="lHeader">Languages: </div>
            <div className="lTable">
                <div className="lOptions">
                    <table className="laTable">
                    <tbody>
                        <tr className="topContainer">
                            <th className="thLeftBox"></th>
                            <th className="thInterface">Interface</th>
                            <th className="thAudio">FullAudio</th>
                            <th className="thSubtitles">Subtitles</th>  
                        </tr>
                        {displayedLanguages.map((language, index) => (
                            <tr className="row" key={index}>
                                <td className="lName">{language}</td>
                                <td className="check">
                                    <span>✔</span>
                                </td>
                                <td className="check">
                                    <span>✔</span>
                                </td>
                                <td className="check"></td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                {showExpanded || (
                    <a className="lExpand" onClick={() => setShowExpanded(true)}>
                        See all 8 supported languages
                    </a>
                )}
            </div>
        </div>
    )
}
export default SupportedLanguages;