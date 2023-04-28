import { useState, createContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showEmbedModal, setShowEmbedModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showCat, setShowCat] = useState(false);
    const [showYourStore, setShowYourStore] = useState(false);
    const [showNewAndNoteWorthy, setShowNewAndNoteWorthy] = useState(false)
    const [showCategories,setShowCategories] = useState(false)

    const handleShareClick = () => {
        setShowShareModal(true);
    }
    const handleCloseShareModal = () => {
        setShowShareModal(false);
    }
    const handleEmbedClick = () => {
        setShowEmbedModal(true);
    }
    const handleCloseEmbedModal = () => {
        setShowEmbedModal(false);
    }
    const handleReportClick = () => {
        setShowReportModal(true);
    }
    const handleCloseReportModal = () => {
        setShowReportModal(false);
    }
    const handleClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleCatMouseOver = () => {
        setShowCat(true)
    }
    const handleCatMouseExit = () =>{
        setShowCat(false);
    }
    const handleYourStoreMouseOver = () => {
        setShowYourStore(true)
    }
    const handleYourStoreMouseExit = () =>{
        setShowYourStore(false);
    }

    const handleNewAndNoteWorthyMouseOver = () =>{
        setShowNewAndNoteWorthy(true)
    }

    const handleNewAndNoteWorthyMouseExit = () =>{
        setShowNewAndNoteWorthy(false)
    }

    const handleCategoriesMouseExit = () => {
        setShowCategories(false)
    }

    
    const handleCategoriesMouseOver = () => {
        setShowCategories(true)
    }




    return( <ModalContext.Provider value={{
        showShareModal,
        showEmbedModal,
        handleShareClick,
        handleCloseShareModal,
        handleEmbedClick,
        handleCloseEmbedModal,
        showReportModal,
        handleReportClick,
        handleCloseReportModal,
        showModal,
        handleClick,
        handleCloseModal,
        showCat,
        handleCatMouseOver,
        handleCatMouseExit,
        handleYourStoreMouseOver,
        handleYourStoreMouseExit,
        showYourStore,
        showNewAndNoteWorthy,
        handleNewAndNoteWorthyMouseOver,
        handleNewAndNoteWorthyMouseExit,
        showCategories,
        handleCategoriesMouseOver,
        handleCategoriesMouseExit
    
}}>
        {children}
    </ModalContext.Provider>
    )
}
export default ModalContext

