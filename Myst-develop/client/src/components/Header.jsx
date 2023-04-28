import React, { useState } from "react";
import "../styles/Header.css";

const storeDropDown = [
  "HOME",
  "DISCOVERY QUEUE",
  "WISHLIST",
  "POINTS SHOP",
  "NEWS",
  "STATS",
];
const communityDropDown = [
  "HOME",
  "DISCUSSION",
  "WORKSHOP",
  "MARKET",
  "BROADCASTS",
];
const languagesDropDown = [
  "简体中文 (Simplified Chinese)",
  "繁體中文 (Traditional Chinese)",
  "日本語 (Japanese)",
  "한국어 (Korean)",
  "ไทย (Thai)",
  "Български (Bulgarian)",
  "Čeština (Czech)",
  "Dansk (Danish)",
  "Deutsch (German)",
  "Español - España (Spanish - Spain)",
  "Español - Latinoamérica (Spanish - Latin America)",
  "Ελληνικά (Greek)",
  "Français (French)",
  "Italiano (Italian)",
  "Magyar (Hungarian)",
  "Nederlands (Dutch)",
  "Norsk (Norwegian)",
  "Polski (Polish)",
  "Português (Portuguese - Portugal)",
  "Português - Brasil (Portuguese - Brazil)",
  "Română (Romanian)",
  "Русский (Russian)",
  "Suomi (Finnish)",
  "Svenska (Swedish)",
  "Türkçe (Turkish)",
  "Tiếng Việt (Vietnamese)",
  "Українська (Ukrainian)",
  "Report a translation problem",
];

const DropDowns = ({ dropDownList, handleDropdownClick }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleDropdownClick(event);
  };




  const renderDropDownList = dropDownList.map((listItem, index) => (
    <option key={index}>{listItem}</option>
  ));

  return (
    <>
      <select onClick={handleDropdownClick} value={selectedOption} onChange={handleChange}>
        {renderDropDownList}
      </select>
    </>
  );
};



const HeaderTextButtons = ({
  text,
  showDropdown,
  listDisplayed,
  id,
  className,
  dropdownTrigger = "hover",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (dropdownTrigger === "hover") {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (dropdownTrigger === "hover") {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (dropdownTrigger === "click") {
      setIsOpen(!isOpen);
    }
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: "relative", display: "inline-block" }}
    >
      <a type="submit" id={id} className={className}>
        {text}
      </a>
      {showDropdown && isOpen && (
        <div style={{ position: "absolute", left: 0, top: "100%" }}>
          <DropDowns dropDownList={listDisplayed} handleDropdownClick={handleDropdownClick} />
        </div>
      )}
    </div>
  );
};

function Header() {
  return (
    <div id="global_header">
      <div className="content">
        <div className="logo">
          <div id="logo">
            <img className="logos"
              src="https://cdn.discordapp.com/attachments/1093286027059282142/1095097436701200546/MYST-gray-brown-logo-small.png"
              alt="Steam Logo"
            />{" "}
          </div>
        </div>
        <div className="supernav_container">
          <HeaderTextButtons
            className="menu_item"
            text="STORE"
            showDropdown={true}
            listDisplayed={storeDropDown}
            dropdownTrigger="hover"
          />
          <HeaderTextButtons
            className="menu_item"
            text="COMMUNITY"
            showDropdown={true}
            listDisplayed={communityDropDown}
            dropdownTrigger="hover"
          />
          <HeaderTextButtons className="menu_item" text="ABOUT" />
          <HeaderTextButtons className="menu_item" text="SUPPORT" />
        </div>
        <div id="global_action_menu_id">
          <HeaderTextButtons className="global_action_menu" text="Install Steam" id="install-steam" />
          <HeaderTextButtons className="global_action_menu" text="login" id="login" />
          &nbsp;|&nbsp;
          <HeaderTextButtons
            className="global_action_menu"
            text="language &#x25BC;"
            id="languages"
            showDropdown={true}
            listDisplayed={languagesDropDown}
            dropdownTrigger="click"
          />
        </div>
      </div>
    </div>
  )};


export default Header;
