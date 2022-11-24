import React, { useState } from "react";
import $ from 'jquery';
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "@createnl/grouped-checkboxes";
import '../Content/Content/dashboard.css';
import '../Content/Content/tblcss.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { PieChart, Pie} from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';


export const Staffpage = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);

    const allstff = () => {
        $('#alstf').addClass('active');
        $('#pendgaprvl').removeClass('active');
        $('#stfinvtd').removeClass('active');
        $('#stfrjct').removeClass('active');

        $('#alstfff').show();
        $('#psndaprvlstfff').hide();
        $('#invtdstfff').hide();
        $('#rjctstfff').hide();
    }

    const pendingaproval = () => {
        $('#pendgaprvl').addClass('active');
        $('#alstf').removeClass('active');
        $('#stfinvtd').removeClass('active');
        $('#stfrjct').removeClass('active');

        $('#alstfff').hide();
        $('#psndaprvlstfff').show();
        $('#invtdstfff').hide();
        $('#rjctstfff').hide();        
    }

    const staffinvtd = () => {
        $('#stfinvtd').addClass('active');
        $('#pendgaprvl').removeClass('active');
        $('#alstf').removeClass('active');
        $('#stfrjct').removeClass('active');

        $('#alstfff').hide();
        $('#psndaprvlstfff').hide();
        $('#invtdstfff').show();
        $('#rjctstfff').hide();
        
    }

    const stffreject = () => {
        $('#stfrjct').addClass('active');
        $('#pendgaprvl').removeClass('active');
        $('#stfinvtd').removeClass('active');
        $('#alstf').removeClass('active');

        $('#alstfff').hide();
        $('#psndaprvlstfff').hide();
        $('#invtdstfff').hide();
        $('#rjctstfff').show();
        
    }

    const [onChangee, setOnChangee] = React.useState({});
    const [showOnChangee, setShowOnChangee] = React.useState(true);

    const chckerslctallbx = () => {

        if($('#tblcstslctallstff1').is(":checked")) {
            $('#actnstff1').removeClass('dis');
        } else {
            $('#actnstff1').addClass('dis');
        }
    }

    const chckerslctbx = () => {

        if($('.chckbxstffpg').is(":checked")) {
            $('#actnstff1').removeClass('dis');
        } else {
            $('#actnstff1').addClass('dis');
        }
    }

    const chckerslctallbx2 = () => {

        if($('#tblcstslctallstff2').is(":checked")) {
            $('#actnstff2').removeClass('dis');
        } else {
            $('#actnstff2').addClass('dis');
        }
    }

    const chckerslctbx2 = () => {

        if($('.chckbxstffpg2').is(":checked")) {
            $('#actnstff2').removeClass('dis');
        } else {
            $('#actnstff2').addClass('dis');
        }
    }

    const chckerslctallbx3 = () => {

        if($('#tblcstslctallstff3').is(":checked")) {
            $('#actnstff3').removeClass('dis');
        } else {
            $('#actnstff3').addClass('dis');
        }
    }

    const chckerslctbx3 = () => {

        if($('.chckbxstffpg3').is(":checked")) {
            $('#actnstff3').removeClass('dis');
        } else {
            $('#actnstff3').addClass('dis');
        }
    }

    const chckerslctallbx4 = () => {

        if($('#tblcstslctallstff4').is(":checked")) {
            $('#actnstff4').removeClass('dis');
        } else {
            $('#actnstff4').addClass('dis');
        }
    }

    const chckerslctbx4 = () => {

        if($('.chckbxstffpg4').is(":checked")) {
            $('#actnstff4').removeClass('dis');
        } else {
            $('#actnstff4').addClass('dis');
        }
    }

      const data01 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
          
            <div className="cs-pdng">

                <div className="wdth-ipdwvw-cs">
                    <div className="wdth-ipdwvw-csdvd">
                        <h1 className="kmcs_h1">Explore New &amp; Trending Design Jobs</h1>
                        <p className="kmcs_p mt-5">
                            Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.
                        </p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9 pr-5px">
                        {/* <div className="box mt-10px">
                            <div className="box-body">
                                <form className="">
                                    <div className="form-group">
                                            <div className="bg-csmm">
                                                <div className="mb-15px">
                                                    <div className="col-sm-12 cstsbx1">
                                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Overall Engagement Score</h1>
                                                    </div>
                                                </div>
                                                <div className="row m-0 csdv1">
                                                    <div className="col-sm-4">
                                                        <div className="block clearfix">
                                                            <div className="">
                                                                {/* <div className="easypiechart" dataPlugin="easyPieChart" dataPercent="40" data-size="150" dataScaleLength="2" dataLineWidth="12">
                                                                    <div>
                                                                        <h4 className="text-3x text-blucs _400">40</h4>
                                                                    </div>
                                                                </div> */}
                                                                {/* <PieChart width={250} height={250}>
                                                                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="orange" label />
                                                                </PieChart>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8 col-sm-offset-8 mt-5">
                                                        <h6 style={{color: "#333e63", fontSize: "18px"}}>How are we doing? Fair!</h6>
                                                        <p style={{fontSize: "14px"}}>Your students are happy and motivated some of the time. Use the analyze tools to see what's working for you and what can be improved.</p>
                                                        <small className="text-sm mb-1 _500" style={{color: "#333e63"}}> Total Responses: 250 </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div> */}

                        <div className="mt-10px">
                            <div>
                                <div className="col-sm-12 cstsbx1">
                                    <div className="dshbrd-dvv1 row ml-0 mr-0 ">
                                        <div className="col-sm-10 pl-0">
                                            <ul className="dshbrd-dvv1-ul">
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a onClick={allstff} id="alstf" className="dshbrd-dvv1-ul-li-a active">All Staff (70)</a>
                                                </li>
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a onClick={pendingaproval} id="pendgaprvl" className="dshbrd-dvv1-ul-li-a">Pending Approval (30)</a>
                                                </li>
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a onClick={staffinvtd} id="stfinvtd" className="dshbrd-dvv1-ul-li-a">Invited (30)</a>
                                                </li>
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a onClick={stffreject} id="stfrjct" className="dshbrd-dvv1-ul-li-a">Rejected (20)</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-2 text-right pr-0">
                                            <Dropdown>
                                                <Dropdown.Toggle className="adtchrbtn">
                                                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                    <div className="tbl-dropdown-item dropdown-item crsr-dis">Add teacher</div>
                                                    <div className="tbl-dropdown-item dropdown-item crsr-dis">Bulk Import</div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="alstfff" style={{display: 'block'}}>
                                <div className="row">
                                    <div className="col-sm-12" id="stftabl">
                                    <table className="table">
                                        <CheckboxGroup onChange={setOnChangee}>
                                            <thead>
                                            <tr>
                                                <th className="brdr-n wd-15px">
                                                    <div>
                                                        <AllCheckerCheckbox type="checkbox" id="tblcstslctallstff1" title="Select all" onClick={chckerslctallbx} />
                                                    </div>
                                                </th>
                                                <th className="brdr-n">                                            
                                                    <div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtn dis" id="actnstff1">
                                                            <span>Action</span>
                                                            <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </div>
                                                </th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtnsrtng">
                                                            AZ <i className="fa fa-sort"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting A-Z</div>
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting Z-A</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" id="tblcstslctstff1" title="Select" className="slct1id chckbxstffpg" onClick={chckerslctbx} />
                                                    </div>
                                                </td>
                                                <td><div title="ABC" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> ABC</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow2}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg" onClick={chckerslctbx} id="tblcstslctstff2" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="ABC" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> ABC</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow2}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg" onClick={chckerslctbx} id="tblcstslctstff3" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="ABC" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> ABC</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow2}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg" onClick={chckerslctbx} id="tblcstslctstff3" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="ABC" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> ABC</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow2}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </CheckboxGroup>
                                    </table>
                                    </div>
                                </div>
                            </div>

                            <div id="psndaprvlstfff" style={{display: 'none'}}>
                                <div className="row">
                                    <div className="col-sm-12" id="stftabl">
                                    <table className="table">
                                        <CheckboxGroup onChange={setOnChangee}>
                                            <thead>
                                            <tr>
                                                <th className="brdr-n wd-15px">
                                                    <div>
                                                        <AllCheckerCheckbox type="checkbox" id="tblcstslctallstff2" title="Select all" onClick={chckerslctallbx2} />
                                                    </div>
                                                </th>
                                                <th className="brdr-n">                                            
                                                    <div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtn dis" id="actnstff2">
                                                            <span>Action</span>
                                                            <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow5}>Reject</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow6}>Approve</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </div>
                                                </th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtnsrtng">
                                                            AZ <i className="fa fa-sort"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting A-Z</div>
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting Z-A</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff1" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="DEF" onClick={handleShow3}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> DEF</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow5}>Reject</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow6}>Approve</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow3}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff2" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="DEF" onClick={handleShow3}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> DEF</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow5}>Reject</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow6}>Approve</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow3}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff3" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="DEF" onClick={handleShow3}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> DEF</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow5}>Reject</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow6}>Approve</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow3}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff4" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="DEF" onClick={handleShow3}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> DEF</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow5}>Reject</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow6}>Approve</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow3}>Info</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </CheckboxGroup>
                                    </table>
                                    </div>
                                </div>
                            </div>

                            <div id="invtdstfff" style={{display: 'none'}}>
                                <div className="row">
                                    <div className="col-sm-12" id="stftabl">
                                    <table className="table">                                        
                                        <CheckboxGroup onChange={setOnChangee}>
                                            <thead>
                                            <tr>
                                                <th className="brdr-n wd-15px">
                                                    <div>
                                                        <AllCheckerCheckbox type="checkbox" id="tblcstslctallstff3" title="Select all" onClick={chckerslctallbx3} />
                                                    </div>
                                                </th>
                                                <th className="brdr-n">                                            
                                                    <div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtn dis" id="actnstff3">
                                                            <span>Action</span>
                                                            <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </div>
                                                </th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtnsrtng">
                                                            AZ <i className="fa fa-sort"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting A-Z</div>
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting Z-A</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg3" onClick={chckerslctbx3} id="tblcstslctstff1" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="GHI" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> GHI</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow7}>Resend mail</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg3" onClick={chckerslctbx3} id="tblcstslctstff2" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="GHI" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> GHI</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow7}>Resend mail</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg3" onClick={chckerslctbx3} id="tblcstslctstff3" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="GHI" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> GHI</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow7}>Resend mail</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg3" onClick={chckerslctbx3} id="tblcstslctstff4" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="GHI" onClick={handleShow2}><img src="../Images/user-blue-imgg.png" className="tblusricnimg" /> GHI</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow7}>Resend mail</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            </tbody>
                                        
                                        </CheckboxGroup>
                                    </table>
                                    </div>
                                </div>
                            </div>

                            <div id="rjctstfff" style={{display: 'none'}}>
                                <div className="row">
                                    <div className="col-sm-12" id="stftabl">
                                    <table className="table">                                        
                                        <CheckboxGroup onChange={setOnChangee}>
                                            <thead>
                                            <tr>
                                                <th className="brdr-n wd-15px">
                                                    <div>
                                                        <AllCheckerCheckbox type="checkbox" id="tblcstslctallstff4" title="Select all" onClick={chckerslctallbx4} />
                                                    </div>
                                                </th>
                                                <th className="brdr-n">                                            
                                                    <div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtn dis" id="actnstff4">
                                                            <span>Action</span>
                                                            <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow4}>Put Back</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </div>
                                                </th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n"></th>
                                                <th className="brdr-n text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tblcstslctbtnsrtng">
                                                            AZ <i className="fa fa-sort"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting A-Z</div>
                                                            <div className="tbl-dropdown-item dropdown-item crsr-dis">Sorting Z-A</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} id="tblcstslctstff1" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="JKL" onClick={handleShow8}><img src="../Images/user-disabled-imgg.png" className="tblusricnimg" /> JKL</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow4}>Put Back</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} id="tblcstslctstff2" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="JKL" onClick={handleShow8}><img src="../Images/user-disabled-imgg.png" className="tblusricnimg" /> JKL</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow4}>Put Back</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} id="tblcstslctstff3" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="JKL" onClick={handleShow8}><img src="../Images/user-disabled-imgg.png" className="tblusricnimg" /> JKL</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow4}>Put Back</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} id="tblcstslctstff4" title="Select" />
                                                    </div>
                                                </td>
                                                <td><div title="JKL" onClick={handleShow8}><img src="../Images/user-disabled-imgg.png" className="tblusricnimg" /> JKL</div></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right pr-4">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="tbl-drpbtnndw">
                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow4}>Put Back</div>
                                                            <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            </tbody>
                                        
                                        </CheckboxGroup>
                                    </table>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>            
        </div>

        <Modal show={show} onHide={handleClose} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to remove?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose}>
                Close
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>

        

        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header closeButton>
            <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center infomdvmdl1">
                    <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                    <p className="infomdvmdl2">XYZ</p>
                    <div className="infomdvmdl3">Teacher</div>
                </div>
                <div className="infomdvmdl4 text-center">
                    <p>Subject - Hindi, English</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose2}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        

        <Modal show={show3} onHide={handleClose3} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header closeButton>
            <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center infomdvmdl1">
                    <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                    <p className="infomdvmdl2">XYZ</p>
                    <div className="infomdvmdl3">Teacher</div>
                </div>
                <div className="infomdvmdl4 text-center">
                    <p>Subject - Hindi, English</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose3}>
                Reject
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose3}>
                Approve
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={show4} onHide={handleClose4} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to put this back?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose4}>
                Close
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose4}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={show5} onHide={handleClose5} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to reject?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose5}>
                Close
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose5}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={show6} onHide={handleClose6} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to confirm?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose6}>
                Close
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose6}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={show7} onHide={handleClose7} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Resent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Mail is re-sent on <b>test@gmail.com</b>.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose7}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        

        <Modal show={show8} onHide={handleClose8} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header closeButton>
            <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center infomdvmdl1">
                    <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                    <p className="infomdvmdl2">XYZ</p>
                    <div className="infomdvmdl3">Teacher</div>
                </div>
                <div className="infomdvmdl4 text-center">
                    <p>Subject - Hindi, English</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose8}>
                Reject
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose8}>
                Approve
            </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;