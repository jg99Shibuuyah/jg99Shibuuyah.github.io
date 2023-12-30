 import {Link, useMatchm, useResolvedPath } from "react-router-dom";


export default function Navbar(){
    return <nav classname="nav">
        <a href="/" className=""> Home Page </a>
    <ul>
        <li> 
            <a href="/about me"> About me </a>
        </li>
        <li>    
            <a href="/projects"> Projects </a>
        </li>

    </ul>

    </nav>
}