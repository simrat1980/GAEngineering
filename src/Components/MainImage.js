import React from 'react'
import bannerImage from '../Images/bannerimage.jpg';
export default function MainImage() {
    return (
        <div className="header">
             <img className="background-image" src={bannerImage} alt="backround"></img>  
        </div>
    )
}
