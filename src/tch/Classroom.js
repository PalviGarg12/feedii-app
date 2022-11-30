import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const ClassroomtchPagee = () => {


    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        <div className="mb-30px">
                            <div className="col-sm-12">
                                <div className="col-sm-12">
                                    <div className="clsrmdv1">
                                        <h1 class="kmcs_h1 bluclr">Classes</h1>
                                    </div>
                                    <div className="clsrmdv2 col-sm-12 row">
                                        <div className="col-sm-4 mb-4">
                                            <Link to="">
                                                <img src="/Images/dsh-bg1.jpg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                <div className="clsrmdv2-1">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Class 1st</div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="clsrmdv2-2-dv3-dv">Section A</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <Link to="">
                                                <img src="/Images/dsh-bg2.jpg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                <div className="clsrmdv2-1">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Class 1st</div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="clsrmdv2-2-dv3-dv">Section B</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
}

// export default Details;