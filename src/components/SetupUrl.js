import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getFunName } from "../utils/utilityFunctions";
import Container from "react-bootstrap/Container";
class SetupUrl extends React.Component {
  urlRef = React.createRef();
  handleUrlSetup = event => {
    event.preventDefault();
    const trackerName = this.urlRef.current.value;
    this.props.history.push(`combat-tracker/${trackerName}`);
  };
  render() {
    return (
      <Container>
        <h2>Choose a unique Url to use for you Tracker</h2>
        <Form className="url-setup" onSubmit={this.handleUrlSetup}>
          <Form.Group>
            <Form.Control
              type="text"
              required
              placeholder="Tracker Url"
              ref={this.urlRef}
              defaultValue={getFunName()}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Setup Url
          </Button>
        </Form>
      </Container>
    );
  }
}
export default SetupUrl;
