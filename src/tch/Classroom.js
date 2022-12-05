import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


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
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637617/Dashboard/New%20courses%20images/final_images/ux_ui_design_foundations.svg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">
                                                            <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                            <span>Class 1st</span>
                                                            <div className="clsrmdv2-2-dv3-dv">Room 1</div>
                                                        </div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="clsrmdrpdwn">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item crsr-dsbl">Edit Class</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637615/Dashboard/New%20courses%20images/final_images/design_terminology.svg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">
                                                            <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                            <span>Class 2nd</span>
                                                            <div className="clsrmdv2-2-dv3-dv">Section A</div>
                                                        </div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="clsrmdrpdwn">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item crsr-dsbl">Edit Class</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637614/Dashboard/New%20courses%20images/final_images/color_psychology.svg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">
                                                            <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                            <span>Class 2nd</span>
                                                            <div className="clsrmdv2-2-dv3-dv">Section B</div>
                                                        </div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="clsrmdrpdwn">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item crsr-dsbl">Edit Class</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <Link to="" className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637614/Dashboard/New%20courses%20images/final_images/design_accessibility.svg" alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">
                                                            <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                            <span>Class 2nd</span>
                                                            <div className="clsrmdv2-2-dv3-dv">Section C</div>
                                                        </div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="clsrmdrpdwn">
                                                                <i className="fa fa-ellipsis-v"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item crsr-dsbl">Edit Class</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        </div>
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