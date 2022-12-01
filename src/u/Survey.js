import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';


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

      const slctyearoptions = [
        { value: 'Current Session : Apr 2022 - Mar 2023', label: 'Current Session : Apr 2022 - Mar 2023' },
        { value: 'Previous Session : Apr 2021 - Mar 2022', label: 'Previous Session : Apr 2021 - Mar 2022' },
        { value: 'Previous Session : Apr 2020 - Mar 2021', label: 'Previous Session : Apr 2020 - Mar 2021' },
      ];

      const [selectedOption, setSelectedOption] = useState(null);



    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
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
                            <div className="dshbrd-dvv1 row ml-0 mr-0 pb-0">
                                <div className="col-sm-8 pl-0">
                                    <ul className="dshbrd-dvv1-ul">
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="mysrvy" className="dshbrd-dvv1-ul-li-a active dshbrd-dvv1-ul-li-a-mbvw mbvw-ml0" onClick={mysurvyy}>My Survey (30)</a>
                                        </li>
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="pndingsuvry" className="dshbrd-dvv1-ul-li-a dshbrd-dvv1-ul-li-a-mbvw mbvw-mr0" onClick={pndngsrvyy}>Pending Survey (30)</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 pr-0 pl-0">
                                    <Select defaultValue={slctyearoptions[0]} onChange={setSelectedOption} options={slctyearoptions} theme={(theme) => ({...theme, colors: {...theme.colors,primary25: '#f5faff',primary50: '#f5faff',primary: '#54d4f2',}, })} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mmysrvv">

                    <div className="cstm-mrgn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table v-middle p-0 m-0 box" dataPlugin>
                                                    <thead>
                                                    <tr><th>Survey</th>
                                                        <th>Participation Rate</th>
                                                        <th>Schedule</th>
                                                        <th>Status</th>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div id="pnndnggsrvv" style={{display: 'none'}}>

                        <div className="cstm-mrgn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table v-middle p-0 m-0 box" dataPlugin>
                                                    <thead>
                                                    <tr><th>Survey</th>
                                                        <th>Participation Rate</th>
                                                        <th>Schedule</th>
                                                        <th>Status</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="ahover text-truncate wd-235px" title="Family School Relationshp - Pulse-2">Family School Relationshp - Pulse-2 </div>
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
                                                            <div className="ahover text-truncate wd-235px" title="Social &amp; Emotional Learning - Pulse-2">Social &amp; Emotional Learning - Pulse-2 </div>
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
                                                            <div className="ahover text-truncate wd-235px" title="Student School Relationship - Pulse-2">Student School Relationship - Pulse-2 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>7 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '7%'}} />
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
                                                            <div className="ahover text-truncate wd-235px" title="Student Teacher Relationship - Pulse-2">Student Teacher Relationship - Pulse-2 </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>100 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '100%'}} />
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