import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboardtwo } from '../secondheaderschsrvydashboardtwo';
import '../AllJs/dashboard-staff.js';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyTeacherStudentPage = () => {
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
   

    const sessionstudentid = sessionStorage.getItem('studentidsession');

    React.useEffect(
        ()=> {      

           
        //     fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getSession/' + 3, {
        //     method: 'GET'
        //   }) .then((response) => response.json())
        //   .then((data) => {
        //     if (dataFetchedRefsession.current) return;
        //     dataFetchedRefsession.current = true;
            
        //     var objj = JSON.stringify(data);
        //     var parse = JSON.parse(objj);
           
        //     setsurveysession(data)
        //     hideLoader();
        //     $('#login').show();
        //     schoolcurrentid=data[0].schoolsessionId
        //     //setsessionval(data[0].schoolsessionId)

        //             })
        //             .catch(error =>{
        //                 console.log(error);
        //             });




        fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetailFixed/' + 1 , {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveyupcoming(data)
            hideLoader();
             $('#login').show();

        })
        .catch(error =>{
            console.log(error);
        });



        fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetail/' + 1 , {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRefCurrent.current) return;
            dataFetchedRefCurrent.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveycurrent(data)

        })
        .catch(error =>{
            console.log(error);
        });



                    })
                    
          



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

   

    // const slctoptndta = (sessionId) => {
    //     var opnvl = $('#selectsesssionn').val();
    //     alert(opnvl);

        

    //         fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetailUpcomming/' + sessionstudentid + '-' + opnvl, {
    //             method: 'GET'
    //         }) .then((response) => response.json())
    //         .then((data) => {
               
                
    //             var objj = JSON.stringify(data);
    //             var parse = JSON.parse(objj);
            
    //             setsurveyupcoming(data)

    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         });



    //         fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetail/' + studentid + '-' +  opnvl, {
    //             method: 'GET'
    //         }) .then((response) => response.json())
    //         .then((data) => {
                
                
    //             var objj = JSON.stringify(data);
    //             var parse = JSON.parse(objj);
            
    //             setsurveycurrent(data)

    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         });

    // }

      const slctyearoptions = [
        { value: 'Current Session : Apr 2022 - Mar 2023', label: 'Current Session : Apr 2022 - Mar 2023' },
        { value: 'Previous Session : Apr 2021 - Mar 2022', label: 'Previous Session : Apr 2021 - Mar 2022' },
        { value: 'Previous Session : Apr 2020 - Mar 2021', label: 'Previous Session : Apr 2020 - Mar 2021' },
      ];

      const slctdrpdwnoptions = [
        { label: 'All Classes', value: 'All Classes'},
        { label: 'Class 6th - A', value: 'Class 6th - A'},
      ];

      
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

    return <div>
        <SecondHeaderSchSrvysdashboardtwo />
        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12">
                        <div className="col-sm-12 mb-4 cstmtab-pane tab-pane">
                            <NavLink to="/stu/survey" className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>All Surveys</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 col-sm-12 row ml-0 mr-0">
                                <div className="col-sm-9">
                                    <div className="nwsrvdvdvd1">Survey Name - Pulse 1</div>
                                    <div className="nwsrvdvdvd2">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> Teacher</div>
                                </div>
                                <div className="col-sm-3 text-right">
                                    <input className="nwsrvdvdvi1" placeholder="Search Teacher..." type="text" />
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
                                            <div className="table-responsive ht-auto">
                                                <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box">
                                                    <thead>
                                                        <tr>
                                                            <th>Teachers (1/20)</th>
                                                            <th>Period</th>
                                                            <th>Response Progress</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{height: 'inherit'}}>

                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{handleShow(); }}  title="Teacher Name"> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> Teacher Name </div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Jul 20 - Aug 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '0%'}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Not Started</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link to='/stu/surveyrun'>
                                                                    <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                </Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{handleShow(); }}  title="Teacher Name"> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> Teacher Name </div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Jul 20 - Aug 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '100%'}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }}>
                                                                        <span className="tblsvprgstxt">Completed</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link to='/stu/surveyview'>
                                                                    <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{handleShow(); }} title="Teacher Name"> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> Teacher Name </div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Jul 20 - Aug 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '100%'}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }}>
                                                                        <span className="tblsvprgstxt">Completed</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link to='/stu/surveyview'>
                                                                    <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{handleShow(); }}  title="Teacher Name"> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> Teacher Name </div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Jul 20 - Aug 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '100%'}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }}>
                                                                        <span className="tblsvprgstxt">Completed</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link to='/stu/surveyview'>
                                                                    <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                </Link>
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



        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 srvycstmhtmdlbd">
                
                <div className="infomdvmdl1 col-sm-12 row m-0">
                    <div className="col-sm-2">
                        <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                    </div>
                    <div className="col-sm-10">
                        <p className="infomdvmdl2">Teacher Name</p>
                        <div className="infomdvmdl3">
                            <span>
                                <i className="fa fa-phone mr-7px" style={{transform: 'rotate(90deg)'}}></i>
                                Mobile No
                            </span>
                            <span className="infomdvmdl2dvdr">|</span>
                            <span title="teacher@email.com">
                                <i className="fa fa-envelope mr-7px"></i>
                                teacher@email.com
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="infomdvmdl3 col-sm-12 mt-10px">
                        <h3 className="infomdvmdl3-h3">Class 6th - A</h3>
                        <div readOnly className="infomdvmdl3-txtara">Hindi </div>
                    </div>
                    <div className="infomdvmdl3 col-sm-12 mt-10px">
                        <h3 className="infomdvmdl3-h3">Class 6th - B</h3>
                        <div readOnly className="infomdvmdl3-txtara">Maths </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>



        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">Teacher</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">Teacher Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Not Started</span>
                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                    </div>
                </div>
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">Teacher Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Completed</span>
                        <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="22" alt="Image" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>


    </div>
}

// export default Details;