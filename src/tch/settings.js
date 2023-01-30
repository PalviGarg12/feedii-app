import React, { useState, useRef, useEffect }  from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
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
      

    const [showModal3, setShowModal3] = useState(false);
    const handleCloseModal3 = () => setShowModal3(false);
    const handleShowModal3 = () => {
        setShowModal3(true);
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
   

    const dataFetchedRefclasstch = useRef(false);
    const dataFetchedRefsubjecttch = useRef(false);
    const dataFetchedRefclass = useRef(false);
    const [classListtch, setclasseslisttch] = useState([]);
    const [listsubjectbatch, setlistsubjectbatch] = useState([]);
    const [listtbatch, setlistbatch] = useState([]);
    const [subjectidtosend, setsubjectid] = useState("");
    const [batchidtosend, setbatchid] = useState("")
    

    const fetchsesntchbchid = sessionStorage.getItem('setsesntchbchid');
     var staffidsession = sessionStorage.getItem("staffidsession");
     const [staffstatuscheck, setstaffstatuscheck] = useState([]);

    React.useEffect(
        ()=> {
       
                //staffid
           
            fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getStaffAllClassSubject/' + staffidsession , {
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

          fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getAllbatch/' + staffidsession, {
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
          

      const fetchstatuscheck = () => {
            
        fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getStaffStatusdata/' + staffidsession, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {    
           
            setstaffstatuscheck(data[0].StaffStatus);             

          })
          .catch(error =>{
              console.log(error);
          });     
    }

        const [selectedsbjctValue, setselectedsbjctValue] = useState();

        const handleChange1 = e => {
            setselectedsbjctValue(e.value);
        }
        const [editSelectedsbjctValue, setEditSelectedsbjctValue] = useState();
  
        const handleChange2 = e => {
            setEditSelectedsbjctValue(Array.isArray(e) ? e.map(x => x.value) : []);
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
            //alert(opnvl);
        }

        const handleShowModal2 = (stfbtchid, sbjctid) => {
            //alert(stfbtchid + " & " + sbjctid);
            setsubjectid(sbjctid);
            setbatchid(stfbtchid);
            setShowModal2(true);

            
           
        }

        const deleterow = () => {

            $('#mdlbtnlodr2').removeClass('hide');
            $('#mdlbtntxt2').addClass('hide');

            //alert(subjectidtosend);
            //alert(batchidtosend);
            fetch('https://entity-feediiapi.azurewebsites.net/api/staff/Delete_StaffSubjectBatch', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',  
                    'Content-Type': 'application/json',  
                    'Access-Control-Allow-Origin': '*',  
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({ 
                        subjectId: parseInt(subjectidtosend), 
                        batchid: parseInt(batchidtosend),
                        staffId: staffidsession
                    })
                }).then((data) => {
                    // alert('success');
                    window.location.href = "/tch/settings";
                    console.log("test data - " + data);
                })
        }


        const svv = () => {

            $('#mdlbtnlodr').removeClass('hide');
            $('#mdlbtntxt').addClass('hide');

            var subjctdv = $('#slctsbjcct #react-select-3-placeholder').text();
            var subjerr = $('#slctsuberr');
            var clsdv = $('#selctclsdta #react-select-5-placeholder').text();
            var clserr = $('#slctclserr');
            var sbjvl = $('#slctcdsbjcval').text();
            var clsvl = $('#slctcdclsval').text();
            var clsvall = clsvl.replace('[', '').replace(']','').replace(' ','');
            var batchidstring = clsvall.replace(/\s*\n\s*/g,"");
            
            if(sbjvl == "" || sbjvl == null || clsvl == "" || clsvl == "[]") {
            
                $('#mdlbtntxt').removeClass('hide');
                $('#mdlbtnlodr').addClass('hide');
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

                $('#mdlbtnlodr').removeClass('hide');
                $('#mdlbtntxt').addClass('hide');
                
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
                            staffId:staffidsession
                        })
                    }).then((data) => {
                        // alert('success');
                        window.location.href = "/tch/settings";
                        console.log("test data - " + data);
                    })
            }
        }

        if(classListtch.length == 0) {
             $('#errdv1').show();
             $('.tbldtaa1').hide();
         }
         else {
             $('.tbldtaa1').show();
             $('#errdv1').hide();
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

                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div className="row m-0">
                                <div className="col-sm-12">
                                    <h1 className="kmcs_h1 bluclr">Overview</h1>
                                    <p className="kmcs_p mt-5 bluclr mt-0 mb-4">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                                </div>
                            </div>
                            <div>
                                <div className="col-sm-12 bgclrblu mb-2">
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
                                                <button className="stngdvbtn1cs stngdvbtn1csbgcld" title="Add Class Button" type="button" onClick={() => {fetchstatuscheck(); handleShowModal();}}>
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
                                                        <div className="nodtadv1 brdr-none">
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
                                                                <th className="brdrbtm-none">Subjects</th>
                                                                <th className="brdrbtm-none" />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {classListtch.map((classd) => (
                                                                <div>
                                                                    <tr className="bglytbluclr">
                                                                        <td>
                                                                            <div className="ahover text-truncate wd-235px font-bold" title="Class - 6th">Class - 6th </div>
                                                                        </td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td className="text-right pr-4">
                                                                            <Dropdown>
                                                                               <Dropdown.Toggle className="tbl-drpbtnndw drpdwnicnbtnn">
                                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={()=>{ handleShowModal4();}}>Edit</div>
                                                                                    <div className="tbl-dropdown-item dropdown-item">Delete</div>
                                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={()=>{ handleShowModal5();}}>Add Sections</div>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="ahover text-truncate wd-235px" title={classd.gradename}>{classd.gradename} </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ahover text-truncate wd-235px pl-4" title="10">10 </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ahover text-truncate wd-235px" title={classd.subjectname}>{classd.subjectname} </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="text-right">
                                                                                <button className="stngpgtblbin drpdwnicnbtnn" onClick={()=>{ handleShowModal3();}} title="Edit Section">
                                                                                    <i className="fa fa-edit"></i>
                                                                                </button>
                                                                                <button className="stngpgtblbin drpdwnicnbtnn" title="Delete row" onClick={() => { handleShowModal2(classd.batchId, classd.subjectId);}}>
                                                                                    <i className="fa fa-trash"></i>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </div>
                                                            ))}
                                                            
                                                            
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

            {(() => {
                if(staffstatuscheck == "Joined") {
                    return(
                        <div>
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
                                            <div className="errslct" id="slctclserr">Please select your class</div>
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
                                <Button variant="secondary modalRedBtn" onClick= {svv} style={{minWidth: '60px'}}>
                                    <span id="mdlbtnlodr" className="hide">
                                        <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                                    </span>
                                    <span id="mdlbtntxt">Add</span>
                                </Button>
                            </Modal.Footer>
                        </div>
                    );
                }
                else {

                    return(
                        <div>
                            <Modal.Header closeButton>
                                <Modal.Title>Alert</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="clsmdlpcsd">Please approve your account from your admin then you can create your classes.</p>
                            </Modal.Body>
                            <Modal.Footer className="brdr-tp">
                                <Button variant="primary modalGrayBtn" onClick={handleCloseModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </div>
                    );

                }
            })()}
            
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
            <Button variant="secondary modalRedBtn" onClick={deleterow} style={{minWidth: '80px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={showModal3} onHide={handleCloseModal3} className="cstmmtmodal" >
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
                            <input type="text" placeholder="Add Class Name" className="tekila6 mdlclsnmer4" readOnly value="6th" />
                            <div className="errslct" id="mdlclsertxt3">Please enter class</div>
                        </div>
                    </div>
                    <div className="row m-0 mb-3">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Section</label>
                        </div>
                        <div className="col-sm-8" id="dynmcfldmdl">
                            <div className="row m-0">
                                <div className="col-sm-12 pl-0 pr-0">
                                    <input type="text" placeholder="Add Section Name" id="editsectn" className="tekila6 mdlsctnvl4" defaultValue="A" />
                                </div>
                            </div>
                            <div className="errslct" id="mdlsctnvlerr4">Please enter section name</div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal3}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn" onClick={()=>{handleCloseModal3(); }}  style={{minWidth: '80px'}}>
                    <span id="mdlbtnlodr4" className="hide">
                        <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                    </span>
                    <span id="mdlbtntxt4">Update</span>
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={showModal4} onHide={handleCloseModal4} className="cstmmtmodal" >
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
                            <input type="text" placeholder="Add Class Name" id="edtclasval" className="tekila6 mdlclsnmnmedter3" defaultValue="6th" />
                            <div className="errslct" id="mdlclsnmerrtxt3">Please enter class</div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal4}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn"  onClick={()=>{handleCloseModal4(); }} style={{minWidth: '80px'}}>
                    <span id="mdlbtnlodr5" className="hide">
                        <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                    </span>
                    <span id="mdlbtntxt5">Update</span>
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={showModal5} onHide={handleCloseModal5} className="cstmmtmodal clsmdlmrgnt1" >
            <Modal.Header closeButton>
                <Modal.Title>Add Section</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cstmmdlbdyhtt">
                <p className="clsmdlpcsd">Add section to the class.</p>
                <div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Class</label>
                        </div>
                        <div className="col-sm-8">
                            <div className="tekila6 mdlclsnmer3 dsbl-inp">
                                6th
                            </div>
                            <div className="errslct" id="mdlclsertxt3">Please enter class</div>
                        </div>
                    </div>
                    <div className="row m-0 mb-3">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Section</label>
                        </div>
                        <div className="col-sm-8" id="dynmcfldmdl2">
                            <Select id="edtslctsbjcct" options={subjectlistwithid} value={subjectlistwithid.find(obj => obj.value === editSelectedsbjctValue)} onChange={handleChange2} isMulti isClearable />
                            <div className="errslct" id="edtslctsuberr">Please select your subject</div>
                            {editSelectedsbjctValue && <div style={{ display: 'none' }}>
                                <div id="edtslctcdsbjcval">{JSON.stringify(editSelectedsbjctValue, null, 2)}</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal5}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn"  onClick={()=>{handleCloseModal5();}} style={{minWidth: '80px'}}>
                    <span id="mdlbtnlodr3" className="hide">
                        <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                    </span>
                    <span id="mdlbtntxt3">Update</span>
                </Button>
            </Modal.Footer>
        </Modal>

    </div>
}

// export default Details;