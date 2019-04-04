import React, { Component } from "react";
import "./App.css";
import Tracker from "./components/Tracker";
import Header from "./components/Header";
import CombatTools from "./components/CombatTools";
import sampleCreatures from "./utils/sampleCreatures";

/* 
  Possible API to use later on http://www.dnd5eapi.co/
*/

class App extends Component {
  state = {
    modalOpen: false,
    modalContent: "",
    creatures: {}
  };
  conditions = [
    {
      name: "Blinded",
      icon: ""
    },
    {
      name: "Charmed",
      icon: ""
    },
    {
      name: "Deafened",
      icon: ""
    },
    {
      name: "Frightened",
      icon: ""
    },
    {
      name: "Grappled",
      icon: ""
    },
    {
      name: "Incapacitated",
      icon: ""
    },
    {
      name: "Invisible",
      icon: ""
    },
    {
      name: "Paralyzed",
      icon: ""
    },
    {
      name: "Petrified",
      icon: ""
    },
    {
      name: "Poisoned",
      icon: ""
    },
    {
      name: "Prone",
      icon: ""
    },
    {
      name: "Restrained",
      icon: ""
    },
    {
      name: "Stunned",
      icon: ""
    },
    {
      name: "Unconscious",
      icon: ""
    }
  ];
  damageTypes = [
    {
      name: "Acid",
      icon: ""
    },
    {
      name: "Bludgeoning",
      icon: ""
    },
    {
      name: "Cold",
      icon: ""
    },
    {
      name: "Fire",
      icon: ""
    },
    {
      name: "Force",
      icon: ""
    },
    {
      name: "Lightning",
      icon: ""
    },
    {
      name: "Necrotic",
      icon: ""
    },
    {
      name: "Piercing",
      icon: ""
    },
    {
      name: "Poison",
      icon: ""
    },
    {
      name: "Psychic",
      icon: ""
    },
    {
      name: "Radiant",
      icon: ""
    },
    {
      name: "Slashing",
      icon: ""
    },
    {
      name: "Thunder",
      icon: ""
    }
  ];
  handleModal = event => {
    if (
      typeof event !== "undefined" &&
      event.target.attributes.modalvariant.value.length
    ) {
      this.setState({
        modalOpen: true,
        modalContent: event.target.attributes.modalvariant.value
      });
    } else {
      // If there is no event then it's a close button click for some reason, something to do with Bootstrap
      this.setState({ modalOpen: false });
    }
  };

  addCreature = creature => {
    const creatures = { ...this.state.creatures };
    creatures[`creature${Date.now()}`] = creature;
    this.setState({
      creatures
    });
  };

  loadSampleCreatures = () => {
    this.setState({ creatures: sampleCreatures });
  };

  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <Header />
        <CombatTools
          loadSampleCreatures={this.loadSampleCreatures}
          handleModal={this.handleModal}
          modalOpen={this.state.modalOpen}
          modalContent={this.state.modalContent}
          addCreature={this.addCreature}
          conditions={this.conditions}
          damageTypes={this.damageTypes}
        />
        <Tracker creatures={this.state.creatures} />
      </div> // App
    );
  }
}

export default App;
