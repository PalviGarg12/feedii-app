import logo from './feediilogo.png';
import './Content/Content/login.css';
import './App.css';
import './Content/Content/headerdashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Headerclssrm = () => {

    return <div>

                <div className="content-header custom-blue box-shadow-4" id="content-header">
                    <div className="navbar navbar-expand-lg" style={{ margin: "1px 60px 0", paddingBottom: "0" }}>
                        <div className="navbar-text nav-title pt-0" id="pageTitle">
                            <div style={{display: 'flex'}}>
                                <Link href="/sch/classroom" className='bckbtnhdr' alt="Back Button">
                                    <i className="fa fa-chevron-left"></i>
                                </Link>
                                <div>
                                    <span style={{fontSize: '12px', marginBottom: '-4px', display: 'block'}}>6</span>
                                    <span style={{fontSize: '12px'}}>A</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row nvhdrhde" style={{width: "100%", textAlign: "center", justifyContent: "center"}}>
                            <div>
                                <Link to="/sch/class">
                                    <button className="dshbdhdrbtn active" id="staff">
                                        Overview
                                    </button>
                                </Link>
                                <Link to="/sch/classsurveys">
                                    <button className="dshbdhdrbtn" id="srvy">
                                        Survey
                                    </button>
                                </Link>
                                <Link to="/sch/classreports">
                                    <button className="dshbdhdrbtn" id="clsrm">
                                        Reports
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <ul className="nav flex-row order-lg-2 mt--7px">
                            <li className="dropdown d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center drpbtnndw">
                                        <span className="avatar w-32 brdr">
                                            A
                                        </span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="drpdwnmnu">
                                        <Link to="/u/profile" className="dropdown-item btnclclclk">Profile</Link>
                                        <Link to="/" className="dropdown-item btnclclclk">Sign out</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     
}