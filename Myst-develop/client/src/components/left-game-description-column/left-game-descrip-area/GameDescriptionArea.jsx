import React, { useContext } from 'react';
import BuyHalfLife from './BuyHalfLife';
import ContentForGame from './ContentForGame';
import PurchaseBundle1 from './PurchaseBundle1';
import PurchaseBundle2 from './PurchaseBundle2';
import PurchaseBundle3 from './PurchaseBundle3';

function GameDescriptionArea() {
    return (
            <div className='game_area_purchase' id='game_area_purchase'>
            <BuyHalfLife />
            <PurchaseBundle1 />
            <PurchaseBundle2 />
            <PurchaseBundle3 />
            <ContentForGame />
            </div>
    )
}

export default GameDescriptionArea;