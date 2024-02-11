import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material'

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1707489636403-c539c2cdc101?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Abijeeth Vasra</h2>
            <h4>abijeeth@vasra.com</h4>
        </div>
        <div className='sidebar__stats'>
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
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default SideBar