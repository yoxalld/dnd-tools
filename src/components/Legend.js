import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "rpg-awesome/css/rpg-awesome.min.css";

class Legend extends React.Component {
  render() {
    return (
      <Container fluid="true" className="legend-wrap">
        <Row>
          <Col sm={6}>
            <p>
              <i className="ra ra-2x ra-acid" /> Acid
            </p>
            <p>
              <i className="ra ra-2x ra-frost-emblem" /> Cold
            </p>
            <p>
              <i className="ra ra-2x ra-fire" /> Fire
            </p>
            <p>
              <i className="ra ra-2x ra-broken-bone" /> Force
            </p>
            <p>
              <i className="ra ra-2x ra-lightning-bolt" /> Lightning
            </p>
            <p>
              <i className="ra ra-2x ra-desert-skull" /> Necrotic
            </p>
            <p>
              <i className="ra ra-2x ra-bubbling-potion" /> Poison
            </p>
            <p>
              <i className="ra ra-2x ra-aware" /> Psychic
            </p>
            <p>
              <i className="ra ra-2x ra-sunbeams" /> Radiant
            </p>
          </Col>
          <Col sm={6}>
            <p>
              <i className="ra ra-2x ra-lightning-storm" /> Thunder
            </p>
            <p>
              <i className="ra ra-2x ra-crystal-wand" /> Nonmagical
            </p>
            <p>
              <i className="ra ra-2x ra-arcane-mask" /> Magic Weapons
            </p>
            <p>
              <i className="ra ra-2x ra-large-hammer" /> Bludgeoning
            </p>
            <p>
              <i className="ra ra-2x ra-sword" /> Slashing
            </p>
            <p>
              <i className="ra ra-2x ra-arrow-flights" /> Piercing
            </p>
            <p>
              <i className="ra ra-2x ra-barrier" /> Spells
            </p>
            <p>
              <i className="ra ra-2x ra-bullets" /> Silver Bybass
            </p>
            <p>
              <i className="ra ra-2x ra-heavy-shield" /> Adamantine Bypass
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Legend;
