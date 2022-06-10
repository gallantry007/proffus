import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";
import sea from "../images/sea.png";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link smooth to="#home">
              <img src={sea} Height="120"width="120px" alt="LA 16" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link smooth to="#home">Home</Link>
            </li>
            <li>
              <Link smooth to="#Category">Category</Link>
            </li>
            <li>
              <Link smooth to="#FAQs">FAQs</Link>
            </li>
            <li>
              <Link smooth to="#MyCart">MyCart</Link>
            </li>
      
            <li>
              <Link smooth to="#login">Login</Link>
            </li>
           
          </ul>
        </div>
      </nav>
    );
  }
}