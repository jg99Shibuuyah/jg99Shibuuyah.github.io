import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import {Container, Row, Col} from 'react-bootstrap';
import React, { Component } from "react";
import './style.css';
export default class Footer extends Component{
 render(){
   return (
    <Container fluid className="footer">
      <Row xs="auto"> 
       <Col className="footer-copyright">      
        <p  class="copyright">© 2022 Corporate. All Right Reserved.</p>    
        
                <div class="go-top"></div>
                </Col>
                <Col>
        <a href="https://www.twitter.com"><AiOutlineTwitter/> </a>  </Col>
        <Col><a href="https://github.com/jg99Shibuuyah">< AiFillGithub/></a> </Col>
        <Col><a href="https://www.twitter.com"><FaLinkedinIn/></a> </Col>
       
        
        
      </Row>
       
   </Container> 
   );

 }
   
}