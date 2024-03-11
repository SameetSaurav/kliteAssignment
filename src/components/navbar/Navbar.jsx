import React, { useState } from 'react'
import './navbar.css'
import Table from '../table/Table';

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpenSetting(!isOpen);
  };


  return (
    <>
    <nav className="navbar">
      <div className="navbar__heading"><b>Products</b></div>
      <div className="navbar__right">
        <div className="navbar__search">
          <i className="fa-solid fa-magnifying-glass navbar__searchIcon "></i>
          <input type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // onChange={(e) => {setSearchQuery(e.target.value), filterResults(e.target.value)}}
          placeholder="Search..." 
          />
        </div>

        {/* Chat Button */}
        <button className="navbar__button" onClick={toggleChat}>
          <i className="fa-regular fa-comments"></i>
          {isOpen && (
            <div className="dialogue-box">
              <div className="chat-header">Chat</div>
              <div className="chat-messages">
                {/* Display chat messages here */}
                <div className="message">Hello!</div>
                <div className="message">How can I help you?</div>
              </div>
              <input type="text" className="chat-input" placeholder="Type your message..." />
              <button className="send-button">Send</button>
            </div>
          )}
        </button>

        {/* Setting Button */}
        <div className="dropdown">
          <button className="navbar__button" onClick={toggleDropdown}>
            <i className="fa-solid fa-gear"></i>
          </button>
          {isOpenSetting && (
              <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
        </div>
      </div>
    </nav>
    <Table data={searchQuery}/>
    
    </>
  )
}

export default Navbar