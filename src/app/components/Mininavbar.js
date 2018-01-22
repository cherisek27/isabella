import React, {Component} from "react"; 
import {Link} from "react-router-dom";  


class Mininavbar extends Component {
    constructor(props) {
        super(props);
    } 

    render() { 
        return(
            <div className="navtest"> 
                <Link to="/" className="il" style={{ textDecoration: 'none'}}>ISABELLA LOMBARDINI</Link> 
            </div> 
                  
        );
        
    }
}; 

export default Mininavbar; 