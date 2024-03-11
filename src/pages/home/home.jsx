import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Table from '../../components/table/Table'

const home = () => {
  return (
    <div className="container">
        <section id="sidebar">
            <Sidebar/>
        </section>

        <section id="home">
          <Navbar/> 
        </section>
    
    </div>
  )
}

export default home