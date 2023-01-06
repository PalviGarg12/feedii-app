import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/result.css';
import { Headerdashboard } from '../headeruserdashboard';
import ArcProgress from "react-arc-progress";
import Select from 'react-select';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
            <Modal.Header className="cstmmdlinfodv" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                <div className="infomdvmdl1 col-sm-12 row m-0">
                    <Tabs>
                        <div className="rsltmdltbdv1">
                            <div className="rsltmdltbdv2">
                                <h2 className="rsltmdltbdv2h2">All Topics</h2>
                                <TabList className="rsltmdltbdv2ul">
                                    <Tab>Title 1</Tab>
                                    <Tab>Title 2</Tab>
                                </TabList>
                            </div>
                        </div>

                        <TabPanel>
                        <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </Modal.Body>
        </Modal>

    </div>
}
