import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderStuSrvysdashboard } from '../secondheaderstusrvydashboard';
import '../AllJs/dashboard-staff.js';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyViewStudentPage = () => {
    //const [loader, showLoader, hideLoader] = useLoader();

    // useEffect(() => {
    //     showLoader();
    //     $('#login').hide();
    //   }, []);

    //   hideLoader();
    //   $('#login').show();
    const dataFetchedRefsurvey = useRef(false);
    const dataFetchedRefsurveyquestion = useRef(false);
    const [surveyquestionlist, setsurveyquestionlist] = useState([]);
    const [surveyquestiontopiclist, setsurveyquestiontopiclist] = useState([]);
    const [teachername, setteachername] = useState("");
    const [subjectname, setsubjectname] = useState("");
    const [surveyname, setsurveyname] = useState("");
    const [studentmasterid, setstudentmasterid] = useState("");
    const [teachermasterid, setteachermasterid] = useState("");
    const [pulseid, setPulseid] = useState("");

    
    React.useEffect(
        ()=> {
       
                //staffid

                fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getSurveyTopicandQuestiondetail/4' , {
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefsurveyquestion.current) return;
            dataFetchedRefsurveyquestion.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            setsurveyquestiontopiclist(data)
          })
           
            fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStaffStudentSurveyquestion/1-7-4' ,  {        //studentid-staffid-pulseid
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefsurvey.current) return;
            dataFetchedRefsurvey.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            setteachername(data[0].Teachername);
            setsubjectname(data[0].subjectname);
            setsurveyname(data[0].pulsename);
            setstudentmasterid(data[0].Studentmasterid);
            setteachermasterid(data[0].StaffmasterId);
            setPulseid(data[0].pulseId);
            setsurveyquestionlist(data)
          
            
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

    return <div>
        <SecondHeaderStuSrvysdashboard />
        {/* {loader} */}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div>
                                <div className="col-sm-12">
                                    <div className="col-sm-12 mb-5">
                                        <NavLink to="/stu/surveyrun" className="srvylnkbtnnn">
                                            <i className="fa fa-chevron-left mr-2"></i>
                                            <span>All Surveys</span>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-12 row m-0">
                                    <div className="col-sm-2">
                                        <div>
                                            <img src="../Images/usergreen.png" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                        </div>
                                    </div>
                                    <div className="col-sm-7 pl-0">
                                        <div className="mt-15px">
                                            <div className="usrnmsrvypgdnw">{teachername}</div>
                                            <div className="usrgrdsrvypgdnw">{subjectname}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                        
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
                                                        <h4 className="text-truncate srvynwdvh4">{surveyname}</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                {uniqueTags.map((topics)=>(
                                                    <div>
                                                    <div className="dshbrd-dvv1 pl-0 pr-0 hdngbgcstm">
                                                            <div className="col-sm-12">
                                                                <h4 className="text-truncate ssrvydvhdng2 srvynwdvh4">{topics}</h4>
                                                            </div>
                                                        </div>

                                                        {surveyquestiontopiclist.map((questionans)=>{
                                                        
                                                            if(topics == questionans.Topic) {
                                                                
                                                      return(  
                                                        <div className="dshbrd-dvv1 pl-0 pr-0 pt-0">
                                                            <div className="col-sm-12 brdr-tpp">
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
                                                                        <div className="srvyndv10 mt-4">
                                                                            <div className="srvyndv11">
                                                                                <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" rows="4" readOnly>Comment Text</textarea>
                                                                            </div>
                                                                        </div>
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