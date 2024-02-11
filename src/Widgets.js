import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("React is Great", "Top 1")}
        {newsArticle("Javascript is simply Awesoms", "Top 2")}
        {newsArticle("Firebase is fast", "Top 3")}
        {newsArticle("Material UI", "Top 4")}
        {newsArticle("Redux avoid Props Drilling", "Top 5")}
    </div>
  )
}

export default Widgets