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
                <a className="il" href="/">ISABELLA LOMBARDINI</a>
             
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                        <a className="nav-link" onClick={this.dropdown}>Collections <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                        <a className="nav-link" href="/publications&contact">Publications & Contact</a>
                            </li>
                            </ul> 
                </div>
    

        {
            this.state.dropdown ?
                <div className="dropdown-section" onClick={this.dropdown}>
                    <ul>
                        <li>
                            <Link to="editorial" className="editorial">EDITORIAL</Link>
                        </li>
                        <li>
                            <Link to="film" className="film">FILM</Link>
                        </li>
                        <li>
                            <Link to="advertising" className="advertising">ADVERTISING</Link>
                        </li>
                        <li>
                            <Link to="women" className="women">WOMEN</Link>
                        </li>
                        <li>
                            <Link to="personal" className="personal">PERSONAL</Link>
                        </li>
                    </ul>
                </div> : null

        }
        
    </div> 
                  
        );
        
    }
}; 

export default Nav; 