import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import AddCreatureForm from "./AddCreatureForm";
import Legend from "./Legend";

class CombatModal extends Component {
  handleModalContent = () => {
    switch (this.props.modalContent) {
      case "add-creature":
        return (
          <AddCreatureForm
            addCreature={this.props.addCreature}
            conditions={this.props.conditions}
            damageTypes={this.props.damageTypes}
          />
        );
      case "load-creature":
        return "";
      case "legend":
        return <Legend />;
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
        onHide={this.props.handleModal}
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

export default CombatModal;
