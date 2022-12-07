import React, { useState,useRef } from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


export const ClassroomPage = () => {

    const dataFetchedRefclass = useRef(false);
    const [classList, setclasseslist] = useState([]);


    React.useEffect(
        ()=> {
       

           
            fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getclassesdata/' + 3, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefclass.current) return;
            dataFetchedRefclass.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setclasseslist(data)
            
          })
        })


    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding mbvwpd">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        <div className="mb-30px">
                            <div className="col-sm-12">
                                <div className="col-sm-12">
                                    <div className="clsrmdv1">
                                        <h1 className="kmcs_h1 bluclr">Classes</h1>
                                    </div>
                                    <div className="clsrmdv2 col-sm-12 row">
                                        {classList.map((classes)=>(
                                            <div className="col-sm-4 mb-4">
                                            <Link to={`/sch/class?${classes.batchId}`} className="tlbxdvvda">
                                                <div className="clsrmdv2-1">
                                                    <img src={classes.URL} alt="Class Image" className="clsrmdv2-1-bg-img1" />
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">
                                                            <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                            <span>{classes.gradename}</span>
                                                            <div className="clsrmdv2-2-dv3-dv">{classes.sectionname}</div>
                                                        </div>
                                                        <div className="clsrmdv2-2-dv1-a2">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="clsrmdrpdwn">
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
                                        </div>
                                        ))}
                                        
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
}

// export default Details;