
import $ from 'jquery';
import '../Content/Content/result.css';
import { Headerdashboard } from '../headeruserdashboard';
import ArcProgress from "react-arc-progress";
import Select from 'react-select';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from "react";

export const ResultOverallPage = () => {

    const progress = "0.8";
    const text = "80";
    const arcFillColor = { gradient: ["#54d4f2"] };
    const dataFetchedRefoverall = useRef(false);
    const sessionscholid = localStorage.getItem('schoolidsession');
    const [overallresult, setOvrallResult] = useState([]);
    const [overallscore, setoverallscore] = useState("");
    const [varbench, setvarbench] = useState("");
    const [benchmark, setbenchmark] = useState("");
    const [allresponses, setallresponses] = useState("");
    const [allcomments, setallcomments] = useState("");


    React.useEffect(
        ()=> {
      
            fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getOverallResult/' + sessionscholid, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefoverall.current) return;
            dataFetchedRefoverall.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setOvrallResult(data)
            setoverallscore(data[0].OverallScore);
            setvarbench(data[0].overallvar);
            setbenchmark(data[0].Benchmark);
            setallresponses(data[0].OverallResponse);
            setallcomments(data[0].OverallCommentper);

            // if(data.length == 0 || data.length == 1) {
            //     $('#no-dtaclsrmsch').removeClass('hide');
            //     $('#dtaclsrmsch').addClass('hide');
            // }
            // else {
            //     $('#no-dtaclsrmsch').addClass('hide');
            //     $('#dtaclsrmsch').removeClass('hide');
            // }
            // hideLoader();
            // $('#login').show();
            
          })
        })

        const uniqueTags = [];
        overallresult.map(clist => {
            var indexs = uniqueTags.findIndex(a => a.keydata === clist.Keydata);
                if (indexs === -1) {
                    uniqueTags.push({keydata : clist.Keydata, ptScore : clist.P_TScore})
                }
            
        });
    
    const alclsdata = [{
        value: "0", label: "All Data"
    }];
    
    $('table.rslt-tbldv3tbl').on('scroll', function() {
        //alert('start');
        $("table.rslt-tbldv3tbl > *").width($("table.rslt-tbldv3tbl").width() + $("table.rslt-tbldv3tbl").scrollLeft());
    });

    const fetchpulseid = (pulseid) => {
        localStorage.setItem("pulseidresultsession",pulseid);
      }

      window.addEventListener("unload", function(event) {
          localStorage.clear();
      });

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding">
                <div className="row tab-content mb-3" id="srvydepdv">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active rsl-cspdng m-0" id="tab1">
                        
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
                                        <ArcProgress className="rsl-dv2" progress={progress} thickness={20} fillColor={arcFillColor} style={{ position: "relative", height: 150, width: 150 }} />
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
                                    <h4 className="rsl-hdngh4">Engagement Score</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0">
                                        <div>
                                            <table id="rslttblcs" className="rslttblcsvll">
                                                <thead>
                                                    <tr>
                                                        <th>Participants</th>
                                                        <th className="text-right">Score</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {uniqueTags.map((tg)=>(
                                                        <tr className="brdr-btm1">
                                                        <td>
                                                            <div className="text-truncate" title={tg.keydata}> {tg.keydata} </div>
                                                        </td>
                                                        <td className="text-right">
                                                            {(() => {
                                                                if(tg.ptScore >= 0 && tg.ptScore <= 35) {
                                                                    return(
                                                                        <div className="row m-0 col-sm-12 p-0">
                                                                            <div className="col-sm-11 p-0 pt-1">
                                                                                <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                                                    <div className="progress-bar dark-red" style={{width: `${tg.ptScore}%`}} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-1">
                                                                                <div className="rsltredclr">{tg.ptScore}</div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                                else if(tg.ptScore >= 36 && tg.ptScore <= 74) {
                                                                    return(
                                                                        <div className="row m-0 col-sm-12 p-0">
                                                                            <div className="col-sm-11 p-0 pt-1">
                                                                                <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                                                    <div className="progress-bar dark-ylw" style={{width: `${tg.ptScore}%`}} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-1">
                                                                                <div className="rsltylwclr">{tg.ptScore}</div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                                else if(tg.ptScore >= 75 && tg.ptScore <= 100) {
                                                                    return(
                                                                        <div className="row m-0 col-sm-12 p-0">
                                                                            <div className="col-sm-11 p-0 pt-1">
                                                                                <div className="progress my-1 brdrrdscstm" style={{height: 6}}>
                                                                                    <div className="progress-bar dark-green" style={{width: `${tg.ptScore}%`}} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-1">
                                                                                <div className="rsltgrnclr">{tg.ptScore}</div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                                else {

                                                                }
                                                            })()}
                                                        </td>
                                                    </tr>
                                                    ))}
                                                    
                                                   
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
                                    <h4 className="rsl-hdngh4">Overall Score Per Survey</h4>
                                </div>
                                <div className="rslt-dvv rslt-cstmpdb">
                                    <div className="col-sm-12 p-0 mb-3">
                                        <div>
                                            <table id="rslttblcs">
                                                <thead>
                                                    <tr className="brdr-btm1">
                                                        <th>Survey Name</th>
                                                        <th className="text-right">Your Score</th>
                                                        <th className="text-right">Benchmark</th>
                                                        <th className="text-right">Variance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {overallresult.map((ovrst)=>{
                                                         if(ovrst.Participant == "Student" && ovrst.Target == "School") {
                                                        return(<tr className="brdr-btm1">
                                                        <td>
                                                            <Link to='/result/Detailsstutosch'>
                                                                <div className="text-truncate" title={ovrst.Pulsename} onClick={()=> {fetchpulseid(ovrst.pulseid); }}>{ovrst.rno}. {ovrst.Pulsename}</div>
                                                                <div className="tbltddv2 cstmwdtbldv">{ovrst.Participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {ovrst.Target}</div>
                                                            </Link>
                                                        </td>
                                                        <td className="text-right">{ovrst.Pulsescore}%</td>
                                                        <td className="text-right">{ovrst.Benchmark}%</td>
                                                        <td className="text-right">
                                                            
                                                            {(() => {
                                                                if(ovrst.Pulsescore == ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltlytbluclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else if(ovrst.Pulsescore < ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltredclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else if(ovrst.Pulsescore > ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltgrnclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else {

                                                                }
                                                            })()}
                                                        </td>
                                                    </tr>)}
                                                    else if(ovrst.Participant == "Student" && ovrst.Target == "Teacher") {
                                                       return( <tr className="brdr-btm1">
                                                        <td>
                                                            <Link to='/result/Detailsstutotch'>
                                                                <div className="text-truncate" title={ovrst.Pulsename} onClick={()=> {fetchpulseid(ovrst.pulseid); }}>{ovrst.rno}. {ovrst.Pulsename}</div>
                                                                <div className="tbltddv2 cstmwdtbldv">{ovrst.Participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {ovrst.Target}</div>
                                                            </Link>
                                                        </td>
                                                        <td className="text-right">{ovrst.Pulsescore}%</td>
                                                        <td className="text-right">{ovrst.Benchmark}%</td>
                                                        <td className="text-right">                                                            
                                                            {(() => {
                                                                if(ovrst.Pulsescore == ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltlytbluclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else if(ovrst.Pulsescore < ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltredclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else if(ovrst.Pulsescore > ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltgrnclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else {

                                                                }
                                                            })()}
                                                        </td>
                                                    </tr>)}
                                                     else if(ovrst.Participant == "Teacher" && ovrst.Target == "School") {
                                                       return( <tr className="brdr-btm1">
                                                        <td>
                                                            <Link to='/result/Detailstchrtosch'>
                                                                <div className="text-truncate" title={ovrst.Pulsename} onClick={()=> {fetchpulseid(ovrst.pulseid); }}>{ovrst.rno}. {ovrst.Pulsename}</div>
                                                                <div className="tbltddv2 cstmwdtbldv">{ovrst.Participant} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {ovrst.Target}</div>
                                                            </Link>
                                                        </td>
                                                        <td className="text-right">{ovrst.Pulsescore}%</td>
                                                        <td className="text-right">{ovrst.Benchmark}%</td>
                                                        <td className="text-right">
                                                            
                                                            {(() => {
                                                                if(ovrst.Pulsescore == ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltlytbluclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else if(ovrst.Pulsescore < ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltredclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else if(ovrst.Pulsescore > ovrst.Benchmark) {
                                                                    return(
                                                                        <div className="rsltgrnclr">{ovrst.Pulsevar}%</div>
                                                                    );
                                                                }
                                                                else {

                                                                }
                                                            })()}
                                                        </td>
                                                    </tr>)}
                                                    })}
                                                    
                                                  
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-sm-12 p-0 mb-5">
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
                                                                    <Select className="rslttblslctt" options={alclsdata} defaultValue={{ label: "All Data", value: 0 }} />
                                                                </div>
                                                                <div className="rslttbldv4">Surveys</div>
                                                            </div>
                                                        </th>
                                                        <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title="Topic Name 1"> Overall Score </div>
                                                        </th>
                                                        <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title="Topic Name 2"> Jan - 2022 </div>
                                                        </th>
                                                        <th className="nobrdr rslt-cspltddt">
                                                            <div className="rslt-tbldv3tblthddv" title="Topic Name 3"> Sep - 2022 </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx2">
                                                            <Link to='/result/detailstchrtosch'>
                                                                <div className="rslt-tbldv2-4 text-truncate" title="Teacher School Relationship- (Part 1)">
                                                                    1. Teacher School Relationship- (Part 1)
                                                                </div>
                                                                <div className="tbltddv2 cstmwdtbldv">Teacher <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </Link>
                                                        </th>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                10%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                20%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr02">
                                                            <div>
                                                                30%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx2">
                                                            <Link to='/result/detailsstutotch'>
                                                                <div className="rslt-tbldv2-4 text-truncate" title="Student Teacher Relationship">
                                                                    2. Student Teacher Relationship
                                                                </div>
                                                                <div className="tbltddv2 cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> Teacher</div>
                                                            </Link>
                                                        </th>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                11%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                13%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr01">
                                                            <div>
                                                                14%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx2">
                                                            <Link to='/result/detailstchrtosch2'>
                                                                <div className="rslt-tbldv2-4 text-truncate" title="Teacher School Relationship- (Part 2)">
                                                                    3. Teacher School Relationship- (Part 2)
                                                                </div>
                                                                <div className="tbltddv2 cstmwdtbldv">Teacher <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </Link>
                                                        </th>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr03">
                                                            <div>
                                                                50%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr04">
                                                            <div>
                                                                60%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr05">
                                                            <div>
                                                                80%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="fix rslttbl3cstmfx2">
                                                            <Link to='/result/detailsstutosch'>
                                                                <div className="rslt-tbldv2-4 text-truncate" title="Student School Relationship">
                                                                    4. Student School Relationship
                                                                </div>
                                                                <div className="tbltddv2 cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </Link>
                                                        </th>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr04">
                                                            <div>
                                                                60%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr04">
                                                            <div>
                                                                70%
                                                            </div>
                                                        </td>
                                                        <td className="text-center rslt-tbl-dvv1 rslt-tbltdclr05">
                                                            <div>
                                                                80%
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="col-sm-12 row cstm--bxx">
                                            <div className="box mb-0">
                                                <div className="btn btn-lg rslt-tbltdclr01"></div>
                                                <div className="btn btn-lg rslt-tbltdclr02"></div>
                                                <div className="btn btn-lg rslt-tbltdclr03"></div>
                                                <p>Minimum</p>
                                            </div>
                                            <div className="box pl-1 mb-0">
                                                <div className="btn btn-lg rslt-tbltdclr04"></div>
                                                <div className="btn btn-lg rslt-tbltdclr05"></div>
                                                <p className="text-right">Maximum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>



        </div>
    </div>
}
