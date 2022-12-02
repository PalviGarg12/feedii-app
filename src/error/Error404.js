import React from "react";
import '../Content/Content/login.css';
import '../Content/Content/errorcss.css';
import '../App.css';
import $ from 'jquery';
import { Headererrorpg } from '../headererror';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const Error404Page = () => {

    return <div>
                <Headererrorpg />

                <div className="cstmbgerrr">
                    
                    <div style={{textAlign: 'center', width: '100%', padding: '20px 24px'}}>
                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1638350036/Error%20Image/404eros8421ff10_doqiee.jpg" />
                        <h1 style={{marginTop: 40, color: '#333e63', fontSize: 40, fontWeight: '600'}}>Page not found</h1>
                        <p style={{marginTop: 20, color: '#7a829a', fontSize: 20, fontWeight: '400'}}>Oh no! We can't find the page you're looking for.</p>
                        <Link to="/"><button type="button" className="btnns">Back To Login</button></Link>
                    </div>

                </div>
            </div>    
    
}


