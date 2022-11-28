import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';


export const SurveyPage = () => {

    const mysurvyy = (e) => {
        $('#mysrvy').addClass('active');
        $('#pndingsuvry').removeClass('active');

        $('#mmysrvv').show();
        $('#pnndnggsrvv').hide();
      }

      const pndngsrvyy = (e) => {
        $('#mysrvy').removeClass('active');
        $('#pndingsuvry').addClass('active');

        $('#mmysrvv').hide();
        $('#pnndnggsrvv').show();
      }


    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div>
                        <div className="col-sm-12">
                            <h1 className="kmcs_h1 bluclr">Overview</h1>
                            <p className="kmcs_p mt-5 bluclr mt-0 mb-5">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 row ml-0 mr-0 ">
                                <div className="col-sm-10 pl-0">
                                    <ul className="dshbrd-dvv1-ul">
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="mysrvy" className="dshbrd-dvv1-ul-li-a active" onClick={mysurvyy}>My Survey (30)</a>
                                        </li>
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="pndingsuvry" className="dshbrd-dvv1-ul-li-a" onClick={pndngsrvyy}>Pending Survey (30)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mmysrvv">

                        <Accordion className="m-3" id="accordion" defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0" >
                                <div className="panel box no-border mb-2">
                                    <Accordion.Header className="box-header p-y-sm srvycstmbxhdr srvycstmbxhdrclrgrnbg">
                                        <div className="text-left">
                                            <div className="p-1">
                                                <div className="text-md">
                                                    <div className="nav-caret"><i className="float-right text-sm fa fa-chevron-down" /> </div>
                                                    <div className>2021</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table v-middle p-0 m-0 box" dataPlugin>
                                                    <thead>
                                                    <tr><th>SURVEY</th>
                                                        <th>PARTICIPATION RATE</th>
                                                        <th>SCHEDULE</th>
                                                        <th>STATUS</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Family School Relationshp - Pulse-1">Family School Relationshp - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                        <span className="text-left" style={{position: 'relative'}}>84 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '84%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm closd pb-6px">Closed</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/3"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Social &amp; Emotional Learning - Pulse-1">Social &amp; Emotional Learning - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>48 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '48%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm closd pb-6px">Closed</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/1"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student School Relationship - Pulse-1">Student School Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>67 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '67%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm closd pb-6px">Closed</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/4"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student Teacher Relationship - Pulse-1">Student Teacher Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>47 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '47%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm closd pb-6px">Closed</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/2"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="1" >
                                <div className="panel box no-border mb-2">
                                    <Accordion.Header className="box-header p-y-sm srvycstmbxhdr srvycstmbxhdrclrgrnbg">
                                        <div className="text-left">
                                            <div className="p-1">
                                                <div className="text-md">
                                                    <div className="nav-caret"><i className="float-right text-sm fa fa-chevron-down" /> </div>
                                                    <div className>2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table v-middle p-0 m-0 box" dataPlugin>
                                                    <thead>
                                                    <tr><th>SURVEY</th>
                                                        <th>PARTICIPATION RATE</th>
                                                        <th>SCHEDULE</th>
                                                        <th>STATUS</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Family School Relationshp - Pulse-1">Family School Relationshp - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                        <span className="text-left" style={{position: 'relative'}}>84 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '84%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Social &amp; Emotional Learning - Pulse-1">Social &amp; Emotional Learning - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>48 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '48%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student School Relationship - Pulse-1">Student School Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>67 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '67%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student Teacher Relationship - Pulse-1">Student Teacher Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>47 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '47%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="2" >
                                <div className="panel box no-border mb-2">
                                    <Accordion.Header className="box-header p-y-sm srvycstmbxhdr srvycstmbxhdrclrgrnbg">
                                        <div className="text-left">
                                            <div className="p-1">
                                                <div className="text-md">
                                                    <div className="nav-caret"><i className="float-right text-sm fa fa-chevron-down" /> </div>
                                                    <div className>2023</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table v-middle p-0 m-0 box" dataPlugin>
                                                    <thead>
                                                    <tr><th>SURVEY</th>
                                                        <th>PARTICIPATION RATE</th>
                                                        <th>SCHEDULE</th>
                                                        <th>STATUS</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Family School Relationshp - Pulse-1">Family School Relationshp - Pulse-1 </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="badge text-sm upcmng pb-6px">Upcoming</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/3"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Social &amp; Emotional Learning - Pulse-1">Social &amp; Emotional Learning - Pulse-1 </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="badge text-sm upcmng pb-6px">Upcoming</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/1"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student School Relationship - Pulse-1">Student School Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="badge text-sm upcmng pb-6px">Upcoming</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/4"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student Teacher Relationship - Pulse-1">Student Teacher Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span> - </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="badge text-sm upcmng pb-6px">Upcoming</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown crsr-dsble">
                                                                <Dropdown.Toggle className="drpdwnbtn dsble">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/2"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                        </Accordion>
                    </div>



                    <div id="pnndnggsrvv" style={{display: 'none'}}>

                        <Accordion className="m-3" id="accordion" defaultActiveKey="0" flush>
                            
                            <Accordion.Item eventKey="0" >
                                <div className="panel box no-border mb-2">
                                    <Accordion.Header className="box-header p-y-sm srvycstmbxhdr srvycstmbxhdrclrgrnbg">
                                        <div className="text-left">
                                            <div className="p-1">
                                                <div className="text-md">
                                                    <div className="nav-caret"><i className="float-right text-sm fa fa-chevron-down" /> </div>
                                                    <div className>2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table v-middle p-0 m-0 box" dataPlugin>
                                                    <thead>
                                                    <tr><th>SURVEY</th>
                                                        <th>PARTICIPATION RATE</th>
                                                        <th>SCHEDULE</th>
                                                        <th>STATUS</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Family School Relationshp - Pulse-1">Family School Relationshp - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                        <span className="text-left" style={{position: 'relative'}}>84 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '84%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Social &amp; Emotional Learning - Pulse-1">Social &amp; Emotional Learning - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>48 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '48%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student School Relationship - Pulse-1">Student School Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>67 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '67%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Student Teacher Relationship - Pulse-1">Student Teacher Relationship - Pulse-1 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>47 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '47%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="drpdwnbtn">
                                                                <i className="fa fa-fw fa-ellipsis-v" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                        </Accordion>
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