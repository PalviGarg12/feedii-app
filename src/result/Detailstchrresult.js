import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/result.css';
import { HeaderdashboardforInsightsdtlsPages } from '../headeruserdashboardforinsightsdtlspags';
import ArcProgress from "react-arc-progress";
import Select from 'react-select';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Carousel } from "react-bootstrap";
import useLoader from "../useLoader";

export const ResultDetailsTchrRsltPage = () => {
    
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

    const progress = "0.5";
    const text = "50";
    const arcFillColor = { gradient: ["#54d4f2"] };

    
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    
    const alclsdata = [{
        value: "0", label: "All Classes"
    }];

    const optnslstt = [{
        value: "0", label: "All Classes"
    }]
    
    
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const sessionscholid = sessionStorage.getItem('schoolidsession');
    const sessionpulseidresult = sessionStorage.getItem('pulseidresultsession');
    const sessionstaffidresult = sessionStorage.getItem('sessionstaffidresult');
    const dataFetchedRefclasses = useRef(false);
    const dataFetchedRefoverall = useRef(false);
    const [surveyclasses, setsurveyclasses] = useState([]);
    const dataFetchedRefheatmap = useRef(false);
    const [staffheatmap, setstaffheatmap] = useState([]);
    const [startdate, setstartdate] = useState("");
    const [enddate, setenddate] = useState("");
    const [allresponses, setallresponses] = useState("");
    const [allcomments, setallcomments] = useState("");
    const [varbench, setvarbench] = useState("");
    const [benchmark, setbenchmark] = useState("");
    const [targetname, setTarget] = useState("");
    const [overallscore, setoverallscore] = useState("");
    const [participantname, setParticipant] = useState("");
    const [staffName, setStaffName] = useState("");
    const [pulsename, setPulsename] = useState("");
    const [staffsurveyresult, setstaffsurveyresult] = useState([]);
    const [selectedclass, setselectedclass] = useState();
    const [selectedclassheat, setselectedclassheat] = useState();
    const [batchidval, setbatchidval] = useState("0");
    const [topicdetail, setTopicDetails] = useState([]);
    const [topicname, settopicname] = useState("");
    const [topicscore, settopicScore] = useState("");
    const [topictext, settopictext] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [topiccomments, setTopicComments] = useState([]);
    const [surveyquestiontopiclist, setsurveyquestiontopiclist] = useState([]);
    const [schedule, setschedule] = useState("");


    if(sessionscholid == null || sessionpulseidresult == null || sessionstaffidresult == null) {
        window.location.href="/";
    }
    else {}

    React.useEffect(
        ()=> {
      
            //alert(sessionpulseidresult  +  "-" + sessionscholid + "-" + 0 + "-" + sessionstaffidresult);
            fetch('https://feediiapi.azurewebsites.net/api/Admin/getStaffSurveyResult/' + sessionpulseidresult  +  "-" + sessionscholid + "-" + 0 + "-" + sessionstaffidresult, {
            method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
            if (dataFetchedRefoverall.current) return;
            dataFetchedRefoverall.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setstaffsurveyresult(data)
            setPulsename(data[0].pulsename);
            setParticipant(data[0].participant);
            setTarget(data[0].target);
            setoverallscore(data[0].OverallScore);
            setvarbench(data[0].Overallvar);
            setbenchmark(data[0].benchmark);
            setallresponses(data[0].AllResponse);
            setallcomments(data[0].commentPer);
            setstartdate(data[0].startdate);
            //setstartdate(data[0].startdate);
            //setenddate(data[0].enddate);
            setStaffName(data[0].StaffName);
            setschedule(data[0].Schedule);
            hideLoader();
            $('#login').show();
           
            
          })

          fetch('https://feediiapi.azurewebsites.net/Api/Admin/getStaffSurveyHeatMapResult/' + sessionpulseidresult  +  "-" + sessionscholid + "-" + 0 + "-" + sessionstaffidresult, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefheatmap.current) return;
            dataFetchedRefheatmap.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setstaffheatmap(data)
            
            
          })


          fetch('https://feediiapi.azurewebsites.net/api/Staff/getStaffClassroom/'+ sessionstaffidresult , {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRefclasses.current) return;
            dataFetchedRefclasses.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveyclasses(data)
            

        })
        .catch(error =>{
            console.log(error);
        });

        })
        const uniqueTags = [];
        surveyclasses.map(clist => {
            var indexs = uniqueTags.findIndex(a => a.gradename === clist.gradename);
           
                if (indexs === -1) {
                    uniqueTags.push({ batchId: clist.gradeid, gradename: clist.gradename})
                }
            
        });

        const batcheswithid = [];
       

        for (const [i, clas] of uniqueTags.entries()) {

         batcheswithid.push({ value: clas.batchId, label:  clas.gradename})
       }

       const batcheswithidheat = [];
       

       for (const [i, clas] of uniqueTags.entries()) {

        batcheswithidheat.push({ value: clas.batchId, label:  clas.gradename})
      }

       const handleChange1 = e => {

        setselectedclass(e.value);
        setselectedclassheat(e.value);

       var batchid = e.value;
       setbatchidval(e.value);
       fetch('https://feediiapi.azurewebsites.net/api/Admin/getStaffSurveyResult/' + sessionpulseidresult  +  "-" + sessionscholid + "-" + batchid + "-" + sessionstaffidresult, {
            method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setstaffsurveyresult(data)
            setPulsename(data[0].pulsename);
            setParticipant(data[0].participant);
            setTarget(data[0].target);
            setoverallscore(data[0].OverallScore);
            setvarbench(data[0].Overallvar);
            setbenchmark(data[0].benchmark);
            setallresponses(data[0].AllResponse);
            setallcomments(data[0].commentPer);
            //setstartdate(data[0].startdate);
            //setenddate(data[0].enddate);
            setschedule(data[0].Schedule);
            setStaffName(data[0].StaffName);
           
            
          })


          fetch('https://feediiapi.azurewebsites.net/Api/Admin/getStaffSurveyHeatMapResult/' + sessionpulseidresult  +  "-" + sessionscholid + "-" + batchid + "-" + sessionstaffidresult, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
           
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setstaffheatmap(data)
            
            
          })
      }


      const handleChangeheat = e => {

        var heatbatch = e.value;
        
        fetch('https://feediiapi.azurewebsites.net/Api/Admin/getStaffSurveyHeatMapResult/' + sessionpulseidresult  +  "-" + sessionscholid + "-" + heatbatch + "-" + sessionstaffidresult, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
           
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setstaffheatmap(data)
            
            
          })
      }


      const modalopen = (e,ts) => {
            
        settopicname(e);
        settopicScore(ts);
        
             
         fetch('https://feediiapi.azurewebsites.net/api/Admin/getTopicQuestion/' + sessionpulseidresult  +  "-" + batchidval, {
             method: 'GET'
           }) .then((response) => response.json())
           .then((data) => {
            
             var objj = JSON.stringify(data);
             var parse = JSON.parse(objj);
            
             setTopicDetails(data)
             settopictext(data[0].topictext);
             setFilteredList(
                data.filter(item => item.topic.includes(e))
              );
             
           })

           
           fetch('https://feediiapi.azurewebsites.net/api/Admin/getTopicComments/' + sessionpulseidresult  +  "-" + batchidval, {
             method: 'GET'
           }) .then((response) => response.json())
           .then((data) => {
            
             var objj = JSON.stringify(data);
             var parse = JSON.parse(objj);
            
             setTopicComments(data)
             
             
           })

           fetch('https://feediiapi.azurewebsites.net/api/Student/getSurveyTopicandQuestiondetail/' + sessionpulseidresult , {         //pulseid
           method: 'GET'
           }) .then((response) => response.json())
         .then((data) => {
           
           
           var objj = JSON.stringify(data);
           var parse = JSON.parse(objj);
           setsurveyquestiontopiclist(data);

         })

       }


       const uniqueTopics = [];
        topicdetail.map(clist => {
        var indexs = uniqueTopics.findIndex(a => a.topic === clist.topic);
       
            if (indexs === -1) {
                uniqueTopics.push({ topicScore: clist.TopicScore, topic: clist.topic,topicText:clist.topictext})
            }
        
    });

    const uuniquetopicheat = [];
    staffsurveyresult.map(clist => {
         //var indexs = uniqueTags.findIndex(a => a.keydata === clist.Keydata);
         if (clist.topic == "")
         {
           
            if (uuniquetopicheat.indexOf("Overall Score") === -1) {
                 uuniquetopicheat.push("Overall Score");
             }
           
            
         }
         else{
             if (uuniquetopicheat.indexOf(clist.topic) === -1) {
                uuniquetopicheat.push(clist.topic);
             }
         }
         
     });

    const gobck = () => {
        window.history.go(-1); 
        return false;
    }

    if(allresponses == 0) {
        $('#errdv1').show();
        $('.tbldtaa1').hide();
    }
    else {
        $('.tbldtaa1').show();
        $('#errdv1').hide();
    }

    return <div>
        <HeaderdashboardforInsightsdtlsPages />
        {loader}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">

            <div className="padding">
            
                <div style={{width: '80%', margin: '2rem auto 0'}}>
                    <div>
                        <div className="col-sm-12 mb-3 p-0">
                            <div onClick={gobck} className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>Back to Overall Result</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row tab-content mb-3" id="srvydepdv">
                
                    <div id="errdv1" className="col-sm-12">
                        <div className="pgnodtadv1">
                            <div>
                                <img className="pgnodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="160" alt="Error Image" />
                                <div className="pgnodtadv1txt">No result generated yet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active rsl-cspdng m-0 tbldtaa1" id="tab1">
                        
                        <div className="col-sm-12 p-0 row m-0 mb-5">
                            <div className="col-sm-9 pl-0">
                                <div className="col-sm-12 row m-0">
                                    <div className="text-truncate rsltdtlsdvv1" title={staffName}> {staffName} </div>
                                    {/* <button className="ylwstatusbtn rsltdtlsdvv1btn">Ended</button> */}
                                </div>
                                <div className="col-sm-12">
                                    <div className="tbltddv2 text-truncate cstmwdtbldv">{participantname} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {targetname} </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="tbltddv2 text-truncate cstmwdtbldv"> Schedule : {schedule} </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <Select options={batcheswithid} defaultValue={{ label: "All", value: 0 }} value={batcheswithid.find(obj => obj.value === selectedclass)} onChange={handleChange1} />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 p-0 row m-0 mb-5">
                            <div className="col-sm-6">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Overall Score</h4>
                                </div>
                                <div className="row m-0 rslt-dvv pb-2">
                                    <div className="col-sm-6 p-0">
                                        <div className="rsl-dv1">
                                            {overallscore}
                                            <span className="rsl-dv1spn">Score (%)</span>
                                        </div>
                                        <ArcProgress className="rsl-dv2" progress={overallscore/100} thickness={20} fillColor={arcFillColor} style={{ position: "relative", height: 150, width: 150 }} />
                                    </div>
                                    <div className="col-sm-6 p-0">
                                        <div className="rsl-dv3">
                                            <div>
                                            <h3 className="rsl-dv3-h3">
                                                {varbench}%
                                                {varbench >= 0 ? (
                                                    <i className="fa fa-arrow-up rsl-dv3-faicngrn"></i>
                                                ) : (
                                                    <i className="fa fa-arrow-down rsl-dv3-faicnred"></i>
                                                )}
                                                </h3>
                                                <div className="rsl-dv4">than the Surveys Average Score <br/> Benchmark Score - {benchmark}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Response Rate</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-5 mt-2">
                                        <div className="col-sm-12 row m-0 p-0">
                                            <div className="col-sm-8 pl-0">All Responses</div>
                                            <div className="col-sm-4 pr-0 text-right">{allresponses}%</div>
                                        </div>
                                        <div>
                                            <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                <div className="progress-bar dark-green" style={{width: `${allresponses}%`}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 p-0 mb-csrslbtmm">
                                        <div className="col-sm-12 row m-0 p-0">
                                            <div className="col-sm-8 pl-0">Comments</div>
                                            <div className="col-sm-4 pr-0 text-right">{allcomments}%</div>
                                        </div>
                                        <div>
                                            <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                <div className="progress-bar dark-green" style={{width: `${allcomments}%`}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 p-0 mb-5">
                            <div className="col-sm-12">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Overall Score Per Topic</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div>
                                            <table id="rslttblcs" className="rslttblcsvll2">
                                                <thead>
                                                    <tr className="brdr-btm1">
                                                        <th>Topic Name</th>
                                                        <th className="text-right">Your Score</th>
                                                        <th className="text-right">Benchmark</th>
                                                        <th className="text-right">Variance</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='rslttblhtbdyy2'>
                                                {staffsurveyresult.map((stsc)=>{
                                                if(stsc.sno!=1)
                                                {
                                                   return( <tr className="brdr-btm1">
                                                    <td>
                                                        <div className="text-truncate crsr-pntr" title={stsc.topic} onClick={()=>{ handleShow(); modalopen(stsc.topic,stsc.OverallScore);}}>{stsc.topicsno}. {stsc.topic}</div>
                                                    </td>
                                                    <td className="text-right">{stsc.OverallScore}%</td>
                                                    <td className="text-right">{stsc.benchmark}%</td>
                                                    <td className="text-right">
                                                    {(() => {
                                                        if(stsc.OverallScore == stsc.benchmark) {
                                                            return(
                                                                <div className="rsltlytbluclr">{stsc.Overallvar}%</div>
                                                            );
                                                        }
                                                        else if(stsc.OverallScore < stsc.benchmark) {
                                                            return(
                                                                <div className="rsltredclr">{stsc.Overallvar}%</div>
                                                            );
                                                        }
                                                        else if(stsc.OverallScore > stsc.benchmark) {
                                                            return(
                                                                <div className="rsltgrnclr">{stsc.Overallvar}%</div>
                                                            );
                                                        }
                                                        else {

                                                        }
                                                    })()}

                                                    </td>
                                                    </tr>)
                                                }
                                               })

                                                   

                                               }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 p-0 mb-5">
                            <div className="col-sm-12">
                                <div className="col-sm-12 pl-0">
                                    <h4 className="rsl-hdngh4">Engagement Score Heatmap</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div className="rslttbl3">
                                            <div className="outer">
                                                <div className="inner">
                                                    <table>
                                                    <tr>
                                                        <th className="fix nobrdr">
                                                            <div>
                                                            <div className="col-sm-5 pl-0 rsltblslmbcs">
                                                                    <Select className="rslttblslctt" options={batcheswithidheat} defaultValue={{ label: "All", value: 0 }} value={batcheswithidheat.find(obj => obj.value === selectedclassheat)} onChange={handleChangeheat} />
                                                                </div>
                                                                 {  <div style={{ display: 'none' }}>
                                                                <div id="slctcdclasval">{selectedclassheat}</div>
                                                                    </div>}
                                                                <div className="rslttbldv4">Classes</div>
                                                            </div>
                                                        </th>
                                                        {uuniquetopicheat.map((tpc)=>( 
                                                            <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title={tpc}> {tpc} </div>
                                                            </th>
                                                          
                                                         ))} 
                                                    </tr>
                                                    {staffheatmap.map((stuh) => (
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx">
                                                        <Link>
                                                            <div className="rslt-tbldv2-4 text-truncate" title="Survey Name">
                                                            {stuh.Grade}
                                                            </div>
                                                        </Link>
                                                        </th>
                                                        {uuniquetopicheat.map(columnName => {
                                                            if(stuh[columnName.replace(/\s/g, "_")] >= 0 && stuh[columnName.replace(/\s/g, "_")] <= 20) {
                                                                return(
                                                                    <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                                        <div>
                                                                            {stuh[columnName.replace(/\s/g, "_")]}%
                                                                        </div>
                                                                    </td>        
                                                                );
                                                            }
                                                            else if(stuh[columnName.replace(/\s/g, "_")] >= 21 && stuh[columnName.replace(/\s/g, "_")] <= 40) {
                                                                return(
                                                                    <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr02">
                                                                        <div>
                                                                            {stuh[columnName.replace(/\s/g, "_")]}%
                                                                        </div>
                                                                    </td>        
                                                                );
                                                            }
                                                            else if(stuh[columnName.replace(/\s/g, "_")] >= 41 && stuh[columnName.replace(/\s/g, "_")] <= 60) {
                                                                return(
                                                                    <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr03">
                                                                        <div>
                                                                            {stuh[columnName.replace(/\s/g, "_")]}%
                                                                        </div>
                                                                    </td>        
                                                                );
                                                            }
                                                            else if(stuh[columnName.replace(/\s/g, "_")] >= 61 && stuh[columnName.replace(/\s/g, "_")] <= 80) {
                                                                return(
                                                                    <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr04">
                                                                        <div>
                                                                            {stuh[columnName.replace(/\s/g, "_")]}%
                                                                        </div>
                                                                    </td>        
                                                                );
                                                            }
                                                            else if(stuh[columnName.replace(/\s/g, "_")] >= 81 && stuh[columnName.replace(/\s/g, "_")] <= 100) {
                                                                return(
                                                                    <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr05">
                                                                        <div>
                                                                            {stuh[columnName.replace(/\s/g, "_")]}%
                                                                        </div>
                                                                    </td>        
                                                                );
                                                            }
                                                            else {
                                                            }
                                                        })}
                                                    </tr>
                                                    ))}
                                                    
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="col-sm-12 row cstm--bxx">
                                        <div className="box mb-0">
                                                <div className="btn btn-lg rslt-tbltdclr01 rslt-btnhvrdsb" title="0-20%"></div>
                                                <div className="btn btn-lg rslt-tbltdclr02 rslt-btnhvrdsb" title="21-40%"></div>
                                                <div className="btn btn-lg rslt-tbltdclr03 rslt-btnhvrdsb" title="41-60%"></div>
                                                <p>Minimum</p>
                                            </div>
                                            <div className="box pl-1 mb-0">
                                                <div className="btn btn-lg rslt-tbltdclr04 rslt-btnhvrdsb" title="61-80%"></div>
                                                <div className="btn btn-lg rslt-tbltdclr05 rslt-btnhvrdsb" title="81-100%"></div>
                                                <p className="text-right">Maximum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </div>



        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2 rsltdtlmdlcs" >
            <Modal.Header className="cstmmdlinfodv p-0 rsltmdlclss" closeButton>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mdlclssvgg">
                    <mask id="path-1-inside-1_1596_120" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.99966 10.4139L16.5421 17.9563L17.9563 16.5421L10.4139 8.99966L17.9563 1.45718L16.5421 0.0429688L8.99966 7.58544L1.45718 0.0429688L0.0429688 1.45718L7.58544 8.99966L0.0429695 16.5421L1.45718 17.9563L8.99966 10.4139Z"></path>
                    </mask>
                    <path d="M16.5421 17.9563L15.1279 19.3706L16.5421 20.7848L17.9563 19.3706L16.5421 17.9563ZM8.99966 10.4139L10.4139 8.99966L8.99966 7.58544L7.58544 8.99966L8.99966 10.4139ZM17.9563 16.5421L19.3706 17.9563L20.7848 16.5421L19.3706 15.1279L17.9563 16.5421ZM10.4139 8.99966L8.99966 7.58544L7.58544 8.99966L8.99966 10.4139L10.4139 8.99966ZM17.9563 1.45718L19.3706 2.8714L20.7848 1.45718L19.3706 0.0429681L17.9563 1.45718ZM16.5421 0.0429688L17.9563 -1.37125L16.5421 -2.78546L15.1279 -1.37124L16.5421 0.0429688ZM8.99966 7.58544L7.58544 8.99966L8.99966 10.4139L10.4139 8.99966L8.99966 7.58544ZM1.45718 0.0429688L2.8714 -1.37124L1.45718 -2.78546L0.0429687 -1.37124L1.45718 0.0429688ZM0.0429688 1.45718L-1.37124 0.0429688L-2.78546 1.45718L-1.37124 2.8714L0.0429688 1.45718ZM7.58544 8.99966L8.99966 10.4139L10.4139 8.99966L8.99966 7.58544L7.58544 8.99966ZM0.0429695 16.5421L-1.37124 15.1279L-2.78546 16.5421L-1.37124 17.9563L0.0429695 16.5421ZM1.45718 17.9563L0.0429698 19.3706L1.45718 20.7848L2.8714 19.3706L1.45718 17.9563ZM17.9563 16.5421L10.4139 8.99966L7.58544 11.8281L15.1279 19.3706L17.9563 16.5421ZM16.5421 15.1279L15.1279 16.5421L17.9563 19.3706L19.3706 17.9563L16.5421 15.1279ZM8.99966 10.4139L16.5421 17.9563L19.3706 15.1279L11.8281 7.58544L8.99966 10.4139ZM16.5421 0.0429687L8.99966 7.58544L11.8281 10.4139L19.3706 2.8714L16.5421 0.0429687ZM15.1279 1.45718L16.5421 2.8714L19.3706 0.0429681L17.9563 -1.37125L15.1279 1.45718ZM10.4139 8.99966L17.9563 1.45718L15.1279 -1.37124L7.58544 6.17123L10.4139 8.99966ZM0.0429687 1.45718L7.58544 8.99966L10.4139 6.17123L2.8714 -1.37124L0.0429687 1.45718ZM1.45718 2.8714L2.8714 1.45718L0.0429687 -1.37124L-1.37124 0.0429688L1.45718 2.8714ZM8.99966 7.58544L1.45718 0.0429689L-1.37124 2.8714L6.17123 10.4139L8.99966 7.58544ZM1.45718 17.9563L8.99966 10.4139L6.17123 7.58544L-1.37124 15.1279L1.45718 17.9563ZM2.8714 16.5421L1.45718 15.1279L-1.37124 17.9563L0.0429698 19.3706L2.8714 16.5421ZM7.58544 8.99966L0.0429695 16.5421L2.8714 19.3706L10.4139 11.8281L7.58544 8.99966Z" fill="#9CA2B4" mask="url(#path-1-inside-1_1596_120)"></path>
                </svg>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm p-0 m-0">
                
                <div className="infomdvmdl1 rsltmdltbmaindv1 col-sm-12 p-0">
                    <Tabs className="row m-0">
                        <div className="rsltmdltbdv1">
                            <div className="rsltmdltbdv2">
                                <div className="rsltmdltbdvclshd">All Classes</div>
                                <h2 className="rsltmdltbdv2h2">All Topics</h2>
                                <TabList className="rsltmdltbdv2ul">
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Professional Learning</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        60%
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Teaching Efficacy</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        40%
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Feedback and Coaching</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        70%
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                    <Tab>
                                        <button type="button" className="rsltmdltbdv2ulbtn">
                                            <div className="rsltmdltbdv2ulbtndv1">
                                                <div className="rsltmdltbdv2ulbtndv2">
                                                    <svg className="rsltmdltbdv2ulbtndv2svg" viewBox="0 0 100 100">
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth1" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                        <path className="rsltmdltbdv2ulbtndv2svgpth2" d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" strokeWidth="4" fillOpacity="0"></path>
                                                    </svg>
                                                </div>
                                                <div className="rsltmdltbdv2ulbtndv3">
                                                    <div className="rsltmdltbdv2ulbtndv3-1">
                                                        <div className="rsltmdltbdv2ulbtndv3-2">
                                                            <h4 className="rsltmdltbdv2ulbtndv3-h4">Staff - Leadership Relationships</h4>
                                                        </div>
                                                    </div>
                                                    <p className="rsltmdltbdv2ulbtndv3-p">
                                                        <span className="rsltmdltbdv2ulbtndv3-pspn">Score: </span>
                                                        80%
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </Tab>
                                </TabList>
                            </div>
                        </div>

                        <div className="rsltmdltbdv2dv1">
                            <TabPanel>
                                <div className="rsltmdltbdv2dv2">
                                    <div className="rsltmdltbdv2dv3">
                                        <div className="rsltmdltbdv2dv4">
                                            <div className="rsltmdltbdv2dv4-d1"></div>
                                            <div className="rsltmdltbdv2dv4-dv2">
                                                <div className="rsltmdltbdv2dv4-dv2-a1">
                                                    <button type="button" className="rsltmdltbdv2dv4-dv2-a11">
                                                        <h4 className="rsltmdltbdv2dv4-dv2-a11h4">Professional Learning</h4>
                                                    </button>
                                                    <div>
                                                        <div className="progress my-1 brdrrdscstm" style={{height: 4, width: '100%'}}>
                                                            <div className="progress-bar bluclrr" style={{width: '60%'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="rsltmdltbdv2dv4-dv2-a2">
                                                    <span className="rsltmdltbdv2dv4-dv2-a2spn">Your Score: </span>
                                                    60%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rsltmdltbdv2dv5">
                                            
                                            <div className="rsltmdltbdv2dv5-1">
                                                <div>Your score of 1.5 out of 5 means your company is suffering from critical issues in your hiring and onboarding processes. This could include things like a lack of formal process for hiring or welcoming new employees, time-intensive manual processes, paper-based processes for worker documentation, or insecure storage of sensitive information which could be subject to loss, theft or ruin.</div>
                                            </div>

                                            <div className="rsltmdltbdv2dv5-2">
                                                <h3 className="rsltmdltbdv2dv5-2h3">Questions</h3>
                                                <div className="rsltmdltbdv2dv5-2d1">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="rsltmdltbdv2dv5-2d2">
                                                            <h5 className="rsltmdltbdv2dv5-2d3">Question 1</h5>
                                                            <div className="col-sm-12">
                                                                <p className="rsltmdltbdv2dv5-2d3p">It is easy to bury myself in my work?</p>
                                                                <div className="rsltmdltbdv2dv5-2d4 mb-5">
                                                                    <ProgressBar>
                                                                        <ProgressBar variant="prgrs-orngclr" now={40} key={1} label={'40%'} />
                                                                        <ProgressBar variant="prgrs-drkbluclr" now={20} key={2} label={'20%'} />
                                                                        <ProgressBar variant="prgrs-lytbluclr" now={40} key={3} label={'40%'} />
                                                                    </ProgressBar>
                                                                    <div className="rsltmdltbdv2dv5-2d5">
                                                                        <div className="row m-0 mt-4 rsltmdltbdv2dv5-2d6">
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght01"></span> <span className="rsltmdlqsclrtxt">Disagree</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght02"></span> <span className="rsltmdlqsclrtxt">Neutral</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght03"></span> <span className="rsltmdlqsclrtxt">Agree</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="col-sm-12 mt-4">
                                                                <h5 className="rsltmdltbdv2dv5-2d3 rsltmdltbdv2dv5-2d3csh55">Comment's • {activeIndex} of 4 </h5>
                                                                <Carousel activeIndex={activeIndex} onSelect={handleSelect} wrap={false} interval={null} slide={false} className="cstmmcrsll">
                                                                    <Carousel.Item>
                                                                        <p className="rsltmdltbdv2dv5-2d3p mt-10px">"I love how well we’ve adapted through working remotely. It seems like our teams have not lost a step."</p>
                                                                    </Carousel.Item>
                                                                    <Carousel.Item>
                                                                        <p className="rsltmdltbdv2dv5-2d3p mt-10px">Comment 2</p>
                                                                    </Carousel.Item>
                                                                    <Carousel.Item>
                                                                        <p className="rsltmdltbdv2dv5-2d3p mt-10px">Comment 3</p>
                                                                    </Carousel.Item>
                                                                    <Carousel.Item>
                                                                        <p className="rsltmdltbdv2dv5-2d3p mt-10px">Comment 4</p>
                                                                    </Carousel.Item>
                                                                    <Carousel.Item>
                                                                        <p className="rsltmdltbdv2dv5-2d3p mt-10px">Comment 5</p>
                                                                    </Carousel.Item>
                                                                </Carousel>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rsltmdltbdv2dv2">
                                    <div className="rsltmdltbdv2dv3">
                                        <div className="rsltmdltbdv2dv4">
                                            <div className="rsltmdltbdv2dv4-d1"></div>
                                            <div className="rsltmdltbdv2dv4-dv2">
                                                <div className="rsltmdltbdv2dv4-dv2-a1">
                                                    <button type="button" className="rsltmdltbdv2dv4-dv2-a11">
                                                        <h4 className="rsltmdltbdv2dv4-dv2-a11h4">Teaching Efficacy</h4>
                                                    </button>
                                                    <div>
                                                        <div className="progress my-1 brdrrdscstm" style={{height: 4, width: '100%'}}>
                                                            <div className="progress-bar bluclrr" style={{width: '40%'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="rsltmdltbdv2dv4-dv2-a2">
                                                    <span className="rsltmdltbdv2dv4-dv2-a2spn">Your Score: </span>
                                                    40%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rsltmdltbdv2dv5">
                                            
                                            <div className="rsltmdltbdv2dv5-1">
                                                <div>Your score of 1.5 out of 5 means your company is suffering from critical issues in your hiring and onboarding processes. This could include things like a lack of formal process for hiring or welcoming new employees, time-intensive manual processes, paper-based processes for worker documentation, or insecure storage of sensitive information which could be subject to loss, theft or ruin.</div>
                                            </div>

                                            <div className="rsltmdltbdv2dv5-2">
                                                <h3 className="rsltmdltbdv2dv5-2h3">Questions</h3>
                                                <div className="rsltmdltbdv2dv5-2d1">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="rsltmdltbdv2dv5-2d2">
                                                            <h5 className="rsltmdltbdv2dv5-2d3">Question 1</h5>
                                                            <div className="col-sm-12">
                                                                <p className="rsltmdltbdv2dv5-2d3p">It is easy to bury myself in my work?</p>
                                                                <div className="rsltmdltbdv2dv5-2d4 mb-5">
                                                                    <ProgressBar>
                                                                        <ProgressBar variant="prgrs-orngclr" now={40} key={1} label={'40%'} />
                                                                        <ProgressBar variant="prgrs-drkbluclr" now={20} key={2} label={'20%'} />
                                                                        <ProgressBar variant="prgrs-lytbluclr" now={40} key={3} label={'40%'} />
                                                                    </ProgressBar>
                                                                    <div className="rsltmdltbdv2dv5-2d5">
                                                                        <div className="row m-0 mt-4 rsltmdltbdv2dv5-2d6">
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght01"></span> <span className="rsltmdlqsclrtxt">Disagree</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght02"></span> <span className="rsltmdlqsclrtxt">Neutral</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght03"></span> <span className="rsltmdlqsclrtxt">Agree</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <h5 className="rsltmdltbdv2dv5-2d3">Comment</h5>
                                                                <p className="rsltmdltbdv2dv5-2d3p">"I love how well we’ve adapted through working remotely. It seems like our teams have not lost a step."</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rsltmdltbdv2dv2">
                                    <div className="rsltmdltbdv2dv3">
                                        <div className="rsltmdltbdv2dv4">
                                            <div className="rsltmdltbdv2dv4-d1"></div>
                                            <div className="rsltmdltbdv2dv4-dv2">
                                                <div className="rsltmdltbdv2dv4-dv2-a1">
                                                    <button type="button" className="rsltmdltbdv2dv4-dv2-a11">
                                                        <h4 className="rsltmdltbdv2dv4-dv2-a11h4">Feedback and Coaching</h4>
                                                    </button>
                                                    <div>
                                                        <div className="progress my-1 brdrrdscstm" style={{height: 4, width: '100%'}}>
                                                            <div className="progress-bar bluclrr" style={{width: '70%'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="rsltmdltbdv2dv4-dv2-a2">
                                                    <span className="rsltmdltbdv2dv4-dv2-a2spn">Your Score: </span>
                                                    70%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rsltmdltbdv2dv5">
                                            
                                            <div className="rsltmdltbdv2dv5-1">
                                                <div>Your score of 1.5 out of 5 means your company is suffering from critical issues in your hiring and onboarding processes. This could include things like a lack of formal process for hiring or welcoming new employees, time-intensive manual processes, paper-based processes for worker documentation, or insecure storage of sensitive information which could be subject to loss, theft or ruin.</div>
                                            </div>

                                            <div className="rsltmdltbdv2dv5-2">
                                                <h3 className="rsltmdltbdv2dv5-2h3">Questions</h3>
                                                <div className="rsltmdltbdv2dv5-2d1">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="rsltmdltbdv2dv5-2d2">
                                                            <h5 className="rsltmdltbdv2dv5-2d3">Question 1</h5>
                                                            <div className="col-sm-12">
                                                                <p className="rsltmdltbdv2dv5-2d3p">It is easy to bury myself in my work?</p>
                                                                <div className="rsltmdltbdv2dv5-2d4 mb-5">
                                                                    <ProgressBar>
                                                                        <ProgressBar variant="prgrs-orngclr" now={40} key={1} label={'40%'} />
                                                                        <ProgressBar variant="prgrs-drkbluclr" now={20} key={2} label={'20%'} />
                                                                        <ProgressBar variant="prgrs-lytbluclr" now={40} key={3} label={'40%'} />
                                                                    </ProgressBar>
                                                                    <div className="rsltmdltbdv2dv5-2d5">
                                                                        <div className="row m-0 mt-4 rsltmdltbdv2dv5-2d6">
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght01"></span> <span className="rsltmdlqsclrtxt">Disagree</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght02"></span> <span className="rsltmdlqsclrtxt">Neutral</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght03"></span> <span className="rsltmdlqsclrtxt">Agree</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <h5 className="rsltmdltbdv2dv5-2d3">Comment</h5>
                                                                <p className="rsltmdltbdv2dv5-2d3p">"I love how well we’ve adapted through working remotely. It seems like our teams have not lost a step."</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rsltmdltbdv2dv2">
                                    <div className="rsltmdltbdv2dv3">
                                        <div className="rsltmdltbdv2dv4">
                                            <div className="rsltmdltbdv2dv4-d1"></div>
                                            <div className="rsltmdltbdv2dv4-dv2">
                                                <div className="rsltmdltbdv2dv4-dv2-a1">
                                                    <button type="button" className="rsltmdltbdv2dv4-dv2-a11">
                                                        <h4 className="rsltmdltbdv2dv4-dv2-a11h4">Staff - Leadership Relationships</h4>
                                                    </button>
                                                    <div>
                                                        <div className="progress my-1 brdrrdscstm" style={{height: 4, width: '100%'}}>
                                                            <div className="progress-bar bluclrr" style={{width: '80%'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="rsltmdltbdv2dv4-dv2-a2">
                                                    <span className="rsltmdltbdv2dv4-dv2-a2spn">Your Score: </span>
                                                    80%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rsltmdltbdv2dv5">
                                            
                                            <div className="rsltmdltbdv2dv5-1">
                                                <div>Your score of 1.5 out of 5 means your company is suffering from critical issues in your hiring and onboarding processes. This could include things like a lack of formal process for hiring or welcoming new employees, time-intensive manual processes, paper-based processes for worker documentation, or insecure storage of sensitive information which could be subject to loss, theft or ruin.</div>
                                            </div>

                                            <div className="rsltmdltbdv2dv5-2">
                                                <h3 className="rsltmdltbdv2dv5-2h3">Questions</h3>
                                                <div className="rsltmdltbdv2dv5-2d1">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="rsltmdltbdv2dv5-2d2">
                                                            <h5 className="rsltmdltbdv2dv5-2d3">Question 1</h5>
                                                            <div className="col-sm-12">
                                                                <p className="rsltmdltbdv2dv5-2d3p">It is easy to bury myself in my work?</p>
                                                                <div className="rsltmdltbdv2dv5-2d4 mb-5">
                                                                    <ProgressBar>
                                                                        <ProgressBar variant="prgrs-orngclr" now={40} key={1} label={'40%'} />
                                                                        <ProgressBar variant="prgrs-drkbluclr" now={20} key={2} label={'20%'} />
                                                                        <ProgressBar variant="prgrs-lytbluclr" now={40} key={3} label={'40%'} />
                                                                    </ProgressBar>
                                                                    <div className="rsltmdltbdv2dv5-2d5">
                                                                        <div className="row m-0 mt-4 rsltmdltbdv2dv5-2d6">
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght01"></span> <span className="rsltmdlqsclrtxt">Disagree</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght02"></span> <span className="rsltmdlqsclrtxt">Neutral</span>
                                                                            </div>
                                                                            <div className="row m-0 mr-3">
                                                                                <span className="rsltmdlqsclrhglght03"></span> <span className="rsltmdlqsclrtxt">Agree</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <h5 className="rsltmdltbdv2dv5-2d3">Comment</h5>
                                                                <p className="rsltmdltbdv2dv5-2d3p">"I love how well we’ve adapted through working remotely. It seems like our teams have not lost a step."</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </Modal.Body>
        </Modal>

    </div>
}
