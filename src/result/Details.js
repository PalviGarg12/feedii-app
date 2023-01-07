import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/result.css';
import { Headerdashboard } from '../headeruserdashboard';
import ArcProgress from "react-arc-progress";
import Select from 'react-select';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const ResultDetailsPage = () => {

    const progress = "0.5";
    const text = "50";
    const arcFillColor = { gradient: ["#54d4f2"] };

    
    const alclsdata = [{
        value: "0", label: "All Classes"
    }];

    const optnslstt = [{
        value: "0", label: "All Classes"
    }]
    
    // $('table.rslt-tbldv3tbl').on('scroll', function() {
    //     //alert('start');
    //     $("table.rslt-tbldv3tbl > *").width($("table.rslt-tbldv3tbl").width() + $("table.rslt-tbldv3tbl").scrollLeft());
    // });

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">

            <div className="padding">
            
                <div style={{width: '80%', margin: '2rem auto 0'}}>
                    <div>
                        <div className="col-sm-12 mb-3 p-0">
                            <NavLink to="/result/overall" className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>Back to Overall Result</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="row tab-content mb-3" id="srvydepdv">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active rsl-cspdng m-0" id="tab1">
                        
                        <div className="col-sm-12 p-0 row m-0 mb-5">
                            <div className="col-sm-9 pl-0">
                                <div className="col-sm-12 row m-0">
                                    <div className="text-truncate rsltdtlsdvv1" title="Survey Name"> Survey Name </div>
                                    <button className="ylwstatusbtn rsltdtlsdvv1btn">Ended</button>
                                </div>
                                <div className="col-sm-12">
                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="tbltddv2 text-truncate cstmwdtbldv"> Schedule : Nov 20 - Dec 20, 2022 </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <Select options={optnslstt} defaultValue={{ label: "All Classes", value: 0 }} />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 p-0 row m-0 mb-5">
                            <div className="col-sm-6">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Overall Score</h4>
                                </div>
                                <div className="row m-0 rslt-dvv pb-2">
                                    <div className="col-sm-6 p-0">
                                        <div className="rsl-dv1">
                                            50
                                            <span className="rsl-dv1spn">Score</span>
                                        </div>
                                        <ArcProgress className="rsl-dv2" progress={progress} thickness={20} fillColor={arcFillColor} style={{ position: "relative", height: 150, width: 150 }} />
                                    </div>
                                    <div className="col-sm-6 p-0">
                                        <div className="rsl-dv3">
                                            <div>
                                                <h3 className="rsl-dv3-h3">25% Higher</h3>
                                                <div className="rsl-dv4">than the Surveys Average Score</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Response Rate</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-5 mt-2">
                                        <div className="col-sm-12 row m-0 p-0">
                                            <div className="col-sm-8 pl-0">Comment</div>
                                            <div className="col-sm-4 pr-0 text-right">20%</div>
                                        </div>
                                        <div>
                                            <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                <div className="progress-bar dark-green" style={{width: '20%'}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 p-0 mb-csrslbtmm">
                                        <div className="col-sm-12 row m-0 p-0">
                                            <div className="col-sm-8 pl-0">All Responses</div>
                                            <div className="col-sm-4 pr-0 text-right">6000 / 7000</div>
                                        </div>
                                        <div>
                                            <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                <div className="progress-bar dark-green" style={{width: '80%'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 p-0 mb-5">
                            <div className="col-sm-12">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Overall Score Per Topic</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div>
                                            <table id="rslttblcs" className="rslttblcsvll2">
                                                <thead>
                                                    <tr className="brdr-btm1">
                                                        <th>Topic Name</th>
                                                        <th className="text-right">Your Score</th>
                                                        <th className="text-right">Benchmark</th>
                                                        <th className="text-right">Difference</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <div className="text-truncate" title="Topic Name" onClick={()=>{handleShow(); }}>1. Topic Name</div>
                                                        </td>
                                                        <td className="text-right">60%</td>
                                                        <td className="text-right">50%</td>
                                                        <td className="text-right">
                                                            <div className="rsltgrnclr">10%</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <div className="text-truncate" title="Topic Name">2. Topic Name</div>
                                                        </td>
                                                        <td className="text-right">20%</td>
                                                        <td className="text-right">50%</td>
                                                        <td className="text-right">
                                                            <div className="rsltredclr">-30%</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <div className="text-truncate" title="Topic Name">3. Topic Name</div>
                                                        </td>
                                                        <td className="text-right">35%</td>
                                                        <td className="text-right">35%</td>
                                                        <td className="text-right">
                                                            <div className="rsltlytbluclr">0%</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <div className="text-truncate" title="Topic Name">4. Topic Name</div>
                                                        </td>
                                                        <td className="text-right">60%</td>
                                                        <td className="text-right">50%</td>
                                                        <td className="text-right">
                                                            <div className="rsltgrnclr">10%</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 p-0 mb-5">
                            <div className="col-sm-12">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Engagement Score Heatmap</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div className="rslttbl3">
                                            <div className="outer">
                                                <div className="inner">
                                                    <table>
                                                    <tr>
                                                        <th className="fix nobrdr">
                                                            <div>
                                                                <div className="col-sm-5 pl-0 rsltblslmbcs">
                                                                    <Select className="rslttblslctt" options={alclsdata} defaultValue={{ label: "All Classes", value: 0 }} />
                                                                </div>
                                                                <div className="rslttbldv4">Classes</div>
                                                            </div>
                                                        </th>
                                                        <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title="Topic Name 1"> Overall Score </div>
                                                        </th>
                                                        <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title="Topic Name 2"> Topic Name 1 </div>
                                                        </th>
                                                        <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title="Topic Name 3"> Topic Name 2 </div>
                                                        </th>
                                                        <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title="Topic Name 4"> Topic Name 3 </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx">
                                                            <Link>
                                                                <div className="rslt-tbldv2-4 text-truncate" title="Survey Name">
                                                                    Class 6th - A
                                                                </div>
                                                            </Link>
                                                        </th>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                10%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                20%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr02">
                                                            <div>
                                                                30%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr02">
                                                            <div>
                                                                40%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx">
                                                            <Link>
                                                                <div className="rslt-tbldv2-4 text-truncate" title="Survey Name2">
                                                                    Class 6th - B
                                                                </div>
                                                            </Link>
                                                        </th>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                11%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                12%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                13%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                14%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx">
                                                            <Link>
                                                                <div className="rslt-tbldv2-4 text-truncate" title="Survey Name3">
                                                                    Class 6th - C
                                                                </div>
                                                            </Link>
                                                        </th>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr03">
                                                            <div>
                                                                50%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr04">
                                                            <div>
                                                                60%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr04">
                                                            <div>
                                                                70%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr05">
                                                            <div>
                                                                80%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="col-sm-12 row cstm--bxx">
                                            <div className="box mb-0">
                                                <div className="btn btn-lg rslt-tbltdclr01"></div>
                                                <div className="btn btn-lg rslt-tbltdclr02"></div>
                                                <div className="btn btn-lg rslt-tbltdclr03"></div>
                                                <p>Minimum</p>
                                            </div>
                                            <div className="box pl-1 mb-0">
                                                <div className="btn btn-lg rslt-tbltdclr04"></div>
                                                <div className="btn btn-lg rslt-tbltdclr05"></div>
                                                <p className="text-right">Maximum</p>
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



        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2 rsltdtlmdlcs" >
            <Modal.Header className="cstmmdlinfodv p-0" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm p-0 m-0">
                
                <div className="infomdvmdl1 rsltmdltbmaindv1 col-sm-12 p-0">
                    <Tabs className="row m-0">
                        <div className="rsltmdltbdv1">
                            <div className="rsltmdltbdv2">
                                <h2 className="rsltmdltbdv2h2">All Topics</h2>
                                <TabList className="rsltmdltbdv2ul">
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Topic Name 1</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        16
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Topic Name 2</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        35
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Topic Name 3</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        80
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Topic Name 4</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        50
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                </TabList>
                            </div>
                        </div>

                        <div className="rsltmdltbdv2dv1">
                            <TabPanel>
                                <div className="rsltmdltbdv2dv2">
                                    <div className="rsltmdltbdv2dv3">
                                        <div className="rsltmdltbdv2dv4">
                                            <div className="rsltmdltbdv2dv4-d1"></div>
                                            <div className="rsltmdltbdv2dv4-dv2">
                                                <div className="rsltmdltbdv2dv4-dv2-a1">
                                                    <button type="button" className="rsltmdltbdv2dv4-dv2-a11">
                                                        <h4 className="rsltmdltbdv2dv4-dv2-a11h4">Topic Name 1</h4>
                                                    </button>
                                                    <div>
                                                        <div className="progress my-1 brdrrdscstm" style={{height: 4, width: '100%'}}>
                                                            <div className="progress-bar bluclrr" style={{width: '16%'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="rsltmdltbdv2dv4-dv2-a2">
                                                    <span className="rsltmdltbdv2dv4-dv2-a2spn">Your Score: </span>
                                                    16
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rsltmdltbdv2dv5">
                                            
                                            <div className="rsltmdltbdv2dv5-1">
                                                <div>Your score of 1.5 out of 5 means your company is suffering from critical issues in your hiring and onboarding processes. This could include things like a lack of formal process for hiring or welcoming new employees, time-intensive manual processes, paper-based processes for worker documentation, or insecure storage of sensitive information which could be subject to loss, theft or ruin.</div>
                                            </div>

                                            <div className="rsltmdltbdv2dv5-2">
                                                <h3 className="rsltmdltbdv2dv5-2h3">Questions</h3>
                                                <div className="rsltmdltbdv2dv5-2d1">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="rsltmdltbdv2dv5-2d2">
                                                            <h5 className="rsltmdltbdv2dv5-2d3">Question 1</h5>
                                                            <div className="col-sm-12">
                                                                <p className="rsltmdltbdv2dv5-2d3p">It is easy to bury myself in my work?</p>
                                                                <div className="rsltmdltbdv2dv5-2d4 mb-5">
                                                                    <ProgressBar>
                                                                        <ProgressBar variant="prgrs-orngclr" now={40} key={1} label={'40%'} />
                                                                        <ProgressBar variant="prgrs-drkbluclr" now={20} key={2} label={'20%'} />
                                                                        <ProgressBar variant="prgrs-lytbluclr" now={40} key={3} label={'40%'} />
                                                                    </ProgressBar>
                                                                    <div className="rsltmdltbdv2dv5-2d5">
                                                                        <div className="row m-0">
                                                                            <div className="rsltmdltbdv2dv5-2d6">
                                                                                <div className="row m-0">
                                                                                    <div className="row m-0 mr-3">
                                                                                        <span className="rsltmdlqsclrhglght01"></span> <span className="rsltmdlqsclrtxt">Disagree</span>
                                                                                    </div>
                                                                                    <div className="row m-0 mr-3">
                                                                                        <span className="rsltmdlqsclrhglght02"></span> <span className="rsltmdlqsclrtxt">Neutral</span>
                                                                                    </div>
                                                                                    <div className="row m-0 mr-3">
                                                                                        <span className="rsltmdlqsclrhglght03"></span> <span className="rsltmdlqsclrtxt">Agree</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <h5 className="rsltmdltbdv2dv5-2d3">Comment</h5>
                                                                <p className="rsltmdltbdv2dv5-2d3p">"I love how well we’ve adapted through working remotely. It seems like our teams have not lost a step."</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </Modal.Body>
        </Modal>

    </div>
}
