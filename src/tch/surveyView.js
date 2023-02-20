import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { HeaderTchrrrdashboardSrvy } from '../headertchrdashboardsrvy';
import '../AllJs/dashboard-staff.js';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyViewTeacherPage = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

    const dataFetchedRefsurvey = useRef(false);
    const dataFetchedRefsurveyquestion = useRef(false);
    const [surveyquestionlist, setsurveyquestionlist] = useState([]);
    const [surveyquestiontopiclist, setsurveyquestiontopiclist] = useState([]);
    const [teachername, setteachername] = useState("");
    const [subjectname, setsubjectname] = useState("");
    const [surveyname, setsurveyname] = useState("");
    const [participantName, setParticipantName] = useState("");
    const [targetName, setTargetName] = useState("");
    const [schoolmasterid, setSchoolMasterid] = useState("");
    const [teachermasterid, setteachermasterid] = useState("");
    const [pulseid, setPulseid] = useState("");
    const [schoolCode, setSchoolCode] = useState("");
    const [surveyresID, setSurveyresID] = useState("");

    const sessionpulseid = sessionStorage.getItem('pulseidsession');
    const sessionstudentid = sessionStorage.getItem('studentidsession');
    const ifteacherorschoolsession = sessionStorage.getItem('ifteacherorschool');
    const sessiontargetteacherid = sessionStorage.getItem('sessiontargetteacherid');
    var staffidsession = sessionStorage.getItem("staffidsession");

    if(staffidsession == null) {
        window.location.href="/";
    }
    else {}
    
    React.useEffect(
        ()=> {
       
            //staffid
           //alert(sessionpulseid + "-" + "Teacher" + "-" + "School" + "-" + staffidsession + "-" + 0)
            fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getSurveyTopicandQuestiondetailView/' + sessionpulseid + "-" + "Teacher" + "-" + "School" + "-" + staffidsession + "-" + 0 , {        //pulseid
            method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
            if (dataFetchedRefsurveyquestion.current) return;
            dataFetchedRefsurveyquestion.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            setsurveyquestiontopiclist(data);

            setTimeout(function () {
                hideLoader();
                $('#login').show();
            }, 1000);
          })

          
            //alert(staffidsession + "-" + sessionpulseid);
            fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getSchoolStaffSurveyquestion/' + staffidsession + "-" + sessionpulseid,  {        //studentid-staffid-pulseid
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefsurvey.current) return;
            dataFetchedRefsurvey.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            setteachername(data[0].Schoolname);
            setsubjectname(data[0].subjectname);
            setsurveyname(data[0].pulsename);
            setSchoolMasterid(data[0].SchoolmasterId);
            setteachermasterid(data[0].StaffmasterId);
            setParticipantName(data[0].participant);
            setTargetName(data[0].target);
            setPulseid(data[0].pulseId);
            setsurveyquestionlist(data);
            setSchoolCode(data[0].schoolCode);
            setSurveyresID(data[0].surveyresponseId);

            setTimeout(function () {
                hideLoader();
                $('#login').show();
            }, 1000);
          
            
          })

        

        
        })

        const uniqueTags = [];
        surveyquestionlist.map(clist => {
            if (uniqueTags.indexOf(clist.topic) === -1) {
                uniqueTags.push(clist.topic);
            }
        });

        const uniquequestions = [];
        surveyquestionlist.map(clist => {
            if (uniquequestions.indexOf(clist.question) === -1) {
                uniquequestions.push(clist.question);
            }
        });

        const gobck = () => {
            window.history.go(-1); 
            return false;
        }

        const indexs = surveyquestionlist.findIndex(a => a.optionstatus === "active");
        
        
        if(indexs === -1) {
            $('.tbldtaa1').hide();
            $('#errdv1').hide();
            $('.tbldv11').hide();
            $('.prflhdnn').hide();
            $('#errdv11v1').show();
        }
        else {
            $('#errdv11v1').hide();
            $('.prflhdnn').show();

            if(uniqueTags.length == 0) {
                 $('#errdv1').show();
                 $('.tbldtaa1').hide();
                 $('.tbldv11').hide();
                 $('#errdv11v1').hide();
                 $('.prflhdnn').show();
             }
             else {
                 $('.tbldtaa1').show();
                 $('#errdv1').hide();
                 $('.tbldv11').show();
                 $('#errdv11v1').hide();
                 $('.prflhdnn').show();
             }

        }

    return <div>
        <HeaderTchrrrdashboardSrvy />
        {loader}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active cstmsrvytmppdd" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div>
                                <div className="col-sm-12">
                                    <div className="col-sm-12 mb-4">
                                        <div onClick={gobck} className="srvylnkbtnnn">
                                            <i className="fa fa-chevron-left mr-2"></i>
                                            <span>All Surveys</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 row m-0 prflhdnn">
                                    <div className="col-sm-2">
                                    {(() => {
                                            if(targetName === "School") {
                                                return(
                                                    <div>
                                                        <img src="../Images/school-img1.svg" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                                    </div>
                                                );
                                            }
                                            else {
                                            return(
                                                <div>
                                                    <img src="../Images/usergreen.png" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                                </div>
                                            );    
                                            }
                                        })()}
                                    </div>
                                    <div className="col-sm-7 pl-0">
                                        <div className="mt-15px">
                                            <div className="usrnmsrvypgdnw">{teachername}</div>
                                            {(() => {
                                                if(targetName === "School") {
                                                    return(
                                                        <div className="usrgrdsrvypgdnw">School Code - {schoolCode}</div>
                                                    );
                                                }
                                                else {
                                                return(
                                                    <div className="usrgrdsrvypgdnw">{subjectname}</div>
                                                );    
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                        
                                    </div>
                                </div>
                            </div>
                            <div id="errdv1" className="mt-5 col-sm-12">
                                <div className="col-sm-12">
                                    <div className="nodtadv1">
                                        <div>
                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                            <div className="nodtadv1txt">No Data Found</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="errdv11v1" className="mt-5 col-sm-12" style={{display: 'none'}}>
                                <div className="col-sm-12">
                                    <div className="nodtadv1">
                                        <div>
                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                            <div className="nodtadv1txt">You have misssed your survey!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tbldtaa1">
                                <div className="col-sm-12">
                                    <div className="mt-5">
                                        <div>
                                            <div className="col-sm-12 bgclrblu">
                                                <div className="dshbrd-dvv1 pl-0 pr-0">
                                                    <div className="col-sm-12">
                                                        <h4 className="text-truncate srvynwdvh4 mb-0 mt-0">{surveyname}</h4>
                                                        <div className="tbltddv col-sm-12 pl-10px">
                                                            <div className="tbltddv2 cstmwdtbldv mb-2 mt--5px">{participantName} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {targetName} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                {uniqueTags.map((topics)=>(
                                                    <div>
                                                    <div className="dshbrd-dvv1 pl-0 pr-0 hdngbgcstm pt-2 pb-2">
                                                            <div className="col-sm-12">
                                                                <h4 className="text-truncate ssrvydvhdng2 srvynwdvh4">{topics}</h4>
                                                            </div>
                                                        </div>

                                            {surveyquestiontopiclist.map((questionans)=>{
                                                        
                                                if(topics == questionans.Topic) {
                                                                
                                                      return(  
                                                        <div className="dshbrd-dvv1 pl-0 pr-0 pt-0">
                                                            <div className="col-sm-12">
                                                            <div className="col-sm-12 mt-3 pl-4">
                                                                    <h5 className="srvynwdvh5">{questionans.sno}. {questionans.question} </h5>
                                                                     
                                                                    <div>
                                                                        <div>
                                                                            <div className="srvyndv1">
                                                                            {surveyquestionlist.map((que)=>{
                                                        
                                                                             if(questionans.question == que.question) {
                                                            
                                                                             return(
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <div className= {`srvyndv7 ${ que.optionstatus }`}>
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">{que.weightage}</div>
                                                                                                        <div className="srvyndv9">{que.options}</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                 )}})}
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                    {(function() {
                                                                        if(questionans.comment == "") {
                                                                            return(
                                                                                <div className="srvyndv10 mt-4">
                                                                                    <div className="srvyndv11">
                                                                                        <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" maxLength="200" rows="4" readOnly>No comment</textarea>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                        else {
                                                                            return (
                                                                                <div className="srvyndv10 mt-4">
                                                                                    <div className="srvyndv11">
                                                                                        <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" maxLength="200" rows="4" readOnly>{questionans.comment}</textarea>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                        })()
                                                                    }
                                                                    </div>
                                                            </div>
                                                            </div>
                                                            
                                                           
                                                        </div>
                                                      )
                                                    }
                                                            
                                                })}
                                                    </div>
                                                ))}
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