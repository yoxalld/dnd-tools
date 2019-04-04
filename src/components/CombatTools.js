import React, { Component } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import CombatModal from "./CombatModal";

class CombatTools extends Component {
  render() {
    return (
      <ButtonToolbar className="combat-tools justify-content-center p-5">
        <Button
          variant="outline-primary"
          className="mx-1"
          modalvariant="add-creature"
          onClick={this.props.handleModal}
        >
          Add New Creature
        </Button>
        <Button
          variant="outline-primary"
          className="mx-1"
          modalvariant="load-creature"
          onClick={this.props.handleModal}
        >
          Load Creature
        </Button>
        <Button
          variant="outline-primary"
          className="mx-1"
          modalvariant="legend"
          onClick={this.props.handleModal}
        >
          Legend
        </Button>
        <Button variant="outline-primary" className="mx-1">
          Advance Turn
        </Button>
        <Button
          variant="outline-primary"
          className="mx-1"
          onClick={this.props.loadSampleCreatures}
        >
          Load Sample Creatures
        </Button>
        <CombatModal
          modalOpen={this.props.modalOpen}
          modalContent={this.props.modalContent}
          handleModal={this.props.handleModal}
          addCreature={this.props.addCreature}
          conditions={this.props.conditions}
          damageTypes={this.props.damageTypes}
        />
      </ButtonToolbar>
    );
  }
}

export default CombatTools;
