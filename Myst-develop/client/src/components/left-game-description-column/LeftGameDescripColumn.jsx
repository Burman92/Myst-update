import React, { useContext } from 'react';
import GameDescriptionArea from '../left-game-description-column/left-game-descrip-area/GameDescriptionArea';
import AboutThisGame from './AboutThisGame';
// import CommunityMods from './CommunityMods';
// import ContentForThisGame from './ContentForThisGame';
import FranchiseHighlight from './FranchiseHighlight';
// import MoreFromHalfLife from './MoreFromHalfLife';
// import MoreLikeThis from './MoreLikeThis';
import SystemRequirements from './SystemRequirements';
import WhatCuratorsSay from './WhatCuratorsSay';
import './styles/LeftGameDescripColumn.css'

function LeftGameDescripColumn() {
    return (
        <div className='leftcol game_description_column'>
            <FranchiseHighlight />
            <div className='game_area_purchase'>
                <GameDescriptionArea />
            </div>
            <AboutThisGame />
            <SystemRequirements />
            <WhatCuratorsSay />

            {/* Unfinished components */}
            {/* <CommunityMods />
            <MoreFromHalfLife />
            <MoreLikeThis /> */}
        </div>
    )
}

export default LeftGameDescripColumn;