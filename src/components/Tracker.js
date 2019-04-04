import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Creature from "./Creature";

class Tracker extends Component {
  render() {
    return (
      <Container fluid="true">
        <Row>
          {Object.keys(this.props.creatures).map(key => (
            <Creature key={key} stats={this.props.creatures[key]} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Tracker;
