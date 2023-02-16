import React, { useState, useRef, useEffect }  from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { SecondHeaderSchoolClassroom } from '../secondheaderschclassroom';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link, json } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';


export const ClassroomschsettingsPagee = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

      

    // const [showModal, setShowModal] = useState(false);
    // const handleCloseModal = () => setShowModal(false);
    // const handleShowModal = () => {
    //     setShowModal(true);
    // }

    const [showModal2, setShowModal2] = useState(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const [adclsnumvl, setadclsnumvl] = useState(1);
    const [adsctnnumvl, setadsctnnumvl] = useState(1);
    

    const dataFetchedRefclasstch = useRef(false);
    const dataFetchedRefsubjecttch = useRef(false);
    const dataFetchedRefclass = useRef(false);
    const dataFetchedRefclasssection = useRef(false);
    const [classListtch, setclasseslisttch] = useState([]);
    const [listsubjectbatch, setlistsubjectbatch] = useState([]);
    const [listtbatch, setlistbatch] = useState([]);
    const [subjectidtosend, setsubjectid] = useState("");
    const [batchidtosend, setbatchid] = useState("");
    const [deleteclassorsection, setdeleteclassorsection] = useState("")
    const [batchsectionidtosend, setbatchsectionid] = useState("")
    const [classList, setclasseslist] = useState([]);
    const [addclassList, setaddclasseslist] = useState([]);
    const [addsectList, setaddsectlist] = useState([]);
    const [classsectionList, setclasseseclist] = useState([]);
    const sessionscholid = sessionStorage.getItem('schoolidsession');

    const [clasval, seclasval] = useState("");
    const [sectnid, setsecid] = useState("");
    
    if(sessionscholid == null) {
        window.location.href="/";
    }
    else {}

    React.useEffect(
        ()=> {
       
           
        //     fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getclassesdata/' + 1, {
        //     method: 'GET'
        //   }) .then((response) => response.json())
        //   .then((data) => {
        //     if (dataFetchedRefclass.current) return;
        //     dataFetchedRefclass.current = true;
            
        //     var objj = JSON.stringify(data);
        //     var parse = JSON.parse(objj);
           
        //     setclasseslist(data);
            
        //     hideLoader();
        //     $('#login').show();
            
        //   })
            //alert(sessionscholid);
             fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getAdminClasses/' + sessionscholid, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefclasssection.current) return;
            dataFetchedRefclasssection.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setclasseseclist(data);
            
            hideLoader();
            $('#login').show();
            
          })

        })
       

        const uniqueTags = [];
        classsectionList.map(clist => {
            var indexs = uniqueTags.findIndex(a => a.Graden === clist.Gradename);
                if (indexs === -1) {
                  
                    uniqueTags.push({ Graden: clist.Gradename, gradeid: clist.Gradeid})
                }
            
        });

        
        const [value, setValue] =  useState([]);

        const subjectlistwithid = [];
       

       for (const [i, subj] of listsubjectbatch.entries()) {
        subjectlistwithid.push({ value: subj.SubjectID, label: subj.subjectname})
      }
          


          const gradssdatalstt = [];
          for (const [i, grd] of listtbatch.entries()) {
           gradssdatalstt.push({ value: grd.batchID, label: grd.gradename})
         }

     

        const slctclsdatadrpdwn = () => {    
            var opnvl = $('#selctclsdta .css-12jo7m5').text();
        }


        const isdelteclassec = (dltsec) => {    
            setdeleteclassorsection(dltsec);
        }

        const handleShowModal2 = (stfbtchid, sbjctid,btchsection) => {
            setsubjectid(sbjctid);
            setbatchid(stfbtchid);
            setbatchsectionid(btchsection)
            setShowModal2(true);
        }       


        const [showModal, setShowModal] = useState(false);
        const [editclassname, seteditclassname] = useState(false);
        const [editsectionname, seteditsectionname] = useState("");
        const [gradeid, setgradeid] = useState("");
        const handleCloseModal = () => setShowModal(false);
        const handleShowModal = () => {
            setShowModal(true);
        }       


        const [showModal3, setShowModal3] = useState(false);
        const handleCloseModal3 = () => setShowModal3(false);
        const handleShowModal3 = () => {
            setShowModal3(true);
        } 
        
        const setclassname = (vale,idsec,secval,grdid) => {         
            seteditclassname(vale);
            seteditsectionname(secval);
            setsecid(idsec);
            setgradeid(grdid);
        } 


        const [showModal4, setShowModal4] = useState(false);
        const handleCloseModal4 = () => setShowModal4(false);
        const handleShowModal4 = () => {
            setShowModal4(true);
        }


        const [showModal5, setShowModal5] = useState(false);
        const handleCloseModal5 = () => setShowModal5(false);
        const handleShowModal5 = () => {
            setShowModal5(true);
        }

        const classlistt = [
            {value: 'Class - 1st', label: 'Class - 1st'},
            {value: 'Class - 2nd', label: 'Class - 2nd' },
            {value: 'Class - 3rd', label: 'Class - 3rd' },
            {value: 'Class - 4th', label: 'Class - 4th' },
            {value: 'Class - 5th', label: 'Class - 5th' }
        ]
        
        const [selectedclassValue, setselectedclassValue] = useState();

        const handleChange1 = e => {
            setselectedclassValue(e.value);
        }

        const sctnlist = [
            {value: 'Section - A', label: 'Section - A'},
            {value: 'Section - B', label: 'Section - B' },
            {value: 'Section - C', label: 'Section - C' },
            {value: 'Section - D', label: 'Section - D' }
        ]


        const [selectedsctnValue, setSelectedsctnValue] = useState([]);

        const handleChangee = e => {
            setSelectedsctnValue(Array.isArray(e) ? e.map(x => x.value) : []);
        }

        if(classsectionList.length == 0) {
             $('#errdv1').show();
             $('.tbldtaa1').hide();
         }
         else {
             $('.tbldtaa1').show();
             $('#errdv1').hide();
         }

         const svv = () => {            

            $('#mdlbtnlodr').removeClass('hide');
            $('#mdlbtntxt').addClass('hide');
            

            var clsnmerr = $('#mdlclsertxtt');
            var sctnnmerr = $('#mdlsctnvlerrr');
            var clsnm = $('.mdlclsnmerrrt').val();
            var sctnnm = $('.mdlsctnvalll').val();
            
            // if(clsnm == "" || clsnm == null || sctnnm == "" || sctnnm == null) {
            
            //     $('#mdlbtntxt').removeClass('hide');
            //     $('#mdlbtnlodr').addClass('hide');
            //     clsnmerr.show();
            //     sctnnmerr.show();
            //     clsnmerr.text('Please enter class');
            //     sctnnmerr.text('Please enter section');
            // }
            if(!clsnm || !sctnnm) {
                $('#mdlbtntxt').removeClass('hide');
                $('#mdlbtnlodr').addClass('hide');
                
                if(!clsnm) {
                    clsnmerr.show().text('Please enter class');
                } else if ($.trim(clsnm) === '') {
                    clsnmerr.show().text('Class name should not be blank');
                } else {
                    clsnmerr.hide();
                }

                if(!sctnnm) {
                    sctnnmerr.show().text('Please enter section');
                } else if ($.trim(sctnnm) === '') {
                    sctnnmerr.show().text('Section name should not be blank');
                } else {
                    sctnnmerr.hide();
                }

            } else if ($.trim(clsnm) === '') {
                clsnmerr.show().text('Class name should not be blank');
            } else if ($.trim(sctnnm) === '') {
                sctnnmerr.show().text('Section name should not be blank');
            } 
            else {

                clsnmerr.hide();
                sctnnmerr.hide();

                $('#mdlbtnlodr').removeClass('hide');
                $('#mdlbtntxt').addClass('hide');
            
                for (var i = 1; i <= adclsnumvl; i++) {
                   
                    var sect = $('.mdlsctnadvll' + i).val();
                    addclassList.push({classes : clsnm, section :sect,schoolId : parseInt(sessionscholid)  })
                }
    
                fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/Enter_Class', {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',  
                        'Content-Type': 'application/json',  
                        'Access-Control-Allow-Origin': '*',  
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                        'Access-Control-Allow-Credentials': 'true'
                    },
                    body: JSON.stringify(addclassList)})
                    .then(response=> { return response.json(); })
                    .then((data) => {
                       
                        var clsmsg = data[0].classMessage;
                        //alert(clsmsg);

                        if(clsmsg == "This Grade is already exist") {
                            $('#mdlbtntxt').removeClass('hide');
                            $('#mdlbtnlodr').addClass('hide');
                            clsnmerr.text('This class is already exist');
                            clsnmerr.show();
                            sctnnmerr.hide();
                        }
                        else {

                            clsnmerr.hide();
                            sctnnmerr.hide();
            
                            $('#mdlbtnlodr').removeClass('hide');
                            $('#mdlbtntxt').addClass('hide');
                            window.location.href = "/sch/settings";
                        }
        
                    })
                    .catch(error =>{
                        $('#mdlbtntxt').removeClass('hide');
                        $('#mdlbtnlodr').addClass('hide');
                        console.log(error);
                    })
                
               
            }
         }


         const deleteClass = (grdid) => {            

            fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/Delete_Class', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',  
                    'Content-Type': 'application/json',  
                    'Access-Control-Allow-Origin': '*',  
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({ 
                        GradeId: grdid,
                        schoolId : sessionscholid
                       
                    })
                }).then((data) => {
                   
                    window.location.href = "/sch/settings";
                    //console.log("test data - " + data);
                })
           
         }


         const deleteClasssection = (btchsectionid) => {            

            fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/Delete_batch', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',  
                    'Content-Type': 'application/json',  
                    'Access-Control-Allow-Origin': '*',  
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({ 
                        BatchId : btchsectionid,
                       
                    })
                }).then((data) => {
                   
                    window.location.href = "/sch/settings";
                    //console.log("test data - " + data);
                })
           
         }

         var mdlenttxt = $('.mdlsctnvalll');
         mdlenttxt.keyup(function () {
             console.log('keyup event triggered');
             var $th = $(this);
             $th.val($th.val().replace(/[^a-zA-Z0-9]+/g, ' '));
         });
         
         var mdlenttxtt = $('.mdlsctnvlll33');
         mdlenttxtt.keyup(function () {
             console.log('keyup event triggered');
             var $th = $(this);
             $th.val($th.val().replace(/[^a-zA-Z0-9]+/g, ' '));
         });
         

         const addinptvl = () => {
             $('#dynmcfldmdl').append('<div class="row m-0 mt-2" id="adclsrw' + (adclsnumvl + 1) + '"><div class="col-sm-11 pl-0"><input type="text" placeholder="Add Section Name" autocomplete="off" maxlength="15" class="tekila6 mdlsctnvl mdlsctnvalll mdlsctnadvll' + (adclsnumvl + 1) + '" /></div><div class="col-sm-1 p-0"><button class="mdlbtncsdd rmvclsmdldv" id="'+ (adclsnumvl + 1) +'"><i title="Remove section" class="binbtnmdllrm fa fa-trash"></i></button></div></div>');
             setadclsnumvl(adclsnumvl + 1);
         }
         
         
        $(document).on('click', '.rmvclsmdldv', function(){ 
            var rmvbtnid = $(this).attr("id");
            $('#adclsrw'+ rmvbtnid +'').remove();
            setadclsnumvl(adclsnumvl - 1);
         });

         const addinptvl2 = () => {
             $('#dynmcfldmdl2').append('<div class="row m-0 mt-2" id="adclsrww' + (adsctnnumvl + 1) + '"><div class="col-sm-11 pl-0"><input type="text" placeholder="Add Section Name" autocomplete="off" maxlength="15" class="tekila6 mdlsctnvl mdlsctnvlll33 mdladsctnadvall' + (adsctnnumvl + 1) + '" /></div><div class="col-sm-1 p-0"><button class="mdlbtncsdd rmvclsmdldv2" id="'+ (adsctnnumvl + 1) +'"><i title="Remove section" class="binbtnmdllrm fa fa-trash"></i></button></div></div>');
             setadsctnnumvl(adsctnnumvl + 1);
         }
         
         
        $(document).on('click', '.rmvclsmdldv2', function(){ 
            var rmvbtnid2 = $(this).attr("id");
            $('#adclsrww'+ rmvbtnid2).remove();
            setadsctnnumvl(adsctnnumvl - 1);
         });

         

         const svvupdt = () => {            

            $('#mdlbtnlodr3').removeClass('hide');
            $('#mdlbtntxt3').addClass('hide');

            var clsnmerr = $('#mdlclsertxt3');
            var sctnnmerr = $('#mdlsctnvlerr3');
            var clsnm = $('.mdlclsnmer3').val();
            var sctnnm = $('.mdlsctnvl3').val();
            
            // if(clsnm == "" || clsnm == null || sctnnm == "" || sctnnm == null) {
            
            //     $('#mdlbtntxt3').removeClass('hide');
            //     $('#mdlbtnlodr3').addClass('hide');
            //     clsnmerr.show();
            //     sctnnmerr.show();
            // }
            if(!sctnnm) {
                $('#mdlbtntxt3').removeClass('hide');
                $('#mdlbtnlodr3').addClass('hide');
                if(!sctnnm) {
                    sctnnmerr.show().text('Please enter section');
                } else if ($.trim(sctnnm) === '') {
                    sctnnmerr.show().text('Section name should not be blank');
                } else {
                    sctnnmerr.hide();
                }
            } else if ($.trim(sctnnm) === '') {
                $('#mdlbtntxt3').removeClass('hide');
                $('#mdlbtnlodr3').addClass('hide');
                sctnnmerr.show().text('Section name should not be blank');
            }
            else {

                sctnnmerr.hide();

                $('#mdlbtnlodr3').removeClass('hide');
                $('#mdlbtntxt3').addClass('hide');

                for (var i = 1; i <= adsctnnumvl; i++) {          
                    var sect2 = $('.mdladsctnadvall' + i).val();
                    addsectList.push({sectionName : sect2 , gradeId: gradeid , schoolId : parseInt(sessionscholid)  })
                }
    
                //console.log("enter section" + JSON.stringify(addsectList));
    
                fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/Enter_Section', {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',  
                        'Content-Type': 'application/json',  
                        'Access-Control-Allow-Origin': '*',  
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                        'Access-Control-Allow-Credentials': 'true'
                    },
                    body: JSON.stringify(addsectList)
                    }).then((data) => {
                       
                        handleCloseModal3();
                        window.location.href = "/sch/settings";
                        //console.log("test data - " + data);
                    })
               

            }
         }

         const svvupdtsctn = () => {            

            $('#mdlbtnlodr4').removeClass('hide');
            $('#mdlbtntxt4').addClass('hide');

            var sctnnmerr = $('#mdlsctnvlerr4');
            var sctnnm = $('.mdlsctnvl4').val();
            
            // if(sctnnm == "" || sctnnm == null) {
            
            //     $('#mdlbtntxt4').removeClass('hide');
            //     $('#mdlbtnlodr4').addClass('hide');
            //     sctnnmerr.show();
            //     sctnnmerr.text('Please enter section name');
            // }
            if(!sctnnm) {
                $('#mdlbtntxt4').removeClass('hide');
                $('#mdlbtnlodr4').addClass('hide');
                if(!sctnnm) {
                    sctnnmerr.show().text('Please enter section');
                } else if ($.trim(sctnnm) === '') {
                    sctnnmerr.show().text('Section name should not be blank');
                } else {
                    sctnnmerr.hide();
                }
            } else if ($.trim(sctnnm) === '') {
                $('#mdlbtntxt4').removeClass('hide');
                $('#mdlbtnlodr4').addClass('hide');
                sctnnmerr.show().text('Section name should not be blank');
            }
            else {

                sctnnmerr.hide();

                $('#mdlbtnlodr4').removeClass('hide');
                $('#mdlbtntxt4').addClass('hide');

                fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/Update_section', {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',  
                        'Content-Type': 'application/json',  
                        'Access-Control-Allow-Origin': '*',  
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                        'Access-Control-Allow-Credentials': 'true'
                    },
                    body: JSON.stringify({ 
                        sectionId  : sectnid,
                        sectionName  :  sctnnm,
                        gradeId  : gradeid,
                        schoolId  : sessionscholid
                        })
                    }).then(response=> { return response.json(); })
                    .then((data) => {
                       
                        //console.log(data[0].classMessage);
                        var daataa = data[0].classMessage;

                        if(daataa == "Already Exist") {

                            $('#mdlbtntxt4').removeClass('hide');
                            $('#mdlbtnlodr4').addClass('hide');
                            sctnnmerr.show();
                            sctnnmerr.text('This section name is already exist, please enter the new one.');

                        }
                        else {

                            sctnnmerr.hide();
            
                            $('#mdlbtnlodr4').removeClass('hide');
                            $('#mdlbtntxt4').addClass('hide');

                            window.location.href = "/sch/settings";
                            handleCloseModal4();

                        }
        
                    })
                    .catch(error =>{

                        $('#mdlbtntxt4').removeClass('hide');
                        $('#mdlbtnlodr4').addClass('hide');
                        console.log(error);
                    
                    })

            }
         }

         const svvclsnmupdt = () => {       

            $('#mdlbtnlodr5').removeClass('hide');
            $('#mdlbtntxt5').addClass('hide');

            var clsnmerr = $('#mdlclsnmerrtxt3');
            var clsnm = $('.mdlclsnmnmedter3').val();
            
            if(clsnm == "" || clsnm == null) {
            
                $('#mdlbtntxt5').removeClass('hide');
                $('#mdlbtnlodr5').addClass('hide');
                clsnmerr.show();
                clsnmerr.text('Please enter class');
            }

            else {

                clsnmerr.hide();

                $('#mdlbtnlodr5').removeClass('hide');
                $('#mdlbtntxt5').addClass('hide');
                

                fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/Update_Grade', {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',  
                        'Content-Type': 'application/json',  
                        'Access-Control-Allow-Origin': '*',  
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                        'Access-Control-Allow-Credentials': 'true'
                    },
                    body: JSON.stringify({ 
                        gradeId  : gradeid,
                        GradeName   :  clsnm,
                        schoolId   : sessionscholid,
                       
                        })
                    }).then(response=> { return response.json(); })
                    .then((data) => {
                       
                        //console.log(data[0].classMessage);
                        var dtaa = data[0].classMessage;

                        if(dtaa == "Already Exist") {

                            $('#mdlbtntxt5').removeClass('hide');
                            $('#mdlbtnlodr5').addClass('hide');
                            clsnmerr.show();
                            clsnmerr.text('This gradename is already exist, please enter the new one.');

                        }
                        else {

                            clsnmerr.hide();
            
                            $('#mdlbtnlodr5').removeClass('hide');
                            $('#mdlbtntxt5').addClass('hide');

                            window.location.href = "/sch/settings";
                            handleCloseModal5();

                        }
        
                    })
                    .catch(error =>{

                        $('#mdlbtntxt5').removeClass('hide');
                        $('#mdlbtnlodr5').addClass('hide');
                        console.log(error);
                    
                    })


            }
         }

         


    return <div>
        <SecondHeaderSchoolClassroom />
        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            
            <div className="padding">

                <div className="hide">
                    <div className="clsrmnoclsnwd">
                        <div>
                            <img src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" alt="Image" />
                            <p className="clsrmnoclsnwdp">No data found</p>
                        </div>
                    </div>
                </div>

                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div className="row m-0">
                                <div className="col-sm-12">
                                    <h1 className="kmcs_h1 bluclr">Overview</h1>
                                    <p className="kmcs_p mt-4 bluclr mt-0 mb-4">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                                </div>
                            </div>
                            <div>
                                <div className="col-sm-12 bgclrblu mb-2">
                                    <div className="dshbrd-dvv1 row ml-0 mr-0 pb-0">
                                        <div className="col-sm-10 pl-0">
                                            <ul className="dshbrd-dvv1-ul">
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a className="dshbrd-dvv1-ul-li-a active dshbrd-dvv1-ul-li-a-mbvw mbvw-ml0">All Classes</a>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div className="col-sm-2 pl-0">
                                            <div>
                                                <button className="stngdvbtn1cs stngdvbtn1csbgcld" title="Add Class Button" type="button" onClick={() => { handleShowModal();}}>
                                                    <i className="fa fa-plus cstmstngfsicn"></i>
                                                    Add Class
                                                </button>
                                            </div>
                                        </div>                                      
                                        
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-sm-12">
                                    <div className="panel box cstmtblbrdr mb-0">
                                        <div >
                                            <div className="box-body row m-0">
                                                <div id="cstmclsstnmtbl" className="table-responsive">
                                                    <div id="errdv1">
                                                        <div className="nodtadv1">
                                                            <div>
                                                                <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                                <div className="nodtadv1txt">No Data Found</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table id="stngtbll" className="table cstmtable2 v-middle p-0 m-0 box tbldtaa1 brdr-none">
                                                        <thead>
                                                            <tr>
                                                                <th className="brdrbtm-none">Classes</th>
                                                                <th className="brdrbtm-none">No. of Students</th>
                                                                <th className="brdrbtm-none">No. of Teachers</th>
                                                                <th className="brdrbtm-none" />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {uniqueTags.map((classs)=>(
                                                                
                                                                   
                                                                        <div>
                                                                            <tr className="bglytbluclr">
                                                                                <td>
                                                                                    <div className="ahover text-truncate wd-235px font-bold" title={`Class - ${classs.Graden}`}>Class - {classs.Graden} </div>
                                                                                </td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td className="text-right pr-4">
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle className="tbl-drpbtnndw drpdwnicnbtnn">
                                                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                                        </Dropdown.Toggle>

                                                                                        <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                                            <div className="tbl-dropdown-item dropdown-item" onClick={()=>{ handleShowModal5(); setclassname(classs.Graden,0,"",classs.gradeid); }}>Edit</div>
                                                                                            <div className="tbl-dropdown-item dropdown-item" onClick={()=>{ handleShowModal2(classs.gradeid,0,0);  isdelteclassec("Grade"); }}>Delete</div>
                                                                                            <div className="tbl-dropdown-item dropdown-item" onClick={()=>{ handleShowModal3(); setclassname(classs.Graden,0,"",classs.gradeid); }}>Add Sections</div>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </td>
                                                                            </tr>
                                                                            {classsectionList.map((clsec) => {
                                                                               
                                                                                if(clsec.Gradename == classs.Graden){
                                                                                    return(
                                                                                <tr className="mn-ht-65px">
                                                                                <td>
                                                                                    <div className="ahover text-truncate wd-235px" title={`Section - ${clsec.sectionName}`}>Section - {clsec.sectionName}</div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="ahover text-truncate wd-235px pl-4" title='No. of Students'>{clsec.totalstudent} </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="ahover text-truncate wd-235px pl-4" title='No. of Teachers'>{clsec.TotalStaff}</div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="text-right">
                                                                                        <button className="stngpgtblbin drpdwnicnbtnn" title="Edit Section" onClick={() => { handleShowModal4(); setclassname(clsec.Gradename,clsec.sectionId,clsec.sectionName,clsec.Gradeid);}}>
                                                                                            <i className="fa fa-edit"></i>
                                                                                        </button>
                                                                                        <button className="stngpgtblbin drpdwnicnbtnn" title="Delete Section" onClick={() => { handleShowModal2(0,0,clsec.batchId); isdelteclassec("Section");}}>
                                                                                            <i className="fa fa-trash"></i>
                                                                                        </button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>)
                                                                                }
                                                                                
                                                                            })}
                                                                            
                                                                            
                                                                           
                                                                        </div>
                                                                    )
                                                                
                                                              

                                                            )

                                                            }
                                                              
                                                            
                                                        </tbody>
                                                    </table>
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


        


        
        <Modal show={showModal} onHide={handleCloseModal} className="cstmmtmodal clsmdlmrgnt1" >
            <Modal.Header closeButton>
                <Modal.Title>Add Class</Modal.Title>
            </Modal.Header>
           <div>
                <div id="frmm">
                    <Modal.Body className="cstmmdlbdyhtt clsmdlmrgnt1bdyht">
                        <p className="clsmdlpcsd">Add classes to your classroom.</p>
                        <div>
                            <div className="row m-0 mb-4">
                                <div className="col-sm-4">
                                    <label className="mdllblcsds">Class</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" placeholder="Add Class Name" autocomplete="off" maxlength="15" className="tekila6 mdlclsnmerrrt" id="adclsvlll" />
                                    <div className="errslct" id="mdlclsertxtt">Please enter class</div>
                                </div>
                            </div>
                            <div className="row m-0 mb-3">
                                <div className="col-sm-4">
                                    <label className="mdllblcsds">Section</label>
                                </div>
                                <div className="col-sm-8" id="dynmcfldmdl">
                                    <div className="row m-0" id="adclsrw1">
                                        <div className="col-sm-12 p-0">
                                            <input type="text" placeholder="Add Section Name" autocomplete="off" maxlength="15" name="qty1" className="tekila6 mdlsctnvl mdlsctnvalll mdlsctnadvll1" />
                                        </div>
                                    </div>
                                    <div className="errslct" id="mdlsctnvlerrr">Please enter section</div>
                                </div>
                                <div className="col-sm-12 row m-0 p-0">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-8">
                                        <button onClick={addinptvl} className="mdlbtncsdd blubtnmdllad"><i className="fa fa-plus-circle mr-2"></i> Add Section</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="brdr-tp">
                        <Button variant="primary modalGrayBtn" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button variant="secondary modalRedBtn" type="submit" onClick= {() => {svv();}} style={{minWidth: '60px'}}>
                            <span id="mdlbtnlodr" className="hide">
                                <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                            </span>
                            <span id="mdlbtntxt">Add</span>
                        </Button>
                    </Modal.Footer>
                </div>
           </div>
        </Modal>


        <Modal show={showModal2} onHide={handleCloseModal2} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal2}>
                Close
            </Button>

            
            {/* <Button variant="secondary modalRedBtn" onClick={() => {deleteClass(batchidtosend);}} style={{minWidth: '80px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button> */}


            <Button variant="secondary modalRedBtn" onClick={() => {
            if(deleteclassorsection == "Grade"){
                deleteClass(batchidtosend);
                //alert("batch")
            } else {
                // do something else
                deleteClasssection(batchsectionidtosend);
              // alert("section")
            }
           }} style={{minWidth: '80px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
           
            
            
            </Modal.Footer>
        </Modal>

        

        
        <Modal show={showModal3} onHide={handleCloseModal3} className="cstmmtmodal clsmdlmrgnt1" >
            <Modal.Header closeButton>
                <Modal.Title>Add Section</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cstmmdlbdyhtt clsmdlmrgnt1bdyht">
                <p className="clsmdlpcsd">Add section to the class.</p>
                <div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Class</label>
                        </div>
                        <div className="col-sm-8">
                            <div className="tekila6 mdlclsnmer3 dsbl-inp">
                                {editclassname}
                            </div>
                            <div className="errslct" id="mdlclsertxt3">Please enter class</div>
                        </div>
                    </div>
                    <div className="row m-0 mb-3">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Section</label>
                        </div>
                        <div className="col-sm-8" id="dynmcfldmdl2">
                            <div className="row m-0">
                                <div className="col-sm-12 p-0">
                                    <input type="text" placeholder="Add Section Name" autocomplete="off" maxlength="15" className="tekila6 mdlsctnvl3 mdlsctnvlll33 mdladsctnadvall1" />
                                </div>
                            </div>
                            <div className="errslct" id="mdlsctnvlerr3">Please enter section</div>
                        </div>
                        <div className="col-sm-12 row m-0 p-0">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-8">
                                <button onClick={addinptvl2} className="mdlbtncsdd blubtnmdllad"><i className="fa fa-plus-circle mr-2"></i> Add Section</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal3}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn"  onClick={()=>{svvupdt(); }} style={{minWidth: '90px'}}>
                    <span id="mdlbtnlodr3" className="hide">
                        <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                    </span>
                    <span id="mdlbtntxt3">Add Section</span>
                </Button>
            </Modal.Footer>
        </Modal>
        
        
        <Modal show={showModal4} onHide={handleCloseModal4} className="cstmmtmodal" >
            <Modal.Header closeButton>
                <Modal.Title>Edit Section</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cstmmdlbdyhtt">
                <p className="clsmdlpcsd">Update section to this class.</p>
                <div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Class</label>
                        </div>
                        <div className="col-sm-8">
                            <input type="text" placeholder="Add Class Name" autocomplete="off" maxlength="15" className="tekila6 mdlclsnmer4 dsbl-inp" readOnly value={editclassname} />
                        </div>
                    </div>
                    <div className="row m-0 mb-3">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Section</label>
                        </div>
                        <div className="col-sm-8" id="dynmcfldmdl">
                            <div className="row m-0">
                                <div className="col-sm-12 pl-0 pr-0">
                                    <input type="text" placeholder="Add Section Name" id="editsectn" autocomplete="off" maxlength="15" className="tekila6 mdlsctnvl4" defaultValue={editsectionname} />
                                </div>
                            </div>
                            <div className="errslct" id="mdlsctnvlerr4">Please enter section name</div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal4}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn" onClick={()=>{svvupdtsctn(); }}  style={{minWidth: '80px'}}>
                    <span id="mdlbtnlodr4" className="hide">
                        <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                    </span>
                    <span id="mdlbtntxt4">Update</span>
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={showModal5} onHide={handleCloseModal5} className="cstmmtmodal" >
        <Modal.Header closeButton>
                <Modal.Title>Edit Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="clsmdlpcsd">Update the class name.</p>
                <div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Class</label>
                        </div>
                        <div className="col-sm-8">
                            <input type="text" placeholder="Add Class Name" id="edtclasval" autocomplete="off" maxlength="15" className="tekila6 mdlclsnmnmedter3" defaultValue={editclassname} />
                            <div className="errslct" id="mdlclsnmerrtxt3">Please enter class</div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal5}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn"  onClick={()=>{svvclsnmupdt(); }} style={{minWidth: '80px'}}>
                    <span id="mdlbtnlodr5" className="hide">
                        <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                    </span>
                    <span id="mdlbtntxt5">Update</span>
                </Button>
            </Modal.Footer>
        </Modal>

    </div>
}

// export default Details;
