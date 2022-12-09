import React, { useState, useRef, useEffect }  from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { HeaderTchrrrdashboard } from '../headertchrdashboard';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";


export const ClassroomtchPagee = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

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


    return <div>
        <HeaderTchrrrdashboard />
        {loader}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding">
                <div className="row">
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
    </div>
}

// export default Details;