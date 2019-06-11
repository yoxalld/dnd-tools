import React, { Component } from "react";
import "./App.css";
import Tracker from "./components/Tracker";
import CombatTools from "./components/CombatTools";
import CombatModal from "./components/CombatModal";
import { connect } from "react-redux";
import { closeModal } from "./actions/modal";
import { setSiteId } from "./actions/stats";
import Container from "react-bootstrap/Container";
import CombatStats from "./components/CombatStats";
/* import { getRandomInt } from "./utils/utilityFunctions";
import base from "./base";
import sampleCreatures from "./utils/sampleCreatures"; */
/* 
  Possible API to use later on http://www.dnd5eapi.co/
*/
const mapState = state => {
  const {
    modal: { modalOpen, modalContent },
    stats
  } = state;
  return { modalOpen, modalContent, stats };
};
const mapDispatch = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    setSiteId: siteId => dispatch(setSiteId(siteId))
  };
};
const componentConnector = connect(
  mapState,
  mapDispatch
);

class App extends Component {
  componentDidMount() {
    this.props.setSiteId(this.props.match.params.siteId);
  }

  render() {
    return (
      <div className="App">
        <Container fluid={true} className="py-3">
          <CombatStats />
          <CombatTools />
          <Tracker />
          <CombatModal />
        </Container>
      </div>
    );
  }
}

export default componentConnector(App);
