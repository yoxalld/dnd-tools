import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import "rpg-awesome/css/rpg-awesome.min.css";
import "./Creature.css";

class Creature extends Component {
  state = {
    status: "",
    bkg: ""
  };
  render() {
    const {
      armorClass,
      hitPoints,
      initiative,
      name,
      temporaryHitPoints
      //immunities,
      //resistances,
    } = this.props.stats;
    return (
      <Col sm={6} md={3}>
        <Card className="creature" /* bg={this.state.bkg} */>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <CardDeck>
              <Card className="stat">
                <Card.Header className="text-center">AC</Card.Header>
                <Card.Title>{armorClass}</Card.Title>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card className="stat">
                <Card.Header className="text-center">Init</Card.Header>
                <Card.Title>{initiative}</Card.Title>
              </Card>
              <Card className="stat">
                <Card.Header className="text-center">HP</Card.Header>
                <Card.Title>{hitPoints}</Card.Title>
              </Card>
            </CardDeck>
            {temporaryHitPoints > 0 && ( // this conditionally displays the Temp HP if there is any (https://reactjs.org/docs/conditional-rendering.html)
              <CardDeck>
                <Card className="stat">
                  <Card.Header className="text-center">Temp HP</Card.Header>
                  <Card.Title>{temporaryHitPoints}</Card.Title>
                </Card>
              </CardDeck>
            )}
            {/* <CardDeck className="long-stats">
              <Card className="stat">
                <Card.Header className="text-center">Resist</Card.Header>
                <Card.Title>{resistances}</Card.Title>
              </Card>
              <Card className="stat">
                <Card.Header className="text-center">Immune</Card.Header>
                <Card.Title>{immunities}</Card.Title>
              </Card>
            </CardDeck> */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Creature;
