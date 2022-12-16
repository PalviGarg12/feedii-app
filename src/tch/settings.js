import React, { useState, useRef, useEffect }  from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { HeaderTchrrrdashboard } from '../headertchrdashboard';
import { SecondHeaderTchrrrdashboard } from '../secondheadertchrdashboard';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';


export const ClassroomtchsettingsPagee = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

      

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => {
        setShowModal(true);
    }

    const [showModal2, setShowModal2] = useState(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => {
        setShowModal2(true);
    }

    const dataFetchedRefclasstch = useRef(false);
    const dataFetchedRefsubjecttch = useRef(false);
    const dataFetchedRefclass = useRef(false);
    const [classListtch, setclasseslisttch] = useState([]);
    const [listsubjectbatch, setlistsubjectbatch] = useState([]);
    const [listtbatch, setlistbatch] = useState([]);
    

    const fetchsesntchbchid = sessionStorage.getItem('setsesntchbchid');
     var staffidsession = sessionStorage.getItem("staffidsession");

    React.useEffect(
        ()=> {
       
                //staffid
           
            fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getStaffClassroom/' + 7 , {
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefclasstch.current) return;
            dataFetchedRefclasstch.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setclasseslisttch(data)
            hideLoader();
            $('#login').show();
            
          })


          fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getAllSubject' , {
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefsubjecttch.current) return;
            dataFetchedRefsubjecttch.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setlistsubjectbatch(data)
            
            
          })

          fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getAllbatch/' +7, {
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefclass.current) return;
            dataFetchedRefclass.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setlistbatch(data)                   
            
          })
        })

       

        // const uniqueTags = [];
        // classListtch.map(clist => {
        //     if (uniqueTags.indexOf(clist.Grade) === -1) {
        //         uniqueTags.push(clist.Grade)
        //     }
        // });

        const [value, setValue] =  useState([]);

        const subjectlistwithid = [];
       

       for (const [i, subj] of listsubjectbatch.entries()) {
        subjectlistwithid.push({ value: subj.SubjectID, label: subj.subjectname})
      }
          

        const [selectedsbjctValue, setselectedsbjctValue] = useState();

        const handleChange1 = e => {
            setselectedsbjctValue(e.value);
          }

          const gradssdatalstt = [];
          for (const [i, grd] of listtbatch.entries()) {
           gradssdatalstt.push({ value: grd.batchID, label: grd.gradename})
         }

        const [selectedValue, setSelectedValue] = useState([]);

        const handleChangee = e => {
            setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
        }

        const slctclsdatadrpdwn = () => {    
            var opnvl = $('#selctclsdta .css-12jo7m5').text();
            alert(opnvl);
        }


        const svv = () => {
            var subjctdv = $('#slctsbjcct #react-select-3-placeholder').text();
            var subjerr = $('#slctsuberr');
            var clsdv = $('#selctclsdta #react-select-5-placeholder').text();
            var clserr = $('#slctclserr');
            var sbjvl = $('#slctcdsbjcval').text();
            var clsvl = $('#slctcdclsval').text();
            var clsvall = clsvl.replace('[', '').replace(']','').replace(' ','');
            var batchidstring = clsvall.replace(/\s*\n\s*/g,"");
            
            if(subjctdv == "Select..." || clsdv == "Select...") {
                subjerr.show();
                clserr.show();
            }
            // else if(subjctdv == "Select...") {
            //     subjerr.show();
            // }
            // else if(clsdv == "Select...") {
            //     clserr.show();
            // }
            else {
                //alert("else");
                subjerr.hide();
                clserr.hide();

                fetch('https://entity-feediiapi.azurewebsites.net/api/staff/saveStaffSubjectbatch', {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',  
                        'Content-Type': 'application/json',  
                        'Access-Control-Allow-Origin': '*',  
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                        'Access-Control-Allow-Credentials': 'true'
                    },
                    body: JSON.stringify({ 
                            subjectId: sbjvl, 
                            batchId: batchidstring,
                            staffId:7
                        })
                    }).then((data) => {
                        // alert('success');
                        window.location.href = "/tch/settings";
                        console.log("test data - " + data);
                    })
            }
        }

    return <div>
        <SecondHeaderTchrrrdashboard />
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

                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div className="row m-0">
                                <div className="col-sm-12">
                                    <h1 className="kmcs_h1 bluclr">Overview</h1>
                                    <p className="kmcs_p mt-5 bluclr mt-0 mb-5">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                                </div>
                            </div>
                            <div>
                                <div className="col-sm-12 bgclrblu mb-2 p-0">
                                    <div className="dshbrd-dvv1 row ml-0 mr-0 pb-0">
                                        <div className="col-sm-10 pl-0">
                                            <ul className="dshbrd-dvv1-ul">
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a className="dshbrd-dvv1-ul-li-a active dshbrd-dvv1-ul-li-a-mbvw mbvw-ml0">My Subjects</a>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div className="col-sm-2 pl-0">
                                            <div>
                                                <button className="stngdvbtn1cs" title="Add Class Button" type="button" onClick={() => { handleShowModal();}}>
                                                    <i className="fa fa-plus cstmstngfsicn"></i>
                                                    Add Class
                                                </button>
                                            </div>
                                        </div>                                      
                                        
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="panel box cstmtblbrdr mb-0">
                                        <div >
                                            <div className="box-body row m-0">
                                                <div id="cstmclsstnmtbl" className="table-responsive">
                                                    <table id="stngtbll" className="table cstmtable2 v-middle p-0 m-0 box">
                                                        <thead>
                                                            <tr>
                                                                <th>Classes</th>
                                                                <th>Subjects</th>
                                                                <th />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {classListtch.map((classd) => (
                                                                <tr>
                                                                <td>
                                                                    <div className="ahover text-truncate wd-235px" title={classd.gradename}>{classd.gradename} </div>
                                                                </td>
                                                                <td>
                                                                    <div className="ahover text-truncate wd-235px" title={classd.Subject}>{classd.Subject} </div>
                                                                </td>
                                                                <td>
                                                                    <div className="text-right">
                                                                        <button className="stngpgtblbin" title="Delete row" onClick={() => { handleShowModal2();}}>
                                                                            <i className="fa fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            ))}
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="ahover text-truncate wd-235px" title="Class 6th - B">Class 6th - B </div>
                                                                </td>
                                                                <td>
                                                                    <div className="ahover text-truncate wd-235px" title="Maths">English </div>
                                                                </td>
                                                                <td>
                                                                    <div className="text-right">
                                                                        <button className="stngpgtblbin" title="Delete row" onClick={() => { handleShowModal2();}}>
                                                                            <i className="fa fa-trash"></i>
                                                                        </button>
                                                                    </div>
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
                        <br />
                    </div>
                </div>

                
            </div>


        </div>


        


        <Modal show={showModal} onHide={handleCloseModal} className="cstmmtmodal" >
            <Modal.Header closeButton>
                <Modal.Title>Add Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="clsmdlpcsd">Here you can choose your subject & class and add them to your classroom.</p>
                <div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Subject</label>
                        </div>
                        <div className="col-sm-8">
                            <Select id="slctsbjcct" options={subjectlistwithid} value={subjectlistwithid.find(obj => obj.value === selectedsbjctValue)} onChange={handleChange1} />
                            <div className="errslct" id="slctsuberr">Please select your subject</div>
                        </div>
                        {selectedsbjctValue && <div style={{ display: 'none' }}>
                            <div id="slctcdsbjcval">{selectedsbjctValue}</div>
                        </div>}
                    </div>
                    <div className="row m-0 mb-3">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Class</label>
                        </div>
                        <div className="col-sm-8">
                            <Select id="selctclsdta" options={gradssdatalstt} value={gradssdatalstt.filter(obj => selectedValue.includes(obj.value))} onChange={handleChangee} isMulti isClearable />
                        </div>
                        {selectedValue && <div style={{ display: 'none' }}>
                            <div id="slctcdclsval">{JSON.stringify(selectedValue, null, 2)}</div>
                        </div>}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn" onClick= {svv}>
                    Add
                </Button>
            </Modal.Footer>
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
            <Button variant="secondary modalRedBtn" onClick={handleCloseModal2}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>

    </div>
}

// export default Details;