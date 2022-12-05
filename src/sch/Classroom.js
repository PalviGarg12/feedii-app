import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const ClassroomPage = () => {


    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding mbvwpd">
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
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <div className="clsrmdv2-2-dv1 mb-0">
                                                        <div className="clsrmdv2-2-dv1-a1">Class 1st</div>
                                                        <div class="clsrmdv2-2-dv3-dv">A</div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </div>
                                                    </div>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637617/Dashboard/New%20courses%20images/final_images/ux_ui_design_foundations.svg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <div className="clsrmdv2-2-dv1 mb-0">
                                                        <div className="clsrmdv2-2-dv1-a1">Class 1st</div>
                                                        <div class="clsrmdv2-2-dv3-dv">B</div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </div>
                                                    </div>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637615/Dashboard/New%20courses%20images/final_images/design_terminology.svg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <div className="clsrmdv2-2-dv1 mb-0">
                                                        <div className="clsrmdv2-2-dv1-a1">Class 1st</div>
                                                        <div class="clsrmdv2-2-dv3-dv">C</div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </div>
                                                    </div>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637614/Dashboard/New%20courses%20images/final_images/color_psychology.svg " alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <div className="clsrmdv2-2-dv1 mb-0">
                                                        <div className="clsrmdv2-2-dv1-a1">Class 1st</div>
                                                        <div class="clsrmdv2-2-dv3-dv">D</div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </div>
                                                    </div>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637614/Dashboard/New%20courses%20images/final_images/design_accessibility.svg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
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