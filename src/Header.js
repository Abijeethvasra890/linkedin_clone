import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch()
    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    

  return (
    <div className='header'>
        <div className="header__left">
            <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt=''/>
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar = "true" title="Abijeeth" onClick={logOutOfApp}/>
        </div>
    </div>
  )
}

export default Header