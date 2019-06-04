import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCreatures } from "../actions/creature";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Creature from "./Creature";

const mapState = state => {
  const { creatures, stats } = state;
  return { creatures, stats };
};
const mapDispatch = dispatch => {
  return {
    loadCreatures: creatures => dispatch(loadCreatures(creatures))
  };
};
const componentConnector = connect(
  mapState,
  mapDispatch
);

class Tracker extends Component {
  componentDidMount() {
    console.log("Tracker Mounted");
    console.log(this.props.stats);
    const localCreatures = JSON.parse(
      localStorage.getItem(this.props.stats.siteId)
    );
    console.log("Local Creatures", localCreatures);
    if (localCreatures) {
      this.loadCreatures(localCreatures);
    }
  }
  componentDidUpdate() {
    console.log("Tracker Updated");
    /* localStorage.setItem(
      this.props.stats.siteId,
      JSON.stringify(this.props.creatures.creatures)
    ); */
  }
  render() {
    if (!this.props.creatures.creatures) return null;
    return (
      <Container fluid="true">
        <Row>
          {this.props.creatures.creatures.map(key => (
            <Creature key={key.key} stats={key} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default componentConnector(Tracker);
