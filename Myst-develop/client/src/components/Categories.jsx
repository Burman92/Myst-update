import React, { useContext } from "react";
import "../styles/Categories.css";
import ModalContext from "../context/ModalContext";

function Categories() {
  const {handleCatgeoriesMouseOver} = useContext(ModalContext)
  const {handleCatgeoriesMouseExit} = useContext(ModalContext)

  
  return (
    <div
      className="popUpContainerCategories"
      onMouseEnter={handleCatgeoriesMouseOver}
      onMouseLeave={handleCatgeoriesMouseExit}
    >
      
      <div className="special-column">
      <div className="category-group"> SPECIAL SECTIONS </div>
        <a href="#" className="item">
          Free to play
        </a>
        <a href="#" className="item">
          Demos
        </a>
        <a href="#" className="item">
          Early Access
        </a>
        <a href="#" className="item">
          Controller Friendly
        </a>
        <a href="#" className="item">
          Remote Play
        </a>
        <a href="#" className="item">
          Software
        </a>
        <a href="#" className="item">
          Soundtracks
        </a>
        <a href="#" className="item">
          VR Titles
        </a>
        <a href="#" className="item">
          VR Hardware
        </a>
        <a href="#" className="item">
          Steam Deck
        </a>
        <a href="#" className="item">
          Great on Deck
        </a>
        <a href="#" className="item">
          macOS
        </a>
        <a href="#" className="item">
          SteamOS + Linux
        </a>
        <a href="#" className="item">
          For PC Cafes
        </a>
      </div>

      
      <div className="genre-column">
      <div className="category-group"> GENRES </div>
        <div className="sub-genre-divide">
        <a href="#" className="sub-genre">
          Action </a>
          <a href="#" className="item">
            Arcade & Rythym
          </a>
          <a href="#" className="item">
            Fighting & Martial Arts
          </a>
          <a href="#" className="item">
            First-Person Shooter
          </a>
          <a href="#" className="item">
            Hack & Slash
          </a>
          <a href="#" className="item">
            Platformer & Runner
          </a>
          <a href="#" className="item">
            Third-Person Shooter
          </a>
          <a href="#" className="item">
            shmup
          </a>
        </div>
        

        
        
        <div className="sub-genre-divide">
        <a href="#" className="sub-genre">
          Adventure </a>
          <a href="#" className="item">
            Adventure RPG
          </a>
          <a href="#" className="item">
            Casual
          </a>
          <a href="#" className="item">
            Hidden Object
          </a>
          <a href="#" className="item">
            Metroidvania
          </a>
          <a href="#" className="item">
            Puzzle
          </a>
          <a href="#" className="item">
            Story-Rich
          </a>
          <a href="#" className="item">
            Visual Novel
          </a>
        </div>
        

       
        
        <div className="sub-genre-divide">
        <a href="#" className="sub-genre">
          Role-Playing   </a>
          <a href="#" className="item">
            Action RPG
          </a>
          <a href="#" className="item">
            Adventure RPG
          </a>
          <a href="#" className="item">
            JRPG
          </a>
          <a href="#" className="item">
            Party-Based
          </a>
          <a href="#" className="item">
            Rogue-Like
          </a>
          <a href="#" className="item">
            Strategy RPG
          </a>
          <a href="#" className="item">
            Turn-Based
          </a>
        </div>
      

      
        <div className="sub-genre-divide">
        <a href="#" className="sub-genre">
          Simulation   </a>
          <a href="#" className="item">
            Building & Animation
          </a>
          <a href="#" className="item">
            Dating
          </a>
          <a href="#" className="item">
            Farming & Crafting
          </a>
          <a href="#" className="item">
            Hobby & Job
          </a>
          <a href="#" className="item">
            Life & Immersive
          </a>
          <a href="#" className="item">
            Sandbox & Physics
          </a>
          <a href="#" className="item">
            Space & Flight
          </a>
        </div>
      

    
        <div className="sub-genre-divide">
        <a href="#" className="sub-genre">
          Strategy </a>
        
          <a href="#" className="item">
            Card & Board
          </a>
          <a href="#" className="item">
            City & Settlement
          </a>
          <a href="#" className="item">
            Grand & 4X
          </a>
          <a href="#" className="item">
            Military
          </a>
          <a href="#" className="item">
            Real-Time Strategy
          </a>
          <a href="#" className="item">
            Tower Defense
          </a>
          <a href="#" className="item">
            Turn-Based Strategy
          </a>
        </div>
        

      
        <div className="sub-genre-divide">
        <a href="#" className="sub-genre">
          Sports & Racing </a>
          <a href="#" className="item">
            All Sports
          </a>
          <a href="#" className="item">
            Fishing & Hunting
          </a>
          <a href="#" className="item">
            Individual Sports
          </a>
          <a href="#" className="item">
            Racing
          </a>
          <a href="#" className="item">
            Racing Sim
          </a>
          <a href="#" className="item">
            Sports Sim
          </a>
          <a href="#" className="item">
            Team Sports
          </a>
        </div>
        
      </div>
      

      
      <div className="support-theme-column">
      <div className="category-group">THEMES </div>
        <a href="#" className="item">
          Anime
        </a>
        <a href="#" className="item">
          Horror
        </a>
        <a href="#" className="item">
          Mystery & Detective
        </a>
        <a href="#" className="item">
          Open World
        </a>
        <a href="#" className="item">
          Sci-Fi & Cyberpunk
        </a>
        <a href="#" className="item">
          Space
        </a>
        <a href="#" className="item">
          Survival
        </a>

      
      <div className="category-group">PLAYER SUPPORT </div>
        <a href="#" className="item">
          Co-Operative
        </a>
        <a href="#" className="item">
          LAN
        </a>
        <a href="#" className="item">
          Local & Party
        </a>
        <a href="#" className="item">
          MMO
        </a>
        <a href="#" className="item">
          Multiplayer
        </a>
        <a href="#" className="item">
          Online Competitive
        </a>
        <a href="#" className="item">
          Singleplayer
        </a>
      </div>
    </div>
  );
}

export default Categories;
