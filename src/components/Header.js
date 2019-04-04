import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>D&amp;D Combat Tracker</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
