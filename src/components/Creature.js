import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import "rpg-awesome/css/rpg-awesome.min.css";
import "./Creature.css";

class Creature extends Component {
  render() {
    const {
      armorClass,
      hitPoints,
      immunities,
      initiative,
      name,
      resistances,
      temporaryHitPoints
    } = this.props.stats;
    return (
      <Col sm={6} md={3}>
        <Card className="creature">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <CardDeck>
              <Card className="stat">
                <Card.Header>Init</Card.Header>
                <Card.Title>{initiative}</Card.Title>
              </Card>
              <Card className="stat">
                <Card.Header>AC</Card.Header>
                <Card.Title>{armorClass}</Card.Title>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card className="stat">
                <Card.Header>HP</Card.Header>
                <Card.Title>{hitPoints}</Card.Title>
              </Card>
              <Card className="stat">
                <Card.Header>Temp HP</Card.Header>
                <Card.Title>{temporaryHitPoints}</Card.Title>
              </Card>
            </CardDeck>
            <CardDeck className="long-stats">
              <Card className="stat">
                <Card.Header>Resist</Card.Header>
                <Card.Title>{resistances}</Card.Title>
              </Card>
              <Card className="stat">
                <Card.Header>Immune</Card.Header>
                <Card.Title>{immunities}</Card.Title>
              </Card>
            </CardDeck>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Creature;
