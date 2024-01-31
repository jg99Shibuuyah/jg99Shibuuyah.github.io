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
      <Row> 
        <Col>
        <a href="https://www.twitter.com"><AiOutlineTwitter/> </a> 
        <a href="https://github.com/jg99Shibuuyah">< AiFillGithub/></a>
        <a href="https://www.twitter.com"><FaLinkedinIn/></a>     </Col>
        <Col className="footer-copyright">      
        <h4 class="copyright">© 2022 Corporate. All Right Reserved.</h4>    
        </Col>
                <div class="go-top"></div>
            
        
      </Row>
       
   </Container> 
   );

 }
   
}