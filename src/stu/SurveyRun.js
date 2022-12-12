import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { Headerstuclssrm } from '../headerstuclassroom';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyRunStudentPage = () => {
    //const [loader, showLoader, hideLoader] = useLoader();

    // useEffect(() => {
    //     showLoader();
    //     $('#login').hide();
    //   }, []);

    //   hideLoader();
    //   $('#login').show();

    return <div>
        <Headerstuclssrm />
        {/* {loader} */}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div>
                                <div className="col-sm-12 row m-0">
                                    <div className="col-sm-2">
                                        <div>
                                            <img src="../Images/usergreen.png" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                        </div>
                                    </div>
                                    <div className="col-sm-7 pl-0">
                                        <div className="mt-15px">
                                            <div className="usrnmsrvypgdnw">Jasan Kumar</div>
                                            <div className="usrgrdsrvypgdnw">Class 6th - A</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div class="mt-15">
                                            <Link to="">
                                                <button className="modalGrayBtn btn1srvynwpgdsgn">Finish Later</button>
                                            </Link>
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