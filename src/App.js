import React, { Component } from "react";
import "./App.css";
import Tracker from "./components/Tracker";
import CombatTools from "./components/CombatTools";
import CombatModal from "./components/CombatModal";
import { connect } from "react-redux";
import { closeModal } from "./actions/modal";
import { setSiteId } from "./actions/stats";
import Container from "react-bootstrap/Container";
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
    /* This is for firebase
      this.ref = base.syncState(
      `${this.props.match.params.siteId}/creatures`,
      {
        context: this,
        state: "creatures"
      }
    ); */
  }
  /*
  componentWillUnmount() {
    console.log("unmount");
    base.removeBinding(this.ref);
  }

  loadSampleCreatures = () => {
    const creatures = { ...this.state.creatures };
    Object.keys(sampleCreatures).forEach(key => {
      const uniqueKey = `creature${getRandomInt(99999)}${Date.now()}`;
      // We need to set current creature to LET so we can modify it before we add it to our creautres object.
      let creature = sampleCreatures[key];
      creature.uniqueKey = uniqueKey;
      // Add updated creature object to creatures
      creatures[uniqueKey] = creature;
      //creatures[`creature${key}${Date.now()}`] = sampleCreatures[key];
    });
    this.setState({ creatures });
  }; */

  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <CombatTools />
          <Tracker />
          <CombatModal />
        </Container>
      </div>
    );
  }
}

export default componentConnector(App);
