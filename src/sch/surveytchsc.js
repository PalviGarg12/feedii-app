import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import '../AllJs/dashboard-staff.js';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { click } from "@testing-library/user-event/dist/click";


export const SurveyTeacherToSchoolPage = () => {
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
    const dataFetchedRefsurvey = useRef(false);
    const dataFetchedRefclasses = useRef(false);
    const dataFetchedRefteachers = useRef(false);
    var schoolcurrentid = 0;

    const [staffname, setstaffname] = useState(""); 
    const [staffemail, setstaffemail] = useState("");
    const [staffdetails, setStaffDetails] = useState([]);
    const [schooldetails, setschooldetails] = useState([]);
    const [staffdesignation, setstaffdesignation] = useState(""); 
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    const [surveydetails, setsurveydetails] = useState([]);
    const [surveydetailsfilter, setsurveydetailsfilter] = useState([]);

    const [surveyname, setsurveyname] = useState(""); 
    const [participantname, setparticipantname] = useState(""); 
    const [targetname, settargetname] = useState(""); 
    const [surveyclasses, setsurveyclasses] = useState([]);
   

    const sessionstudentid = sessionStorage.getItem('studentidsession');
    const sessionpulseid = sessionStorage.getItem('pulseidsession');
    const sessionscholid = sessionStorage.getItem('schoolidsession');
    const [staffdata, setStaffData] = useState([]);

    if(sessionscholid == null) {
        window.location.href="/";
    }
    else {}

    React.useEffect(
        ()=> {      

           
            fetch('https://entity-feediiapi.azurewebsites.net/api/admin/getAdminSurveyDetailSummary/'+ sessionpulseid + "-" + "Teacher-School-All-" + sessionscholid , {
            method: 'GET'
             }) .then((response) => response.json())
            .then((data) => {
            if (dataFetchedRefsurvey.current) return;
            dataFetchedRefsurvey.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            if(data.length == 0) {}
            else {
                setsurveydetails(data)
                setsurveydetailsfilter(data)
                setsurveyname(data[0].Pulsename);
                setparticipantname(data[0].Participant);
                settargetname(data[0].Target);
            }

            hideLoader();
             $('#login').show();

        })
        .catch(error =>{
            console.log(error);
        });

      

        fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getAllstaffs/' + sessionscholid, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefteachers.current) return;
            dataFetchedRefteachers.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setStaffData(data);
           

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


      let completedcount = 0;
      for (let i = 0; i < surveydetails.length; i++) {
        if (surveydetails[i].Status === 'Completed') completedcount++;
      }

      const fetchstaffdetails = (staffid) => {
            
            setIsLoading(true);
            fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getStaffClassroom/' + staffid, {
                method: 'GET'
              }) .then((response) => response.json())
              .then((data) => {    
               
                if(data.length==0)
                {
                    setstaffname("Name")
                    setstaffemail("Email")
                    setstaffdesignation("Designation")
                    setStaffDetails([data])
                    setIsLoading(false);
                }
                else{
                    setstaffname(data[0].name)
                    setstaffemail(data[0].Email)
                    setstaffdesignation(data[0].AccountType)
                    setStaffDetails(data)
                    setIsLoading(false);
                }
                
    
              })
              .catch(error =>{
                  console.log(error);
              });     
        }


        const fetchschooldetails = (staffid) => {
           
            setIsLoading2(true);
            fetch('https://entity-feediiapi.azurewebsites.net/api/admin/getAdminSurveyTargetSummary/' + sessionpulseid + "-" + "Teacher" + "-" +  "School" + "-" + staffid , {   //pulseid-participantid
                method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
                
                var objj = JSON.stringify(data);
                var parse = JSON.parse(objj);
            
                setschooldetails(data);
                setIsLoading2(false);  
              
            })
            .catch(error =>{
                console.log(error);
            });   
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
        { label: 'All Teachers', value: 'All Teachers'},
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
      
      const [show3, setShow3] = useState(false);
      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => {
          setShow3(true);
      }

      if(surveydetails.length == 0) {
          $('#errdv1').show();
          $('.tbldtaa1').hide();
      }
      else {
          $('.tbldtaa1').show();
          $('#errdv1').hide();   
      }

      const [selectedteacher, setselectedteacher] = useState();

      const uniqueTags = [];
      staffdata.map(clist => {
        var indexs = uniqueTags.findIndex(a => a.staffId === clist.staffId);
         
              if (indexs === -1) {
                  uniqueTags.push({label : clist.name, value : clist.staffId});
              }
          
      });

      const handleChange1 = e => {
            
        setselectedteacher(e.value);
            if(e.value==0)
            {
                // surveydetails.map(clist => {
                //     if (uniqueclassesfilter.indexOf(clist.GradeName) === -1) {
                //         uniqueclassesfilter.push(clist.GradeName)
                                        
                //         }
                //         });
                 setsurveydetailsfilter(surveydetails)
                
            }
            else{
                var output =  surveydetails.filter(details => details.StaffName == e.label);
                setsurveydetailsfilter(output)
            }

       
        
       
      }

    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12">
                        <div className="col-sm-12 mb-4 cstmtab-pane tab-pane">
                            <NavLink to="/sch/survey" className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>All Surveys</span>
                            </NavLink>
                        </div>
                    </div>
                    <div id="errdv1" className="col-sm-12">
                        <div className="nodtadv1 nobrdrnobg">
                            <div>
                                <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                <div className="nodtadv1txt">No Data Found</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active tbldtaa1" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div className="col-sm-12 row ml-0 mr-0 mb-4 p-0">
                        <div className="col-sm-3">
                            <Select options={uniqueTags} defaultValue={{ label: "All Teachers", value: 0 }} value={uniqueTags.find(obj => obj.value === selectedteacher)} onChange={handleChange1} />
                        </div>
                        { /*{selectedclass} && */ <div style={{ display: 'none' }}>
                                <div id="slctcdclasval">{selectedteacher}</div>
                            </div>}
                        <div className="col-sm-5"></div>
                        <div className="col-sm-4 text-right">
                            <Link to='/sch/surveytemplateone'><button className="modalGrayBtn cstmmbtnn mr-3" style={{minWidth: '120px'}}> Preview Survey </button></Link>
                            <button className="modalRedBtn cstmmbtnn mr-1" style={{minWidth: '90px'}} onClick={()=>{handleShow3(); }}> View Result </button>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 col-sm-12 row ml-0 mr-0">
                                <div className="col-sm-12">
                                    <div className="nwsrvdvdvd1">Survey Name - {surveyname}</div>
                                    <div className="nwsrvdvdvd2">{participantname} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {targetname}</div>
                                </div>
                                {/* <div className="col-sm-3 text-right">
                                    <input className="nwsrvdvdvi1" placeholder="Search Teacher..." type="text" />
                                </div> */}
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
                                            {
                                                surveydetailsfilter.length === 0 ? (
                                                    <div className="text-center cstmnodtatbldvv">
                                                        <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                        <div className="nodtadv1txt">No Data Found</div>
                                                    </div>
                                                ) : (

                                                <table id="nwsrvytbblll" className="table brdr-none cstmtable2 v-middle p-0 m-0 box">
                                                    <thead>
                                                        <tr className="cstmsrtbthdbrdr">
                                                            <th className="pl-24px tblsccshdng">Teachers ({completedcount} / {surveydetails.length})</th>
                                                            <th className="tblsccshdng">Period</th>
                                                            <th className="tblsccshdng pl-0">Response Progress</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody className="ht-cstmtbdysvy cstmsrtbtbdybrdr cstmmxhtbdytbb2">
                                                    {surveydetailsfilter.map(clist => (
                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{fetchstaffdetails(clist.targetId); handleShow(); }}  title={clist.StaffName}> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> {clist.StaffName} </div>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">{clist.Schedule}</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `${clist.CompletionPer}%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{fetchschooldetails(clist.targetId); handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">{clist.Status}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <button className="modalGrayBtn cstmmbtnn" onClick={()=>{fetchstaffdetails(clist.targetId); handleShow(); }} >View</button>
                                                            </td>
                                                        </tr>
                                                        ))}
                                                        

                                                        
                                                        
                                                      
                                                    </tbody>
                                                </table>
                                                        )}
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
                
            {isLoading ? (

                <div className="text-center">
                    <img src="../Images/loader.gif" width="150" alt="Loader" />
                </div>

                ) : staffdetails.length === 0 ? (

                <div className="text-center">
                    <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                    <div className="nodtadv1txt">No Data Found</div>
                </div>

                ) : (
                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2">{staffname}</p>
                            <div className="infomdvmdl3 row m-0">
                                <div className="col-sm-4 p-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Teacher
                                </div>
                                <div className="infomdvmdl2dvdr col-sm-1 p-0 m-0">|</div>
                                <div className="col-sm-6 text-truncate p-0" title={staffemail}>
                                    <i className="fa fa-envelope mr-7px"></i>
                                    {staffemail}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {staffdetails.map((staffs) => {
                        if(staffs.gradename != "All" && staffs.gradename != "-") {
                            return(
                                <div>
                                    <div className="infomdvmdl3 col-sm-12 mt-4">
                                        <h3 className="infomdvmdl3-h3">{staffs.gradename}</h3>
                                        <div readOnly className="infomdvmdl3-txtara">{staffs.Subject} </div>
                                    </div>                
                                </div>
                            );
                        }
                        else if(staffs.gradename == "-") {
                            return(
                                <div>
                                    <div className="infomdvmdl3 col-sm-12 mt-4">
                                        <h3 className="infomdvmdl3-h3">No Class generated yet</h3>
                                        <div readOnly className="infomdvmdl3-txtara">No Subject generated yet </div>
                                    </div>                
                                </div>
                            );
                        }
                    })}
                </div>
                
                )}

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
                    ) : (schooldetails.map((school) => {
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
                    else if(school.Status == "Completed") {
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
                    else {

                    }
                }))
            }
            </Modal.Body>
        </Modal>

        <Modal show={show3} onHide={handleClose3} className="cstmmtmodal" >
            <Modal.Header closeButton>
                <Modal.Title>Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="cstmmdlptx">Unfortunately, results cannot be generated at this time as a sufficient number of surveys have not been completed by students.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleClose3}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;