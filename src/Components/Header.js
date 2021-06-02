import React from 'react'
import {NavLink} from 'react-router-dom';


export default function Header() {
    return (
        
		<div className="myHeader">
            <div className="main-nav">
            <ul>
                        <li>
                            <NavLink to="/">
                                <a href="#" className="active">Home</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus">
                                <a href="#">About Us</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">
                                <a href="#">Services</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <a href="#">Safety</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus">
                                <a href="#">Contact Us</a>
                            </NavLink>
                        </li>
                          
            </ul>
                  
            </div>  
            
       <div id="banner">
            <div className="hero-text-box">         
              <h1>Converting Dreams<br/> To Reality</h1>
              
           </div>
        </div>
    </div>
        
    )
}
