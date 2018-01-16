import React, {Component} from "react";
import {Link} from "react-router-dom"; 
import Nav from "./Nav";

class Publications extends Component {
    render() {
            return (
            <div className="publications-container">

                <h3 className="publications">PUBLICATIONS</h3>
    
                <ul className="publications-grid">
                    <li>VOGUE PORTGUAL</li> 
                    <li>ELLE MAGAZINE</li> 
                    <li>ANGELO MAGAZINE</li> 
                    <li>TATLER INDONESIA</li>  
                    <li>MADAME FIGARO CHINE</li> 
                    <li>FASHION CANADA</li> 
                
                </ul>

                <p className="border"></p>

                <h4 className="contact">CONTACT</h4>    
                <h4 className="email"><a href="mailto:contact@isabellalombardini.com">contact@isabellalombardini.com</a></h4>
                
            </div>
        );
    }
} 

export default Publications; 