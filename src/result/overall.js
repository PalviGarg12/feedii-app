import React from "react";
import $ from 'jquery';
import '../Content/Content/result.css';
import { Headerdashboard } from '../headeruserdashboard';
import ArcProgress from "react-arc-progress";

export const ResultOverallPage = () => {

    const progress = "0.5";
    const text = "50";
    const arcFillColor = { gradient: ["#54d4f2"] };
    

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding">
                <div className="row tab-content mb-3" id="srvydepdv">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active cstmpdp m-0" id="tab1">
                        <div className="col-sm-12 col-md-12">
                            <div className="col-sm-6">
                                <div className="row m-0">
                                    <div>
                                        <div className="rsl-dv1">
                                            50
                                            <span className="rsl-dv1spn">Score</span>
                                        </div>
                                        <ArcProgress className="rsl-dv2" progress={progress} thickness={20} fillColor={arcFillColor} style={{ position: "relative", height: 150, width: 150 }} />
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <h3>25% Higher</h3>
                                                <div>than the Surveys Average Score</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6"></div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
}
