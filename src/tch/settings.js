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

    const dataFetchedRefclasstch = useRef(false);
    const [classListtch, setclasseslisttch] = useState([]);
    const sesnschlbchid = '0';

    React.useEffect(
        ()=> {
       
                //staffid
           
            fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getStaffClassroom/' + 7, {
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
        })

        const sndssntchbachid = (battchhid) => {
            //alert(battchhid);
            const sesnschlbchid = sessionStorage.setItem( "setsesntchbchid" , battchhid);
        }

        const uniqueTags = [];
        classListtch.map(clist => {
            if (uniqueTags.indexOf(clist.Grade) === -1) {
                uniqueTags.push(clist.Grade)
            }
        });

        const subjectsdatalstt = [
            { value: 'Maths', label: 'Maths' },
            { value: 'English', label: 'English' },
            { value: 'Hindi', label: 'Hindi' }
        ];

        const gradssdatalstt = [
            { value: '1', label: 'Class 1st - A' },
            { value: '2', label: 'Class 1st - B' },
            { value: '3', label: 'Class 1st - C' }
        ];

        const slctclsdatadrpdwn = () => {    
            var opnvl = $('#selctclsdta .css-12jo7m5').text();
            alert(opnvl);
        }

        const [value, setValue] =  useState([]);


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

                <div className="row tab-content mt-4 mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div className="row m-0">
                                <div className="col-sm-9 pl-0">
                                    <p className="kmcs_p bluclr mt-0 mb-5">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                                </div>
                                <div className="col-sm-3">
                                    <div className="text-right">
                                        <button className="modalGrayBtn mnwd-55-p" type="button" onClick={() => { handleShowModal();}}>
                                            Add Class
                                            <i className="fa fa-plus cstmstngfsicn"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="panel box cstmtblbrdr mb-0">
                                        <div >
                                            <div className="box-body row m-0">
                                                <div className="table-responsive">
                                                    <table id="datatable" className="table cstmtable2 v-middle p-0 m-0 box">
                                                        <thead>
                                                            <tr>
                                                                <th>Classes</th>
                                                                <th>Subjects</th>
                                                                <th />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="ahover text-truncate wd-235px" title="Class 6th - A">Class 6th - A </div>
                                                                </td>
                                                                <td>
                                                                    <div className="ahover text-truncate wd-235px" title="Maths">Maths </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <button>
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
                            <Select options={subjectsdatalstt} />
                        </div>
                    </div>
                    <div className="row m-0 mb-3">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Class</label>
                        </div>
                        <div className="col-sm-8">
                            <Select id="selctclsdta" options={gradssdatalstt} isMulti />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleCloseModal}>
                    Cancel
                </Button>
                <Button variant="secondary modalRedBtn" onClick= {e => { slctclsdatadrpdwn(e)}}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;