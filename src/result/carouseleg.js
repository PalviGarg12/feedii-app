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

const Example = ({ id }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [topiccomments, setTopicComments] = useState([]);
  const sessionscholid = sessionStorage.getItem('schoolidsession');
  const sessionpulseidresult = sessionStorage.getItem('pulseidresultsession');
  const [batchidval, setbatchidval] = useState("0");
  
  useEffect(() => {
    
    fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getTopicComments/' + sessionpulseidresult  +  "-" + batchidval, {
      method: 'GET'
    }) .then((response) => response.json())
    .then((data) => {
     
      var objj = JSON.stringify(data);
      var parse = JSON.parse(objj);
     
      setTopicComments(data);
      
      
    })

  }, []);

  

  return (
    <Carousel activeIndex={index} wrap={false} className="cstmmcrsll" interval={null} slide={false} onSelect={handleSelect} id={id}>
      <Carousel.Item>
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
      </Carousel.Item>
    </Carousel>
  );
};

export default Example;
