import { useState, useContext } from 'react';
import GameDescription from './components/GameDescription'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import GameMetaData from './components/GameMetaData';
import ShareModal from './components/ShareModal';
import EmbedModal from './components/EmbedModal';
import ModalContext from './context/ModalContext';
import LeftGameDescripColumn from './components/left-game-description-column/LeftGameDescripColumn'
import Footer from './components/Footer';
import "./styles/App.css"
import ReportModal from './components/ReportModal';
import TagModal from "./components/TagModal";
import NavBarBM from './components/NavBarBM';
import YourStoreModal from './components/YourStoreModal';
import NewAndNoteWorthy from './components/NewAndNoteworthy';
import Categories from './components/Categories'
import GameReviews from './components/gameReviews/GameReviews';
import projimg1 from '../images/projimg1.webp';
import projimg2 from '../images/projimg2.webp';
import projimg3 from '../images/projimg3.webp';
import projimg4 from '../images/projimg4.webp';
import projimg5 from '../images/projimg5.webp';
import projimg6 from '../images/projimg6.webp';


const images = [
  `${projimg1}`,
  `${projimg2}`,
  `${projimg3}`,
  `${projimg4}`,
  `${projimg5}`,
  `${projimg6}`
];

function App() {
  //used to handle state of the Share modal
  const { showShareModal, showEmbedModal, showReportModal, showModal, showYourStore, showNewAndNoteWorthy, showCategories} = useContext(ModalContext)

  return (
  <>  
    <div className="background">
     
      <div>
       
      </div>
      
      <div className="picture">
         <Header />
          <NavBarBM />
        
        <div className="app">
        
          <div className="backgroundGlow">
           
            <div className="carousel-and-content">
              <ImageCarousel images={images} />
              <div className="game-description-wrapper">
                <GameDescription />
              </div>
            </div>
            <div className="signInPleaseContainer">
              <div className="signInSubContainer">
                <p className="signInPTag">
                  <a className="signInATag">
                    Sign in
                  </a>
                  <a> to add this item to your wishlist, follow it, or mark it as ignored</a>
                </p>
              </div>
            </div>
          </div>
          <div className="page_content">
            <GameMetaData />
            <LeftGameDescripColumn />
          </div>
          
          {showShareModal && <ShareModal />}
          {showEmbedModal && <EmbedModal />}
          {showReportModal && <ReportModal />}
          {showModal && <TagModal />}
          {showYourStore && <YourStoreModal />}
          {showNewAndNoteWorthy && <NewAndNoteWorthy />}
          {showCategories && <Categories/>}
         
        </div>
        <GameReviews /> 
        <div>
          <Footer />
          
        </div>
      </div>
    </div>
  </>
  );
}


export default App
