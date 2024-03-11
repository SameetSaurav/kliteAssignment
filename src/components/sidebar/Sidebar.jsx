import React, { useState } from 'react';
import './sidebar.css';
import logo from "../../assets/logo.png";
import profileImg from "../../assets/profile.avif";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const data = [
        {name: "Products"},
        {name: "Sales"},
        {name: "Design"},
    ]

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };

    return (
        <div id="menu">
            <div className="logo">
                <img src={logo} alt=""/>
                <span>
                    INC <br/> 
                    <b>InnovateHub</b>
                </span> 
                <img className="profileImg" src={profileImg} alt=""/>
            </div>

            <div className="items">
                <div className="itemsContainer">
                    <div className="itemsTop">
                        <li>
                            <a href="/design"><i className="fa-solid fa-pen-nib"></i><b>Design Team</b></a>
                            <span className="menuX">
                                x + 1
                            </span>
                        </li>
                        <li>
                            <a href="/marketing"><i className="fa-solid fa-bullhorn"></i><b>Marketing Team</b></a>
                            <span className="menuX">
                                x + 2
                            </span>
                        </li>
                        <li>
                            <a href="/development"><i className="fa-solid fa-code"></i><b>Development Team</b></a>
                            <span className="menuX">
                                x + 3
                            </span>
                        </li>
                        {/* <div className="createTab" style="border-top: 1px solid rgb(202, 201, 201);"> */}
                        <div className="createTab">
                            <i className="fa-solid fa-plus" ></i>
                            Create a tab
                        </div>
                    </div>
                
                    <div className="itemsBottom">
                        {data.map((btn,index)=>(
                            <div key={index} className="dropdown-container">
                                <button onClick={toggleDropdown}>
                                    <div>
                                        <i className="fa-regular fa-folder"></i>
                                        <span><b>{btn.name}</b></span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </div>
                                </button>
                                {isOpen && (
                                    <div id="myDropdown" className="dropdown-content">
                                        <a href="#">Roadmap</a>
                                        <a href="#">Feedback</a>
                                        <a href="#">Performance</a>
                                        <a href="#">Team</a>
                                        <a href="#">Analytics</a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="footer">
                        <li><i className="fa-solid fa-user-plus"></i>Invite Teammates</li>
                        <li><i className="fa-solid fa-circle-info"></i>Help and first steps</li>
                        <span>
                            7 days left on trial
                            <button>Add billing</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
