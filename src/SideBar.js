import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Abijeeth Vasra</h2>
            <h4>abijeeth@vasra.com</h4>
        </div>
        <div className='sidebar__status'>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">1,234</p>
            </div> 
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">432</p>
            </div>            
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default SideBar