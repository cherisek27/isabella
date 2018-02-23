import React, {Component} from "react"; 
import {Link} from "react-router-dom"; 

//import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            dropdown: false
        }
        this.dropdown = this.dropdown.bind(this);
    }

    dropdown(e) {
        e.preventDefault();
        this.setState({dropdown: !this.state.dropdown});
    }

    render() { 
        {/*const style = {'width': '500px', 'height':'700px'};*/}
        return(
            <div className="main-container-header">
                <div className="container"> 
                    <div className="homepage-image"><img src="assets/images/a.jpg" id="homepageImage"/></div>
                    </div> 
                        {/* <span className="header-text">
                         the Helmut Newton series,
                         </span>  
                         <span className="header-text-2"> 
                         with Caroline Vreeland 
                        </span>
                        <span className="header-text-3">
                         Coming Soon 
                         </span>  */}
                        

        {
            this.state.dropdown ?
                <div className="dropdown-section" onClick={this.dropdown}>
                    <ul>
                        <li>
                            <Link to="editorial" className="editorial" style={{textDecoration:'none'}}>EDITORIAL</Link>
                        </li>
                        <li>
                            <Link to="film" className="film" style={{textDecoration:'none'}}>FILM</Link>
                        </li>
                        <li>
                            <Link to="advertising" className="advertising" style={{textDecoration:'none'}}>ADVERTISING</Link>
                        </li>
                        <li>
                            <Link to="women" className="women" style={{textDecoration:'none'}}>WOMEN</Link>
                        </li>
                        <li>
                            <Link to="personal" className="personal" style={{textDecoration:'none'}}>PERSONAL</Link>
                        </li>
                    </ul>
                </div> : null

        }
        
    </div> 

                  
        );
        
    }
}; 

export default Header; 