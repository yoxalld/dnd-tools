import React from "react";
import { connect } from "react-redux";
import { addCreature } from "../actions/creature";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const mapState = state => {
  const {
    modal: { modalOpen, modalContent }
  } = state;
  return { modalOpen, modalContent };
};
const mapDispatch = dispatch => {
  return {
    addCreature: creature => dispatch(addCreature(creature))
  };
};
const componentConnector = connect(
  mapState,
  mapDispatch
);

class AddCreatureForm extends React.Component {
  nameRef = React.createRef();
  initiativeRef = React.createRef();
  armorClassRef = React.createRef();
  hitPointsRef = React.createRef();
  temporaryHitPointsRef = React.createRef();
  resistancesRef = React.createRef();
  immunitiesRef = React.createRef();

  createCreature = event => {
    event.preventDefault();
    const creature = {
      name: this.nameRef.current.value,
      initiative: parseInt(this.initiativeRef.current.value),
      armorClass: parseInt(this.armorClassRef.current.value),
      hitPoints: parseInt(this.hitPointsRef.current.value),
      temporaryHitPoints: parseInt(this.temporaryHitPointsRef.current.value),
      resistances: this.resistancesRef.current.value,
      immunities: this.immunitiesRef.current.value
    };
    this.props.addCreature(creature);
    event.currentTarget.reset();
  };

  render() {
    return (
      <Form className="create-creature" onSubmit={this.createCreature}>
        <Form.Row>
          <Form.Group as={Col} xs={12}>
            <Form.Label />
            <Form.Control
              name="name"
              ref={this.nameRef}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={6}>
            <Form.Label />
            <Form.Control
              name="initiative"
              ref={this.initiativeRef}
              type="text"
              placeholder="Initiative"
            />
          </Form.Group>
          <Form.Group as={Col} sm={6}>
            <Form.Label />
            <Form.Control
              name="armor-class"
              ref={this.armorClassRef}
              type="text"
              placeholder="Armor Class"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={6}>
            <Form.Label />
            <Form.Control
              name="hit-points"
              ref={this.hitPointsRef}
              type="text"
              placeholder="Hit Points"
            />
          </Form.Group>
          <Form.Group as={Col} sm={6}>
            <Form.Label />
            <Form.Control
              name="temporary-hit-points"
              ref={this.temporaryHitPointsRef}
              type="text"
              placeholder="Temporary Hit Points"
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label />
          <Form.Control
            name="resistances"
            ref={this.resistancesRef}
            type="text"
            placeholder="Resistances"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label />
          <Form.Control
            name="immunities"
            ref={this.immunitiesRef}
            type="text"
            placeholder="Immunities"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Creature
        </Button>
      </Form>
    );
  }
}

export default componentConnector(AddCreatureForm);
