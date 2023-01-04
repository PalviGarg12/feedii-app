import React from "react";
import $ from 'jquery';
import '../Content/Content/result.css';
import { Headerdashboard } from '../headeruserdashboard';
import ArcProgress from "react-arc-progress";
import Select from 'react-select';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const ResultOverallPage = () => {

    const progress = "0.5";
    const text = "50";
    const arcFillColor = { gradient: ["#54d4f2"] };

    
    const alclsdata = [{
        value: "10", label: "All Classes"
    }];
    

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding">
                <div className="row tab-content mb-3" id="srvydepdv">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active rsl-cspdng m-0" id="tab1">
                        
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
                                    <h4 className="rsl-hdngh4">Engagement Rate</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div className="col-sm-12 row m-0 p-0">
                                            <div className="col-sm-10 pl-0">Student to Student</div>
                                            <div className="col-sm-2 pr-0 text-right">20%</div>
                                        </div>
                                        <div>
                                            <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                <div className="progress-bar dark-green" style={{width: '20%'}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div className="col-sm-12 row m-0 p-0">
                                            <div className="col-sm-10 pl-0">Student to Teacher</div>
                                            <div className="col-sm-2 pr-0 text-right">60%</div>
                                        </div>
                                        <div>
                                            <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                <div className="progress-bar dark-green" style={{width: '60%'}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div className="col-sm-12 row m-0 p-0">
                                            <div className="col-sm-10 pl-0">Teacher to School</div>
                                            <div className="col-sm-2 pr-0 text-right">100%</div>
                                        </div>
                                        <div>
                                            <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                <div className="progress-bar dark-green" style={{width: '100%'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 p-0 mb-5">
                            <div className="col-sm-12">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Overall Score Per Survey</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div>
                                            <table id="rslttblcs">
                                                <thead>
                                                    <tr className="brdr-btm1">
                                                        <th>Survey Name</th>
                                                        <th className="text-right">Your Score</th>
                                                        <th className="text-right">Benchmark</th>
                                                        <th className="text-right">Difference</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <Link>
                                                                <div className="text-truncate" title="Survey Name">1. Survey Name</div>
                                                                <div className="tbltddv2 cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </Link>
                                                        </td>
                                                        <td className="text-right">60%</td>
                                                        <td className="text-right">50%</td>
                                                        <td className="text-right">
                                                            <div className="rsltgrnclr">10%</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <Link>
                                                                <div className="text-truncate" title="Survey Name">2. Survey Name</div>
                                                                <div className="tbltddv2 cstmwdtbldv">Teacher <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </Link>
                                                        </td>
                                                        <td className="text-right">20%</td>
                                                        <td className="text-right">50%</td>
                                                        <td className="text-right">
                                                            <div className="rsltredclr">-30%</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <Link>
                                                                <div className="text-truncate" title="Survey Name">3. Survey Name</div>
                                                                <div className="tbltddv2 cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> Teacher</div>
                                                            </Link>
                                                        </td>
                                                        <td className="text-right">35%</td>
                                                        <td className="text-right">35%</td>
                                                        <td className="text-right">
                                                            <div className="rsltlytbluclr">0%</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="brdr-btm1">
                                                        <td>
                                                            <Link>
                                                                <div className="text-truncate" title="Survey Name">4. Survey Name</div>
                                                                <div className="tbltddv2 cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </Link>
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
                                        <div>
                                            <div className="rslt-tbldv1">
                                                <div className="rslt-tbldv2">
                                                    <div className="rslt-tbldv2-1">
                                                        <Select options={alclsdata} />
                                                    </div>
                                                    <div className="rslt-tbldv2-2">

                                                    </div>
                                                </div>
                                                <div className="rslt-tbldv3">

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
}
