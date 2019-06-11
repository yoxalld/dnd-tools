import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const mapState = state => {
  const {
    combat: { roundCount, turnCount },
    creatures: { creatures }
  } = state;
  return { roundCount, turnCount, creatures };
};
const mapDispatch = dispatch => {
  return {};
};
const componentConnector = connect(
  mapState,
  mapDispatch
);

class CombatStats extends Component {
  render() {
    return (
      <Row>
        <Col>Round: {this.props.roundCount}</Col>
        <Col>Turn: {this.props.turnCount}</Col>
        <Col>Active Creature:</Col>
      </Row>
    );
  }
}

export default componentConnector(CombatStats);
