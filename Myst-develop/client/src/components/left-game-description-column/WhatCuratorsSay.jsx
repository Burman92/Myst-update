import React, { useContext } from "react";
import "/src/styles/WhatCuratorsSay.css";

function Curator() {
  return (
    <div className="curator-box">
      <div>
        <div>
          <a className="game_description_column-view-all" href="">
            View All
          </a>
        </div>
        <h2 className="wcs-heading">What Curators say
          <div className='wcsBar'></div>
        </h2>
        <div cr-box>
          <div className="curator-review">
          1,599 Curators have reviewed this product. Click
          <a href="" className='wcsHere'> here </a>
          to see them
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Curator;
