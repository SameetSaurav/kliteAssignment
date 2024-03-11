import React, { useEffect, useState } from 'react';
import './table.css'
import google from "../../assets/google.jpg"
import wix from "../../assets/wix.png"
import disney from "../../assets/disney.png"
import evernote from "../../assets/evernote.png"
import intercom from "../../assets/intercom.png"
import invison from "../../assets/invison.png"
import mainchimp from "../../assets/mainchimp.png"
import microsoft from "../../assets/microsoft.png"
import paypal from "../../assets/paypal.png"
import shopify from "../../assets/shopify.png"
import profileImg from "../../assets/profile.avif"

const Table = ({ data }) => {

  const [selectedRows, setSelectedRows] = useState([]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleCheckboxClick = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((item) => item !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const isRowSelected = (index) => {
    return selectedRows.includes(index);
  };

  const tableData = [
    {
      brand: 'Wix',
      imgSrc: wix,
      description: 'Develop a personalized app',
      members: [profileImg,profileImg,profileImg,profileImg],
      categories: ['Automation'],
      tags: ['#DigitalTransformation'],
      nextMeeting: 'In 30 minutes'
    },
    {
      brand: 'Shopify',
      imgSrc: shopify,
      categories: ['E-commerce', 'B2B'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#OnlineShopping', '#DigitalShopping'],
      nextMeeting: 'Tomorrow'
    },
    {
      brand: 'MailChimp',
      imgSrc: mainchimp,
      categories: ['SAAS', 'Mobile'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#TechInovation',"#Cloud"],
      nextMeeting: 'Tomorrow'
    },
    {
      brand: 'PayPal',
      imgSrc: paypal,
      categories: ['Mrketplace'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#BuySaleOnline'],
      nextMeeting: 'In 6 hours'
    },
    {
      brand: 'Disney',
      imgSrc: disney,
      categories: ['B2B','B2C'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#BussinessPartnership'],
      nextMeeting: 'No contact'
    },
    {
      brand: 'Intercom',
      imgSrc: intercom,
      categories: ['Technology', 'SAAS'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#SmartFinance', '#Saas'],
      nextMeeting: 'In 1 hour'
    },
    {
      brand: 'Google',
      imgSrc: google,
      categories: ['Finance', 'Automation'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#SmartFinance','#WorldFinance'],
      nextMeeting: 'In 30 minutes'
    },
    {
      brand: 'Evernote',
      imgSrc: evernote,
      categories: ['Transportation'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand Bz,f',
      tags: ['#Logistics', "#ux"],
      nextMeeting: 'Next month'
    },
    {
      brand: 'Microsoft',
      imgSrc: microsoft,
      categories: ['Publishing', 'B2C'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#B2cMarketing'],
      nextMeeting: 'No contact'
    },
    {
      brand: 'Invasion',
      imgSrc: invison,
      categories: ['Technology', 'SAAS'],
      members: [profileImg,profileImg,profileImg,profileImg],
      description: 'Description of Brand B',
      tags: ['#ApiIntegration'],
      nextMeeting: 'Next month'
    },
  ];


  const filteredData = tableData.filter((item) =>
    item.brand.toLowerCase().includes(data.toLowerCase())
  );

  




  return (
    <div className='container'>
    <table className="table">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Description</th>
          <th>Members</th>
          <th>Categories</th>
          <th>Tags</th>
          <th>Next Meetings</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0 && filteredData.map((rowData, index) => (
          <tr key={index}>
            <td>
              <div className="checkTable">
                <button className="checkboxButton" onClick={() => handleCheckboxClick(index)} >
                  {isRowSelected(index) && <i className="fa-solid fa-check"></i>}
                </button>
                <img src={rowData.imgSrc} alt="logo" />
                {rowData.brand}
              </div>
            </td>

            <td className='descriptionColumn'>{rowData.description}</td>

            <td className='descriptionColumn'>
              <span className="avatarStack">
                {rowData.members.map((image, index) => (
                  <img key={index} src={image} alt={`Avatar ${index + 1}`} className="avatar" />
                ))}
              </span>
            </td>

            <td className='descriptionColumn'>{rowData.categories.map((item, index)=>(
              <span className='categoryMap' key={index} style={{color:getRandomColor(), backgroundColor:getRandomColor(),borderColor:getRandomColor()}}>{item}</span>
            ))}</td>

            <td className='descriptionColumn'>{rowData.tags.map((item, index)=>(
              <span className='categoryMap' key={index} style={{backgroundColor:'rgb(202, 201, 201)',borderColor:'rgb(202, 201, 201)'}}>{item}</span>

            ))}</td>

            <td className='descriptionColumn'>
              <span className='categoryMap' 
                style={{color:getRandomColor(), backgroundColor:getRandomColor(),borderColor:getRandomColor()}}
              >
                {rowData.nextMeeting}
              </span>
            </td>
          </tr>
        ))}

        {!filteredData && tableData.map((rowData, index) => (
          <tr key={index}>
            <td>
              <div className="checkTable">
                <button className="checkboxButton" onClick={() => handleCheckboxClick(index)} >
                  {isRowSelected(index) && <i className="fa-solid fa-check"></i>}

                </button>

                <img src={rowData.imgSrc} alt="logo" />

                {rowData.brand}
              </div>
            </td>
            <td>{rowData.description}</td>
            <td>{rowData.members}</td>
            <td>{rowData.categories}</td>
            <td className="descriptionColumn">{rowData.tags}</td>
            <td>{rowData.nextMeeting}</td>
          </tr>
        ))}

        {filteredData.length === 0 && <h3>No data found! Please enter valid a Brand name</h3>}
      </tbody>
    </table>

    <div className="footerTable">
      <button className="footerTable-button"><span>{selectedRows.length}</span>Selected</button>
      <button className="footerTable-button"><i class="fa-regular fa-file-zipper"></i>Archive</button>
      <button className="footerTable-button"><i class="fa-solid fa-trash"></i>Delete</button>
      <button className="footerTable-button">More</button>
    </div>
    </div>
  );
};

export default Table;
