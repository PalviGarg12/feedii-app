import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboard } from '../secondheaderschsrvydashboard';
import '../AllJs/dashboard-staff.js';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyTemplateOverviewPage = () => {
    //const [loader, showLoader, hideLoader] = useLoader();

    // useEffect(() => {
    //     showLoader();
    //     $('#login').hide();
    //   }, []);

    //   hideLoader();
    //   $('#login').show();

    return <div>
        <SecondHeaderSchSrvysdashboard />
        {/* {loader} */}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3">
                    
                    <div className="col-sm-2">
                        <div className="tblt-vw-prfl2" style={{paddingTop: 20, paddingLeft: 40}}>
                            <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                            <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                <li style={{padding: '10px 0 5px'}}>
                                    <a className="prfl-ulla active">
                                        <span>Getting Started</span>
                                    </a>
                                </li>
                                {/* <li style={{padding: '5px 0 5px'}}>
                                    <a className="prfl-ulla" style={{opacity: '0.7', cursor: 'context-menu'}}>
                                        <span>Details</span>
                                    </a>
                                </li> */}
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9 pr-5 row">
                        <div className="col-sm-12 col-md-12 mt-4" id="survytbl">
                            <div className="col-sm-12">
                                <div className="col-sm-12 row m-0">
                                    <div className="col-sm-9 pl-0">
                                        <div>
                                            <div className="usrnmsrvypgdnw">Let's get started</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 text-right pr-0">
                                        <Link>
                                        <button className="modalRedBtn cstmmbtnn crsr-auto">Create Survey</button></Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="col-sm-12">
                                    <div className="mt-3">
                                        <div>
                                            <div className="col-sm-12 bgclrblu">
                                                <div className="dshbrd-dvv1 pl-0 pr-0">
                                                    <div className="col-sm-12">
                                                        <h4 className="text-truncate srvynwdvh4 font-medium">Select a survey template</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                    <div className="dshbrd-dvv1 pl-0 pr-0 hdngbgcstm">
                                                            <div className="col-sm-12">
                                                                <h4 className="tmpltdv1 ssrvydvhdng2 srvynwdvh4 font-light">
                                                                    Select the best template based on the suggestions below or create your own survey from the ground up.
                                                                    Need help getting started your survey? Check out this how-to guide.
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="dshbrd-dvv1 pl-0 pr-0 pt-0">
                                                            <div className="col-sm-12 brdr-tpp">
                                                                <div className="col-sm-12 mt-3">
                                                                    <p className="tmpltdvp">Template</p>
                                                                    <p className="tmpltdvp2">Feedii templates are industry standard and capture the most important aspects of engagement. If you edit any question here, it will impact the comparison capabilities in the future.</p>
                                                                        
                                                                    <div>
                                                                        <div className="tmpltdvpdd1">
                                                                            <div className="tmpltdvpdd2">
                                                                                <div className="tmpltdvpdd3">
                                                                                    <label className="tmpltdvpdd4">
                                                                                    <input id="tmpltinprdoid" name="tmpltinprdoid" className="tmpltdvpdd4-inp" type="radio" />
                                                                                        <div className="tmpltdvpdd5">
                                                                                            <div className="tmpltdvpdd6">
                                                                                                <div className="tmpltdvpdd7">
                                                                                                    <img src="../Images/template-img1.svg" alt="Template Image Icon" className="tmpltdvpdd7-img" />
                                                                                                    <div className="tmpltdvpdd7-dv1">Pulse Check</div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd8"></div>
                                                                                                <div className="tmpltdvpdd9">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        Length
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Suggested frequency
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd10">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        5 Questions
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd9"></div>
                                                                                                <div className="tmpltdvpdd11">
                                                                                                    <Link to='/templates/surveytemplate1'>
                                                                                                        <button type="button" mode="transparent" className="tmpltdvpdd11-btn">
                                                                                                            <div className="tmpltdvpdd11-btndv1">
                                                                                                                <i className="fa fa-eye tmpltdvpdd11-btndv1-i"></i>
                                                                                                                Preview
                                                                                                            </div>
                                                                                                        </button>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tmpltdvpdd2">
                                                                                <div className="tmpltdvpdd3">
                                                                                    <label className="tmpltdvpdd4">
                                                                                    <input id="tmpltinprdoid" name="tmpltinprdoid" className="tmpltdvpdd4-inp" type="radio" />
                                                                                        <div className="tmpltdvpdd5">
                                                                                            <div className="tmpltdvpdd6">
                                                                                                <div className="tmpltdvpdd7">
                                                                                                    <img src="../Images/template-img2.svg" alt="Template Image Icon" className="tmpltdvpdd7-img" />
                                                                                                    <div className="tmpltdvpdd7-dv1">Employee Net Promoter Score (eNPS)</div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd8"></div>
                                                                                                <div className="tmpltdvpdd9">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        Length
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Suggested frequency
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd10">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        2 Questions
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd9"></div>
                                                                                                <div className="tmpltdvpdd11">
                                                                                                    <Link to='/templates/surveytemplate1'>
                                                                                                        <button type="button" mode="transparent" className="tmpltdvpdd11-btn">
                                                                                                            <div className="tmpltdvpdd11-btndv1">
                                                                                                                <i className="fa fa-eye tmpltdvpdd11-btndv1-i"></i>
                                                                                                                Preview
                                                                                                            </div>
                                                                                                        </button>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tmpltdvpdd2">
                                                                                <div className="tmpltdvpdd3">
                                                                                    <label className="tmpltdvpdd4">
                                                                                    <input id="tmpltinprdoid" name="tmpltinprdoid" className="tmpltdvpdd4-inp" type="radio" />
                                                                                        <div className="tmpltdvpdd5">
                                                                                            <div className="tmpltdvpdd6">
                                                                                                <div className="tmpltdvpdd7">
                                                                                                    <img src="../Images/template-img3.svg" alt="Template Image Icon" className="tmpltdvpdd7-img" />
                                                                                                    <div className="tmpltdvpdd7-dv1">Engagement Survey</div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd8"></div>
                                                                                                <div className="tmpltdvpdd9">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        Length
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Suggested frequency
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd10">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        21 Questions
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd9"></div>
                                                                                                <div className="tmpltdvpdd11">
                                                                                                    <Link to='/templates/surveytemplate1'>
                                                                                                        <button type="button" mode="transparent" className="tmpltdvpdd11-btn">
                                                                                                            <div className="tmpltdvpdd11-btndv1">
                                                                                                                <i className="fa fa-eye tmpltdvpdd11-btndv1-i"></i>
                                                                                                                Preview
                                                                                                            </div>
                                                                                                        </button>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tmpltdvpdd2">
                                                                                <div className="tmpltdvpdd3">
                                                                                    <label className="tmpltdvpdd4">
                                                                                    <input id="tmpltinprdoid" name="tmpltinprdoid" className="tmpltdvpdd4-inp" type="radio" />
                                                                                        <div className="tmpltdvpdd5">
                                                                                            <div className="tmpltdvpdd6">
                                                                                                <div className="tmpltdvpdd7">
                                                                                                    <img src="../Images/template-img4.svg" alt="Template Image Icon" className="tmpltdvpdd7-img" />
                                                                                                    <div className="tmpltdvpdd7-dv1">Pre Open Enrollment Survey</div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd8"></div>
                                                                                                <div className="tmpltdvpdd9">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        Length
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Suggested frequency
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd10">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        8 Questions
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd9"></div>
                                                                                                <div className="tmpltdvpdd11">
                                                                                                    <Link to='/templates/surveytemplate1'>
                                                                                                        <button type="button" mode="transparent" className="tmpltdvpdd11-btn">
                                                                                                            <div className="tmpltdvpdd11-btndv1">
                                                                                                                <i className="fa fa-eye tmpltdvpdd11-btndv1-i"></i>
                                                                                                                Preview
                                                                                                            </div>
                                                                                                        </button>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tmpltdvpdd2">
                                                                                <div className="tmpltdvpdd3">
                                                                                    <label className="tmpltdvpdd4">
                                                                                    <input id="tmpltinprdoid" name="tmpltinprdoid" className="tmpltdvpdd4-inp" type="radio" />
                                                                                        <div className="tmpltdvpdd5">
                                                                                            <div className="tmpltdvpdd6">
                                                                                                <div className="tmpltdvpdd7">
                                                                                                    <img src="../Images/template-img5.svg" alt="Template Image Icon" className="tmpltdvpdd7-img" />
                                                                                                    <div className="tmpltdvpdd7-dv1">Post Open Enrollment Survey</div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd8"></div>
                                                                                                <div className="tmpltdvpdd9">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        Length
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Suggested frequency
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd10">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        10 Questions
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd9"></div>
                                                                                                <div className="tmpltdvpdd11">
                                                                                                    <Link to='/templates/surveytemplate1'>
                                                                                                        <button type="button" mode="transparent" className="tmpltdvpdd11-btn">
                                                                                                            <div className="tmpltdvpdd11-btndv1">
                                                                                                                <i className="fa fa-eye tmpltdvpdd11-btndv1-i"></i>
                                                                                                                Preview
                                                                                                            </div>
                                                                                                        </button>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tmpltdvpdd2">
                                                                                <div className="tmpltdvpdd3">
                                                                                    <label className="tmpltdvpdd4">
                                                                                    <input id="tmpltinprdoid" name="tmpltinprdoid" className="tmpltdvpdd4-inp" type="radio" />
                                                                                        <div className="tmpltdvpdd5">
                                                                                            <div className="tmpltdvpdd6">
                                                                                                <div className="tmpltdvpdd7">
                                                                                                    <img src="../Images/template-img6.svg" alt="Template Image Icon" className="tmpltdvpdd7-img" />
                                                                                                    <div className="tmpltdvpdd7-dv1">Work-Life Flexibility</div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd8"></div>
                                                                                                <div className="tmpltdvpdd9">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        Length
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Suggested frequency
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd10">
                                                                                                    <div className="tmpltdvpdd9-dv1">
                                                                                                        4 Questions
                                                                                                        <div className="tmpltdvpdd9-dv2"></div>
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="tmpltdvpdd9"></div>
                                                                                                <div className="tmpltdvpdd11">
                                                                                                    <Link to='/templates/surveytemplate1'>
                                                                                                        <button type="button" mode="transparent" className="tmpltdvpdd11-btn">
                                                                                                            <div className="tmpltdvpdd11-btndv1">
                                                                                                                <i className="fa fa-eye tmpltdvpdd11-btndv1-i"></i>
                                                                                                                Preview
                                                                                                            </div>
                                                                                                        </button>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </label>
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                    </div>
                </div>
            </div>

        </div>

        
    </div>
}

// export default Details;