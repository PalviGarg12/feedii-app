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

const ResultCarousel = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const [topiccomments, setTopicComments] = useState([]);
  const sessionscholid = sessionStorage.getItem('schoolidsession');
  const sessionpulseidresult = sessionStorage.getItem('pulseidresultsession');
  
  useEffect(() => {

    //alert(sessionpulseidresult  +  "-" + 0);
    fetch('https://feediiapi.azurewebsites.net/api/Admin/getTopicComments/' + sessionpulseidresult  +  "-" + 0, {
      method: 'GET'
    }) .then((response) => response.json())
    .then((data) => {
     
      var objj = JSON.stringify(data);
      var parse = JSON.parse(objj);
     
      setTopicComments(data);
      
    })

  }, []);

  

  

  return (
    <div>
      {(() => {
        if((topiccomments.filter(itemd => itemd.surveyquestionId === id && itemd.comment !== "").length - 1) === 0) {
          return(
            <h5 className="rsltmdltbdv2dv5-2d3 rsltmdltbdv2dv5-2d3csh55"> Comment </h5>
          );
        }
        else if((topiccomments.filter(itemd => itemd.surveyquestionId === id && itemd.comment !== "").length - 1) < 0) {
          return(
            <h5 className="rsltmdltbdv2dv5-2d3 rsltmdltbdv2dv5-2d3csh55"> Comment </h5>
          );
        }
        else {
          return(
            <h5 className="rsltmdltbdv2dv5-2d3 rsltmdltbdv2dv5-2d3csh55"> Comment's • {activeIndex} of {topiccomments.filter(itemd => itemd.surveyquestionId === id && itemd.comment !== "").length - 1} </h5>
          );
        }
      })()}
    
    <Carousel activeIndex={activeIndex} wrap={false} className="cstmmcrsll" interval={null} slide={false} onSelect={handleSelect} id={`carousel${id}`}>
      {topiccomments.map((tpcm)=>{
        if(tpcm.surveyquestionId == id)
        {
          if(tpcm.comment == "") {}
          else {
            return(
              <Carousel.Item>
                <p className="rsltmdltbdv2dv5-2d3p mt-10px">{tpcm.comment}</p>
              </Carousel.Item>
            );
          }
        }
      })}
      {/* <Carousel.Item>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Item> */}
    </Carousel>
    </div>
  );
};

export default ResultCarousel;
