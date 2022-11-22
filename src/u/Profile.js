import React from "react";
import $ from 'jquery';
import '../Content/Content/profilecss.css';
import { Headerdashboard} from '../headeruserdashboard';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Userprofile = () => {

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
        <div className="padding cstmdpd" id="prflpg">
            <div className="row mt-6-cstm" style={{marginTop: '2px !important'}}>
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div style={{position: 'relative'}}>
                        <div style={{inset: 0}}>
                        <div className="tblt-vw-prfl1-dv" style={{height: 152, width: 152, marginBottom: 8, marginLeft: 'auto'}}>
                            <div style={{boxSizing: 'border-box', borderRadius: '50%', opacity: 1, boxShadow: 'rgb(214,222,233) 0px 0px 0px 2px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: 48, lineHeight: 1, fontWeight: 700, textTransform: 'none', letterSpacing: 'normal', color: 'rgb(255, 255, 255)', width: 152, minWidth: 152, minHeight: 152, height: 152}}>
                            <img src="https://res.cloudinary.com/infoi/image/upload/v1643706338/Profile%20Icon/Icon-150x150_o33qvq.png" style={{borderRadius: '50%'}} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tblt-vw-prfl2" style={{paddingTop: 32, paddingLeft: 12}}>
                        <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                        <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                            <li style={{padding: '10px 0 5px'}}>
                                <a className="prfl-ulla active" data-target="personalinfo-1">
                                    <span>Personal Info</span>
                                </a>
                            </li>
                            <li style={{padding: '5px 0 5px'}}>
                                <a className="prfl-ulla" data-target="accountinfo-2">
                                    <span>Account Info</span>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-8 row  ml-1-5rm cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12">
                        <div style={{minHeight: 128, paddingBottom: 16, display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                        <div>
                            <h2 style={{fontSize: 32, lineHeight: '1.25', color: '#333e63', fontWeight: 600, margin: 0, textTransform: 'none', letterSpacing: 'normal'}}>
                            Tester Test
                            </h2>
                            <div style={{fontSize: 14, lineHeight: '1.43', color: 'rgb(68, 68, 68)', textTransform: 'none', letterSpacing: 'normal', paddingTop: 4}}>
                            <ul style={{marginTop: 8, marginBottom: 8, paddingLeft: 0, listStyleType: 'none'}}>
                                <li style={{paddingBottom: 8, color: '#333e63'}}>Student at Feedii</li>
                                <li style={{color: '#333e63'}}>Registered on October 28, 2022</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="tab active" data-tab="personalinfo-1">
                        <div className="col-md-12 mb-5">
                            <div className="tekila1">
                                <div className="box-header cs-st-bx-hdr">
                                <h3 className="tekila2">
                                    <span style={{borderBottom: '2px solid #ff5745', paddingBottom: 12}}>Basic Info</span>
                                    <a onclick="editprofile()">
                                    <i className="fas fa-pen float-right tekila5" title="Edit" />
                                    </a>
                                </h3>
                                </div>
                                <div className="box-body cs-st-pd2" id="profile" style={{display: 'none'}}>
                                    <form>
                                        <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Name</label>
                                        <div className="col-sm-8 col-xs-8">
                                            <label className="col-form-label tekila4">Tester</label>
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">School Name</label>
                                        <div className="col-sm-8 col-xs-8">
                                            <label className="col-form-label tekila4">XYZ</label>
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Designation</label>
                                        <div className="col-sm-8 col-xs-8">
                                            <label className="col-form-label tekila4">Admin</label>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="box-body cs-st-pd2" id="profile_open" style={{display: 'block'}}>
                                    <form action method="post" id="add_basicinfo">
                                        <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-4 col-form-label tekila3">Name</label>
                                        <div className="col-sm-8 tekila9">
                                            <input type="text" className="form-control tekila6" id="name" defaultValue="XYZ" readOnly />
                                            <p className="text-danger cs-st-txt-danger" id="fstname" />
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label htmlFor className="col-sm-4 col-form-label tekila3">School Name</label>
                                        <div className="col-sm-8 tekila9">
                                            <input type="text" className="form-control tekila6" defaultValue="XYZ" readOnly />
                                            <p className="text-danger cs-st-txt-danger" id="schlnm" />
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label htmlFor className="col-sm-4 col-form-label tekila3">Designation</label>
                                        <div className="col-sm-8 tekila9">
                                            <input type="text" className="form-control tekila6" defaultValue="Admin" readOnly />
                                            <p id="dsgntn" className="val_error cs-st-txt-danger" />
                                        </div>
                                        </div>
                                    </form>
                                    <div className="modal-footer">
                                        <button className="tekila7 cs-st-bx-btns btn-cstmprfl1" onclick="cancel_profile();">Cancel</button>
                                        <button className="tekila8 cs-st-bx-btns btn-cstmprfl2" type="submit" id="savebasic_info">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pt-16px">
                            <div className="tekila1">
                                <div className="box-header cs-st-bx-hdr">
                                <h3 className="tekila2">
                                    <span style={{borderBottom: '2px solid #ff5745', paddingBottom: 12}}>Contact Info</span>
                                    <a onclick="edit_contactinfo()">
                                    <i className="fas fa-pen float-right tekila5" title="Edit" />
                                    </a>
                                </h3>
                                </div>
                                <div className="box-body cs-st-pd2" id="contact">
                                <form className="ml-3">
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Mobile Number</label>
                                    <div className="col-sm-8 col-xs-8">
                                        <label className="col-form-label tekila4">9800000011</label>
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Email</label>
                                    <div className="col-sm-8 col-xs-8">
                                        <label className="col-form-label tekila4">t@t.ttt</label>
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">School Website</label>
                                    <div className="col-sm-8 col-xs-8">
                                        <label className="col-form-label tekila4">www.xyz.com</label>
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">City</label>
                                    <div className="col-sm-8 col-xs-8">
                                        <label className="col-form-label tekila4">-</label>
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">State</label>
                                    <div className="col-sm-8 col-xs-8">
                                        <label className="col-form-label tekila4">-</label>
                                    </div>
                                    </div>
                                    <div className="form-group row" style={{display: 'none'}}>
                                    <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Country</label>
                                    <div className="col-sm-8 col-xs-8">
                                        <label className="col-form-label tekila4">India</label>
                                    </div>
                                    </div>
                                </form>
                                </div>
                                <div className="box-body cs-st-pd2" id="contact_open" style={{display: 'none'}}>
                                <form className="ml-3" action method="post" id="add_contactinfo">
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-form-label tekila3">Mobile Number </label>
                                    <div className="col-sm-8 tekila9">
                                        <input type="text" className="form-control tekila6" value="9800000011" readOnly />
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-form-label tekila3">Email</label>
                                    <div className="col-sm-8 tekila9">
                                        <input type="text" className="form-control tekila6" id="email" value="t@t.ttt" />
                                        <p id="emailerr" className="val_error cs-st-txt-danger" />
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-form-label tekila3">School Website</label>
                                    <div className="col-sm-8 tekila9">
                                        <input type="text" className="form-control tekila6" id="swbsite" placeholder="Enter School Website" value="www.xyz.com" />
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-form-label tekila3">City</label>
                                    <div className="col-sm-8 tekila9">
                                        <input type="text" className="form-control tekila6" id="city" placeholder="Enter city.." onkeypress="return(event.charCode>64 && event.charCode<91)||(event.charCode>96&& event.charCode<123)" />
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor className="col-sm-4 col-form-label tekila3">State</label>
                                    <div className="col-sm-8 tekila9">
                                        <input type="text" className="form-control tekila6" id="state" placeholder="Enter state.." onkeypress="return(event.charCode>64 && event.charCode<91)||(event.charCode>96&& event.charCode<123)" />
                                    </div>
                                    </div>
                                    <div className="form-group row" style={{display: 'none'}}>
                                    <label htmlFor className="col-sm-4 col-form-label tekila3">Country</label>
                                    <div className="col-sm-8 tekila9">
                                        <select id="countryname" className="form-control form-control-md tekila6 cs-st-slct" required>
                                        <option value="Select">--Please Select--</option>
                                        <option value="India" selected>India</option>
                                        </select>
                                        <p id="countrynameerr" className="val_error cs-st-txt-danger" />
                                    </div>
                                    </div>
                                </form>
                                <div className="modal-footer">
                                    <button className="tekila7 cs-st-bx-btns" onclick="cancel_contact();">Cancel</button>
                                    <button className="tekila8 cs-st-bx-btns" type="submit" id="savecontact_info">Save</button>
                                </div>
                                </div>
                                <input type="hidden" id="userid" name="userid" value="" />
                            </div>
                        </div>
                    </div>


                    <div className="tab" id="accountinfo">
                        <div className="col-md-12">
                        <div className="tekila1">
                            <div className="box-header cs-st-bx-hdr">
                            <h3 className="tekila2">
                                <span style={{borderBottom: '2px solid #ff5745', paddingBottom: 12}}>Account Information</span>
                            </h3>
                            </div>
                            <div className="box-body cs-st-pd2" id="accntinfo">
                            <form className="ml-3">
                                <div className="form-group row">
                                <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">ARN Number </label>
                                <div className="col-sm-8 col-xs-8">
                                    <label className="col-form-label tekila4">Go premium to get ARN number!</label>
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Subscription Type</label>
                                <div className="col-sm-8 col-xs-8">
                                    <label className="col-form-label tekila4">Free Account</label>
                                </div>
                                </div>
                            </form>
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