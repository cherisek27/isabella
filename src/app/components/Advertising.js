import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import Nav from './Nav';
import Slideshowsads from './Slideshowsads';

class  Advertising extends Component {
    render() {
            return (
            <div className="advertising-container">
            
               
                <Slideshowsads />
                
            </div>
        );
    }
} 

export default Advertising; 