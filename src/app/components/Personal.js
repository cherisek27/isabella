import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import Nav from './Nav';
import Slideshowpersonal from './Slideshowpersonal';

class Personal extends Component {
    render() {
            return (
            <div className="personal-container">
           
                <Slideshowpersonal />   

                
            </div>
        );
    }
} 

export default Personal; 