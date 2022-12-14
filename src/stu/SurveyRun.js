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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const SurveyRunStudentPage = () => {
    //const [loader, showLoader, hideLoader] = useLoader();

    // useEffect(() => {
    //     showLoader();
    //     $('#login').hide();
    //   }, []);

    //   hideLoader();
    //   $('#login').show();

    const [showModal2, setShowModal2] = useState(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => {
        setShowModal2(true);
    }

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
                                    <div className="col-sm-3 text-right">
                                        <div class="mt-15">
                                            <Link to="">
                                                <button className="modalGrayBtn btn1srvynwpgdsgn" onClick={() => { handleShowModal2();}}>Finish Later</button>
                                            </Link>
                                        </div>
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
                                                        <h4 className="srvynwdvh4">Social & Emotional Learning</h4>
                                                    </div>
                                                </div>
                                                <div className="dshbrd-dvv1 pl-0 pr-0">
                                                    <div className="col-sm-12 brdr-btmmm">
                                                       <div className="col-sm-12 mt-3">
                                                            <h5 className="srvynwdvh5">1. Please select how strongly you agree/disagree with this statement and add comments as needed. </h5>
                                                            <p className="srvynwdvp">Please select how strongly you agree/disagree with this statement and add comments as needed.</p>
                                                            <div>
                                                                <div>
                                                                    <div className="srvyndv1">
                                                                        <div className="srvyndv2">
                                                                            <div className="srvyndv3">
                                                                                <div className="srvyndv4">
                                                                                    <label className="srvyndv5">
                                                                                        <input className="srvyndv6" type="radio" value="1" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="2" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="3" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="4" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="5" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                        <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" rows="4" placeholder="Add Comment"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                       </div>
                                                    </div>
                                                    
                                                    <div className="col-sm-12 brdr-btmmm">
                                                       <div className="col-sm-12 mt-3">
                                                            <h5 className="srvynwdvh5">2. Please select how strongly you agree/disagree with this statement and add comments as needed. </h5>
                                                            <p className="srvynwdvp">Please select how strongly you agree/disagree with this statement and add comments as needed.</p>
                                                            <div>
                                                                <div>
                                                                    <div className="srvyndv1">
                                                                        <div className="srvyndv2">
                                                                            <div className="srvyndv3">
                                                                                <div className="srvyndv4">
                                                                                    <label className="srvyndv5">
                                                                                        <input className="srvyndv6" type="radio" value="1" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="2" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="3" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="4" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                                        <input className="srvyndv6" type="radio" value="5" id="usrssurvy" height="100%" name="usrssurvy" />
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
                                                                        <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" rows="4" placeholder="Add Comment"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                       </div>
                                                    </div>

                                                    <div>
                                                        <div className="text-right mt-4 mb-3">
                                                            <div>
                                                                <button className="modalGrayBtn mnwd-13p mr-3" onClick={() => { handleShowModal2();}}>Finish Later</button>
                                                                <button className="modalRedBtn mnwd-13p mr-4">Submit Survey</button>
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


        <Modal show={showModal2} onHide={handleCloseModal2} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to finish later?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal2}>
                Close
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleCloseModal2}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>

        
    </div>
}

// export default Details;