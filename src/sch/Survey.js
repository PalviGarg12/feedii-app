import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboard } from '../secondheaderschsrvydashboard';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyPage = () => {
    const [loader, showLoader, hideLoader] = useLoader();
    
    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);


    const [surveyupcoming, setsurveyupcoming] = useState([]);
    const [surveycurrent, setsurveycurrent] = useState([]);
    const [surveysession, setsurveysession] = useState([]);
    const [session, setsessionval] = useState(""); 

    const dataFetchedRef = useRef(false);
    const dataFetchedRefCurrent = useRef(false);
    const dataFetchedRefsession = useRef(false);
    const dataFetchedRefsessionfetch = useRef(false);
    var schoolcurrentid = 0;
    const dataFetchedRefteacher = useRef(false);
    const dataFetchedRefschool = useRef(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [studentTeacher, setstudentteachers] = useState([]);
    const [schooldetails, setschooldetails] = useState([]);

    const sessionscholid = sessionStorage.getItem('schoolidsession');

    if(sessionscholid == null) {
        window.location.href="/";
    }
    else {}
    
    React.useEffect(
        ()=> {      

        fetch('https://feediiapi.azurewebsites.net/api/admin/getAdminSurveyDetailAged/' + sessionscholid , {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveyupcoming(data);
            setTimeout(function () {
                hideLoader();
                $('#login').show();
            }, 1000);

        })
        .catch(error =>{
            console.log(error);
        });



        //alert(sessionscholid);
        fetch('https://feediiapi.azurewebsites.net/api/admin/getAdminSurveyDetail/' + sessionscholid , {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRefCurrent.current) return;
            dataFetchedRefCurrent.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveycurrent(data);

        })
        .catch(error =>{
            console.log(error);
        });

        })
                    
          
        let completedcount = 0;
        for (let i = 0; i < surveycurrent.length; i++) {
          if (surveycurrent[i].Status === 'Completed') completedcount++;
        }

        let completedcountaged = 0;
        for (let i = 0; i < surveyupcoming.length; i++) {
          if (surveyupcoming[i].Status === 'Completed') completedcountaged++;
        }


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


      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => {
          setShow(true);
      }

      const [show2, setShow2] = useState(false);
      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => {
          setShow2(true);
      }


      const fetchstaffdetails = (pulseid) => {
        setIsLoading(true);
        //alert(pulseid + "-" + "Student" + "-" +  "Teacher" + "-" + 0);
        fetch('https://feediiapi.azurewebsites.net/api/admin/getAdminSurveyTargetSummary/' + pulseid + "-" + "Student" + "-" +  "Teacher" + "-" + 0  , {   //studentid-pulseid
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setstudentteachers(data);
            setIsLoading(false);
         

        })
        .catch(error =>{
            console.log(error);
        });   
    }

    const fetchpulseid = (pulseid) => {
        sessionStorage.setItem("pulseidsession",pulseid);
        
      }

      const fetchsurveyid = (surveyid) => {
        sessionStorage.setItem("surveyidsession",surveyid);
        
      }


    const fetchschooldetails = (pulseid,participant,target) => {
        //alert(pulseid);
            setIsLoading2(true);
           //alert(pulseid + "-" + participant + "-" +  target + "-" + 0);
        fetch('https://feediiapi.azurewebsites.net/api/admin/getAdminSurveyTargetSummary/' + pulseid + "-" + participant + "-" +  target + "-" + 0 , {   //pulseid-participantid
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            // if (dataFetchedRefschool.current) return;
            // dataFetchedRefschool.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setschooldetails(data);
            setIsLoading2(false);
          

        })
        .catch(error =>{
            console.log(error);
        });   
    }

    if(surveycurrent.length == 0) {
         $('#errdv1').show();
         $('.tbldtaa1').hide();
     }
     else {
         $('.tbldtaa1').show();
         $('#errdv1').hide();
     }

     if(surveyupcoming.length == 0) {
          $('#errdv2').show();
          $('.tbldtaa2').hide();
      }
      else {
          $('.tbldtaa2').show();
          $('#errdv2').hide();
      }

    return <div>
        <SecondHeaderSchSrvysdashboard />
        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div>
                        <div className="col-sm-12">
                            <h1 className="kmcs_h1 bluclr">Overview</h1>
                            <p className="kmcs_p mt-5 bluclr mt-0 mb-4">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 row ml-0 mr-0 pb-0">
                                <div className="col-sm-8 pl-0">
                                    <ul className="dshbrd-dvv1-ul">
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="mysrvy" className="dshbrd-dvv1-ul-li-a active dshbrd-dvv1-ul-li-a-mbvw mbvw-ml0" onClick={mysurvyy}>All Surveys ({surveycurrent.length})</a>
                                        </li>
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="pndingsuvry" className="dshbrd-dvv1-ul-li-a dshbrd-dvv1-ul-li-a-mbvw mbvw-mr0" onClick={pndngsrvyy}>Expired ({surveyupcoming.length})</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                    {/* <div className="col-sm-4 pr-0 pl-0 kckh48 kckhkcstm8 mb-0">
                                        <div className="custom-selectt custom-selecttsrvy">
                                        {/* <Select defaultValue={slctyearoptions[0]} onChange={setSelectedOption} options={slctyearoptions} theme={(theme) => ({...theme, colors: {...theme.colors,primary25: '#f5faff',primary50: '#f5faff',primary: '#54d4f2',}, })} /> */}
                                    
                                        {/*<select id="selectsesssionn" className="mbl-inp cs-slct-fld slct-cstm1 cstmsrvyslct-cstm1" onChange={(e) => slctoptndta(e)}>
                                            {surveysession.map((session) => (
                                                <option value={session.schoolsessionId}>{session.schoolsession}</option>
                                            ))}
                                        </select>
                                    </div> 
                                </div>*/}
                                   
                                    
                                
                                
                            </div>
                        </div>
                    </div>

                    <div id="mmysrvv">

                    <div className="cstm-mrgn cstmbracrdnn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive ht-auto">
                                                <div id="errdv1">
                                                    <div className="nodtadv1 brdr-top-none">
                                                        <div>
                                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                            <div className="nodtadv1txt">No Data Found</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box tbldtaa1 brdr-none">
                                                    <thead className="cstmsrtbthdbrdr">
                                                    <tr><th>Surveys ({completedcount} / {surveycurrent.length})</th>
                                                        <th>Period</th>
                                                        <th>Response Progress</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody className="cstmmxhtbdytbb cstmsrtbtbdybrdr">
                                                    {surveycurrent.map((active)=>{
                                                        if(active.participant == "Student" && active.target == "School") {
                                                            
                                                            if(active.Status == "Not Started") {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveystsc' onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>
                                                                                <div className="col-sm-12 row p-0 m-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title={active.Pulsename}>
                                                                                        {active.Pulsename}
                                                                                    </div>                                                                                
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=> {fetchpulseid(active.pulseid); fetchsurveyid(active.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target}</div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(active.pulseid,active.participant,active.target);  handleShow2(); }} >
                                                                                    <span className="tblsvprgstxt">{active.Status}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveystsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                            else if(active.Status == "Upcoming")
                                                            {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                                <div className="tbltddv1 text-truncate cstmwdtbldv" title={active.Pulsename} onClick={()=> {fetchpulseid(active.pulseid); }}>
                                                                                    {active.Pulsename}
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target} </div>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchstaffdetails(active.pulseid); }} >
                                                                                    <span className="tblsvprgstxt crsr-auto">{active.Status}</span>
                                                                                    {/* <span className="float-right">{active.CompletedCount}</span> */}
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <button className="modalGrayBtn cstmmbtnn upcmngdsblbtnnn" onClick={()=> {fetchpulseid(active.pulseid); }}>Upcoming</button>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                            else {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveystsc' onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title={active.Pulsename}>
                                                                                        {active.Pulsename}
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(active.pulseid); fetchsurveyid(active.surveyID);}} ></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target} </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(active.pulseid,active.participant,active.target);  handleShow2(); }} >
                                                                                    <span className="tblsvprgstxt">{active.Status}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveystsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }

                                                        }
                                                        else if(active.participant == "Student" && active.target == "Teacher") {
                                                            if(active.Status == "Not Started") {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveysttch' onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title={active.Pulsename}>
                                                                                        {active.Pulsename}
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(active.pulseid); fetchsurveyid(active.surveyID);}}></i>
                                                                                    </Link>
                                                                                    </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target}</div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchstaffdetails(active.pulseid); handleShow(); }} >
                                                                                    <span className="tblsvprgstxt">{active.Status}</span>
                                                                                    <span className="float-right">{active.CompletedCount}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveysttch'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                            else if(active.Status == "Upcoming") {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                                <div className="tbltddv1 text-truncate cstmwdtbldv" title={active.Pulsename} onClick={()=> {fetchpulseid(active.pulseid); }}>
                                                                                    {active.Pulsename}
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target} </div>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchstaffdetails(active.pulseid); }} >
                                                                                    <span className="tblsvprgstxt crsr-auto">{active.Status}</span>
                                                                                    {/* <span className="float-right">{active.CompletedCount}</span> */}
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <button className="modalGrayBtn cstmmbtnn upcmngdsblbtnnn" onClick={()=> {fetchpulseid(active.pulseid); }}>Upcoming</button>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                            else {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveysttch' onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title={active.Pulsename}>
                                                                                        {active.Pulsename}
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(active.pulseid); fetchsurveyid(active.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target} </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchstaffdetails(active.pulseid); handleShow(); }} >
                                                                                    <span className="tblsvprgstxt">{active.Status}</span>
                                                                                    <span className="float-right">{active.CompletedCount}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveysttch'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                        }

                                                        else if(active.participant == "Teacher" && active.target == "School") {
                                                            
                                                            if(active.Status == "Not Started") {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveytchsc' onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title={active.Pulsename}>
                                                                                        {active.Pulsename}
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" onClick={()=>{fetchpulseid(active.pulseid); fetchsurveyid(active.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target}</div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(active.pulseid,active.participant,active.target); handleShow2(); }} >
                                                                                    <span className="tblsvprgstxt">{active.Status}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveytchsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                            else if(active.Status == "Upcoming")
                                                            {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                                <div className="tbltddv1 text-truncate cstmwdtbldv" title={active.Pulsename} onClick={()=> {fetchpulseid(active.pulseid); }}>
                                                                                    {active.Pulsename}
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target} </div>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchstaffdetails(active.pulseid); }} >
                                                                                    <span className="tblsvprgstxt crsr-auto">{active.Status}</span>
                                                                                    {/* <span className="float-right">{active.CompletedCount}</span> */}
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <button className="modalGrayBtn cstmmbtnn upcmngdsblbtnnn" onClick={()=> {fetchpulseid(active.pulseid); }}>Upcoming</button>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                            else {
                                                                return(
                                                                
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveytchsc' onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title={active.Pulsename}>
                                                                                        {active.Pulsename}
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(active.pulseid); fetchsurveyid(active.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target} </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{active.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(active.pulseid,active.participant,active.target); handleShow2(); }} >
                                                                                    <span className="tblsvprgstxt">{active.Status}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveytchsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }

                                                        }


                                                        else {
                                                            return(
                                                                
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/sch/surveytchsc' onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>
                                                                            <div className="col-sm-12 row m-0 p-0">
                                                                                <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title={active.Pulsename}>
                                                                                    {active.Pulsename}
                                                                                </div>
                                                                                <Link to='/sch/surveytemplateone'>
                                                                                    <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(active.pulseid); fetchsurveyid(active.surveyID);}}></i>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="tbltddv2 text-truncate cstmwdtbldv">{active.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {active.target}</div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">{active.Schedule}</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{width: `${active.CompletionPer}%`}}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                                <span className="tblsvprgstxt">{active.Status}</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <Link to='/sch/surveytchsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseid(active.pulseid);fetchsurveyid(active.surveyID); }}>View</button></Link>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    })}
                                                        

                                                        
                                                      
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

                        <div className="cstm-mrgn cstmbracrdnn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive ht-auto">
                                                <div id="errdv2">
                                                    <div className="nodtadv1 brdr-top-none">
                                                        <div>
                                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                            <div className="nodtadv1txt">No Data Found</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box tbldtaa2 brdr-none">
                                                    <thead className="cstmsrtbthdbrdr">
                                                    <tr><th>Surveys ({completedcountaged} / {surveyupcoming.length})</th>
                                                        <th>Period</th>
                                                        <th>Response Progress</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody className="cstmmxhtbdytbb cstmsrtbtbdybrdr">
                                                    {surveyupcoming.map((upcoming)=>{
                                                         if(upcoming.participant == "Student" && upcoming.target == "School") {
                                                        
                                                            if(upcoming.Status == "Expired") {
                                                                return(
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveystsc' onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid); }}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title= {upcoming.Pulsename} >
                                                                                        {upcoming.Pulsename} 
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(upcoming.pulseid); fetchsurveyid(upcoming.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{upcoming.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {upcoming.target} </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{upcoming.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${upcoming.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(upcoming.pulseid,upcoming.participant,upcoming.target);handleShow2(); }} >
                                                                                    <span className="tblsvprgstxt">{upcoming.TextStatus}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveystsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchsurveyid(upcoming.surveyID);fetchpulseid(upcoming.pulseid); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            }
                                                            else {
                                                                return(
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveystsc' onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid);}}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title= {upcoming.Pulsename} >
                                                                                        {upcoming.Pulsename}
                                                                                    </div> 
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(upcoming.pulseid); fetchsurveyid(upcoming.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{upcoming.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {upcoming.target} </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{upcoming.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${upcoming.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(upcoming.pulseid,upcoming.participant,upcoming.target);handleShow2(); }} >
                                                                                    <span className="tblsvprgstxt">{upcoming.TextStatus}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveystsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid); }}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            }

                                                        }
                                                        else if(upcoming.participant == "Student" && upcoming.target == "Teacher")
                                                        {
                                                                return(
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveysttch' onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid);}}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title= {upcoming.Pulsename} >
                                                                                        {upcoming.Pulsename} 
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(upcoming.pulseid); fetchsurveyid(upcoming.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{upcoming.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {upcoming.target} </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{upcoming.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${upcoming.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchstaffdetails(upcoming.pulseid);handleShow(); }} >
                                                                                    <span className="tblsvprgstxt">{upcoming.TextStatus}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveysttch'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid);}}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                        }
                                                        else if(upcoming.participant == "Teacher" && upcoming.target == "School")
                                                        {
                                                                return(
                                                                    <tr>
                                                                        <td>
                                                                            <Link to='/sch/surveytchsc' onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid);}}>
                                                                                <div className="col-sm-12 row m-0 p-0">
                                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title= {upcoming.Pulsename} >
                                                                                        {upcoming.Pulsename} 
                                                                                    </div>
                                                                                    <Link to='/sch/surveytemplateone'>
                                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(upcoming.pulseid); fetchsurveyid(upcoming.surveyID);}}></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">{upcoming.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {upcoming.target} </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">{upcoming.Schedule}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `${upcoming.CompletionPer}%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(upcoming.pulseid,upcoming.participant,upcoming.target);handleShow2(); }} >
                                                                                    <span className="tblsvprgstxt">{upcoming.TextStatus}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <Link to='/sch/surveytchsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid);}}>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                        }
                                                        else {
                                                            return(
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/sch/surveytchsc' onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid);}}>
                                                                            <div className="col-sm-12 row m-0 p-0">
                                                                                <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title= {upcoming.Pulsename} >
                                                                                    {upcoming.Pulsename} 
                                                                                </div>
                                                                                <Link to='/sch/surveytemplateone'>
                                                                                    <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template"  onClick={()=>{fetchpulseid(upcoming.pulseid); fetchsurveyid(upcoming.surveyID);}}></i>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="tbltddv2 text-truncate cstmwdtbldv">{upcoming.participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {upcoming.target}</div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">{upcoming.Schedule}</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{width: `${upcoming.CompletionPer}%`}}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                                <span className="tblsvprgstxt">{upcoming.TextStatus}</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <Link to='/sch/surveytchsc'><button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchsurveyid(upcoming.surveyID); fetchpulseid(upcoming.pulseid);}}>View</button></Link>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                        
                                                        })}
                                                      
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

        
        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">Teachers</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm cstmhtscrlmdl">
                {isLoading ? (
                    <div className="text-center">
                        <img src="../Images/loader.gif" alt="Loader" />
                    </div>
                ) : studentTeacher.length === 0 ? (
                    <div className="text-center">
                    <img
                        className="nodtadv1img"
                        src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg"
                        width="150"
                        alt="Error Image"
                    />
                    <div className="nodtadv1txt">No Data Found</div>
                    </div>
                ) : (
                        studentTeacher.map((teacher) => {
                           if(teacher.Status == "Not Started") {
                                return(
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d wd-70p" title={teacher.targetName}>{teacher.targetName}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">{teacher.Status}</span>
                                            <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                                        </div>
                                    </div>
                                            )
                                }
                            else if(teacher.Status == "Inprogress") {
                                    //alert('here');
                                return(
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d wd-70p" title={teacher.targetName}>{teacher.targetName}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">{teacher.Status}</span>
                                            <img className="ml-4" src="../Images/greycircle-1.png" width="22" alt="Image" />
                                            </div>
                                        </div>
                                )
                            }
                            else if(teacher.Status == "Completed") {
                                return(
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d wd-70p" title={teacher.targetName}>{teacher.targetName}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">{teacher.Status}</span>
                                            <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                                        </div>
                                    </div>
                                )
                            }
                            else {
        
                            }
                        }))
                    }
                
            </Modal.Body>



            
        </Modal>

        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">School</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                {isLoading2 ? (
                    <div className="text-center">
                        <img src="../Images/loader.gif" width='60' alt="Loader" style={{marginTop: '-10px'}} />
                    </div>
                    ) : schooldetails.length === 0 ? (
                        <div className="text-center">
                        <img
                            className="nodtadv1img"
                            src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg"
                            width="150"
                            alt="Error Image"
                        />
                        <div className="nodtadv1txt">No Data Found</div>
                        </div>
                    ) : (
                        schooldetails.map((school) => {
                        if(school.Status == "Not Started") {
                            return(
                                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                    <div className="col-sm-6 pl-0">
                                        <div className="row m-0">
                                            <img src="../Images/school-building.png" width="24" className="mr-3 mt--5px" alt="School Image" />
                                            <span className="text-truncate mdldvdv12d cstmwdmdl" title={school.targetName}>{school.targetName}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <span className="text-truncate mdldvdv12d">{school.Status}</span>
                                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                                    </div>
                                </div>
                            )
                        }
                        else {
                            if(school.Status == "Completed") {
                                return(
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/school-building.png" width="24" className="mr-3 mt--5px" alt="School Image" />
                                                <span className="text-truncate mdldvdv12d cstmwdmdl" title={school.targetName}>{school.targetName}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">{school.Status}</span>
                                            <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                                        </div>
                                    </div>
                                )
                            }
                            else if(school.Status == "Inprogress") {
                                return(
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/school-building.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d cstmwdmdl" title={school.targetName}>{school.targetName}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">{school.Status}</span>
                                            <img className="ml-4" src="../Images/grey circle-1.png" width="22" alt="Image" />
                                        </div>
                                    </div>
                                )
                            }
                            else if(school.Status == "Expired") {
                                return(
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/school-building.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d cstmwdmdl" title={school.targetName}>{school.targetName}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">{school.Status}</span>
                                            <img className="ml-4" src="../Images/grey circle-1.png" width="22" alt="Image" />
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                
                            }
                        }
                        }))
                    }
            </Modal.Body>
        </Modal>


    </div>
}

// export default Details;