import React, {Component} from "react"; 
import {Link} from "react-router-dom";  


class Nav extends Component {
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
        return(
            <div className="main-container-nav"> 
              <a className="il" href="/" style={{ textDecoration: 'none'}}>ISABELLA LOMBARDINI</a> 
             
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                        <a className="nav-link" onClick={this.dropdown}  style={{ textDecoration: 'none'}}>Collections <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                        <a className="nav-link" href="/publications&contact"  style={{ textDecoration: 'none'}}>Publications & Contact</a>
                            </li>
                            </ul> 
                </div>
    

        {
            this.state.dropdown ?
                <div className="dropdown-section" onClick={this.dropdown}>
                    <ul>
                        <li>
                            <Link to="editorial" className="editorial" style={{ textDecoration: 'none'}}>EDITORIAL</Link>
                        </li>
                        <li>
                            <Link to="film" className="film" style={{ textDecoration: 'none'}}>FILM</Link>
                        </li>
                        <li>
                            <Link to="advertising" className="advertising" style={{ textDecoration: 'none'}}>ADVERTISING</Link>
                        </li>
                        <li>
                            <Link to="women" className="women" style={{ textDecoration: 'none'}}>WOMEN</Link>
                        </li>
                        <li>
                            <Link to="personal" className="personal" style={{ textDecoration: 'none'}} >PERSONAL</Link>
                        </li>
                    </ul>
                </div> : null

        }
        
    </div> 
                  
        );
        
    }
}; 

export default Nav; 