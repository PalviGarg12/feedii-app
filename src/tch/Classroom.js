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


export const ClassroomtchPagee = () => {
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

        const [value, setValue] =  useState([]);

        const subjectsdatalstt = [
            { value: 1, label: 'Maths' },
            { value: 2, label: 'English' },
            { value: 3, label: 'Hindi' }
        ];

        const [selectedsbjctValue, setselectedsbjctValue] = useState();

        const handleChange1 = e => {
            setselectedsbjctValue(e.value);
          }

        const gradssdatalstt = [
            { value: 1, label: 'Class 1st - A' },
            { value: 2, label: 'Class 1st - B' },
            { value: 3, label: 'Class 1st - C' }
        ];

        const [selectedValue, setSelectedValue] = useState([]);

        const handleChangee = e => {
            setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
        }

        const slctclsdatadrpdwn = () => {    
            var opnvl = $('#selctclsdta .css-12jo7m5').text();
            alert(opnvl);
        }

    return <div>
        <SecondHeaderTchrrrdashboard />
        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            
            <div className="padding">

                <div>
                    <div className="clsrmnoclsnwd">
                        <div>
                            <img src="https://res.cloudinary.com/infoi/image/upload/v1670915604/feedii/empty_class_pg_y3ekqk.svg" width="150" alt="Image" />
                            <p className="clsrmnoclsnwdp">Create your class by clicking on the below button.</p>
                            <button className="clsrmnoclsnwdbtn" type="button" onClick={() => { handleShowModal();}}>
                                <i className="fa fa-plus"></i>
                                Add Class
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row hide">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        <div className="mb-30px">
                            <div className="col-sm-12">
                            {uniqueTags.map((classesuni)=>(
                                <div className="col-sm-12 mb-5">
                                    <div className="clsrmdv1">
                                        <h1 className="clshdngh1">Class {classesuni} </h1>
                                    </div>
                                    <div className="clsrmdv2 col-sm-12 row">                                        
                                
                                        {classListtch.map((classes)=>{

                                            if(classesuni == classes.Grade) {

                                            return (<div className="col-sm-4 mb-4">
                                                <Link to='/tch/class' onClick={()=>{sndssntchbachid(classes.batchId);}} className="tlbxdvvda">
                                                    <div className="clsrmdv2-1">
                                                        <div className="clsrmdv2-2-dv1">
                                                            <div className="clsrmdv2-2-dv1-a1">
                                                                <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                                <span> Section {classes.Section}</span>
                                                            </div>
                                                            <div className="clsrmdv2-2-dv1-a2">
                                                            <Dropdown>
                                                                <Dropdown.Toggle className="clsrmdrpdwn crsr-dsble">
                                                                    <i className="fa fa-ellipsis-v"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                    <div className="tbl-dropdown-item dropdown-item crsr-dsbl">Edit Class</div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>)
                                            }                                 
                                        })}                                     
                                    </div>
                                </div>                                
                                ))}
                            </div>
                        </div>

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
                            <Select options={subjectsdatalstt} value={subjectsdatalstt.find(obj => obj.value === selectedsbjctValue)} onChange={handleChange1} />
                        </div>
                        {/* {selectedsbjctValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                            <div><b>Selected Value: </b> {selectedsbjctValue}</div>
                        </div>} */}
                    </div>
                    <div className="row m-0 mb-3">
                        <div className="col-sm-4">
                            <label className="mdllblcsds">Class</label>
                        </div>
                        <div className="col-sm-8">
                            <Select id="selctclsdta" options={gradssdatalstt} value={gradssdatalstt.filter(obj => selectedValue.includes(obj.value))} onChange={handleChangee} isMulti isClearable />
                        </div>
                        {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                            <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
                        </div>} */}
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