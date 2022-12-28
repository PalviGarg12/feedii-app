import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderTchrrrdashboardSurvy } from '../secondheadertchrdashboardsurvey';
import '../AllJs/dashboard-staff.js';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyTemplateOneTchrPage = () => {
    //const [loader, showLoader, hideLoader] = useLoader();

    // useEffect(() => {
    //     showLoader();
    //     $('#login').hide();
    //   }, []);

    //   hideLoader();
    //   $('#login').show();

    return <div>
        <SecondHeaderTchrrrdashboardSurvy />
        {/* {loader} */}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div>
                                <div className="col-sm-12">
                                    <div className="col-sm-12 mb-5">
                                        <NavLink to="/tch/survey" className="srvylnkbtnnn">
                                            <i className="fa fa-chevron-left mr-2"></i>
                                            <span>All Surveys</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="col-sm-12">
                                    <div className="mt-5">
                                        <div>
                                            <div className="col-sm-12 bgclrblu">
                                                <div className="dshbrd-dvv1 pl-0 pr-0">
                                                    <div className="col-sm-12">
                                                        <h4 className="text-truncate srvynwdvh4">Social & Emotional Learning</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                    <div className="dshbrd-dvv1 pl-0 pr-0 hdngbgcstm">
                                                            <div className="col-sm-12">
                                                                <h4 className="text-truncate ssrvydvhdng2 srvynwdvh4">Chapter - A</h4>
                                                            </div>
                                                        </div>
                                                        <div className="dshbrd-dvv1 pl-0 pr-0 pt-0">
                                                            <div className="col-sm-12 brdr-tpp">
                                                            <div className="col-sm-12 mt-3 pl-4">
                                                                    <h5 className="srvynwdvh5">1. Please select how strongly you agree/disagree with this statement and add comments as needed. </h5>
                                                                     
                                                                    <div>
                                                                        <div>
                                                                            <div className="srvyndv1">
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">1</div>
                                                                                                        <div className="srvyndv9">Strongly Disagree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">2</div>
                                                                                                        <div className="srvyndv9">Disagree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">3</div>
                                                                                                        <div className="srvyndv9">Neutral</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">4</div>
                                                                                                        <div className="srvyndv9">Agree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">5</div>
                                                                                                        <div className="srvyndv9">Strongly Agree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="srvyndv10 mt-4">
                                                                            <div className="srvyndv11">
                                                                                <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" rows="4" readOnly>Comment Text</textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>
                                                            
                                                            <div className="col-sm-12 brdr-tpp">
                                                            <div className="col-sm-12 mt-3 pl-4">
                                                                    <h5 className="srvynwdvh5">2. Please select how strongly you agree/disagree with this statement and add comments as needed. </h5>
                                                                     
                                                                    <div>
                                                                        <div>
                                                                            <div className="srvyndv1">
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">1</div>
                                                                                                        <div className="srvyndv9">Strongly Disagree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">2</div>
                                                                                                        <div className="srvyndv9">Disagree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">3</div>
                                                                                                        <div className="srvyndv9">Neutral</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">4</div>
                                                                                                        <div className="srvyndv9">Agree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">5</div>
                                                                                                        <div className="srvyndv9">Strongly Agree</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="srvyndv10 mt-4">
                                                                            <div className="srvyndv11">
                                                                                <textarea className="srvyndv12" id="usrssrvycmnts2" name="usrssrvycmnts2" rows="4" readOnly>Comment Text</textarea>
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