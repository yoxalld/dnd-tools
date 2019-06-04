import React, { Component } from "react";
import { connect } from "react-redux";
import { startCombat, endCombat, advanceTurn } from "../actions/settings";
import { openModal, closeModal } from "../actions/modal";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Badge from "react-bootstrap/Badge";
//import CombatModal from "./CombatModal";

// Maps state to props for redux
const mapState = state => {
  const {
    combat: { combatStarted },
    modal: { modalOpen, modalContent }
  } = state;
  return { combatStarted, modalOpen, modalContent };
};
// Maps dispatch action creators to props to more cleanly be able to use them
const mapDispatch = dispatch => {
  return {
    startCombat: () => dispatch(startCombat()),
    endCombat: () => dispatch(endCombat()),
    advanceTurn: () => dispatch(advanceTurn()),
    openModal: content => dispatch(openModal(content)),
    closeModal: () => dispatch(closeModal())
  };
};
// this connects the component to the redux store, notice the default export at the bottom of the page
const componentConnector = connect(
  mapState,
  mapDispatch
);

class CombatTools extends Component {
  handleModal = e => {
    this.props.openModal(e.target.attributes.modalcontent.value);
  };
  render() {
    return (
      <Row className="py-3">
        <Col>
          <ButtonToolbar className="combat-tools">
            {/* <Button
              variant="outline-primary"
              className="mx-1"
              onClick={this.props.loadSampleCreatures}
            >
              Load Sample Creatures
            </Button> */}

            <Button
              variant="outline-primary"
              className="mx-1"
              modalcontent="add-creature"
              onClick={this.handleModal}
            >
              Add New Creature
            </Button>
            {!this.props.combatStarted && (
              <Button
                variant="outline-primary"
                className="mx-1"
                event="Combat Start"
                onClick={this.props.startCombat}
              >
                Start Combat
              </Button>
            )}
            {this.props.combatStarted && (
              <>
                <Button
                  variant="outline-primary"
                  className="mx-1"
                  onClick={this.props.advanceTurn}
                >
                  Advance Turn
                </Button>
                <Button
                  variant="outline-primary"
                  className="mx-1"
                  event="Combat End"
                  onClick={this.props.endCombat}
                >
                  End Combat
                </Button>
              </>
            )}
          </ButtonToolbar>
        </Col>
      </Row>
    );
  }
}

export default componentConnector(CombatTools);
