import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import logo from '../logo.svg';
import { FaLinkedinIn } from "react-icons/fa";

import {Container, Row, Col} from 'react-bootstrap';
import React, { Component } from "react";

export default class Footer extends Component{
 render(){
   return (
    <Container fluid>
        <footer id="footer">
            <div class="container-fluid">
               
                <div class="socials">
                    <ul>
                    <li><a href="https://www.twitter.com"><AiOutlineTwitter/> </a></li>
                    <li><a href="https://www.twitter.com">< AiFillGithub/></a></li>
                    <li><a href="https://www.twitter.com"><FaLinkedinIn/></a></li>

                    </ul>
                </div>
                <div class="copyright">© 2022 Corporate. All Right Reserved.</div>
                <div class="go-top"></div>
            </div>
        </footer>
   </Container> 
   );

 }
   
}