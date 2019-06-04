import React, { Component } from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modal";
import Modal from "react-bootstrap/Modal";
import AddCreatureForm from "./AddCreatureForm";

const mapState = state => {
  const {
    modal: { modalOpen, modalContent }
  } = state;
  return { modalOpen, modalContent };
};
const mapDispatch = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};
const componentConnector = connect(
  mapState,
  mapDispatch
);

class CombatModal extends Component {
  handleModalContent = () => {
    switch (this.props.modalContent) {
      case "add-creature":
        return <AddCreatureForm />;
      case "load-creature":
        return "";
      default:
        return null;
    }
  };
  handleModalTitle = () => {
    switch (this.props.modalContent) {
      case "add-creature":
        return "Add Creature";
      case "load-creature":
        return "Load Creature";
      case "legend":
        return "Legend";
      default:
        return null;
    }
  };
  render() {
    return (
      <Modal
        show={this.props.modalOpen}
        onHide={this.props.closeModal}
        className="combat-modal"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.handleModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.handleModalContent()}</Modal.Body>
      </Modal>
    );
  }
}

export default componentConnector(CombatModal);
