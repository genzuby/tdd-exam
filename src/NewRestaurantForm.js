import React from "react";
import { Button, TextInput, Row } from "react-materialize";

export default class NewRestaurantForm extends React.Component {
  state = { inputText: "" };

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  };

  render() {
    return (
      <Row>
        <TextInput
          s={12}
          m={8}
          l={10}
          label="Restaurant Name"
          data-test="newRestaurantName"
          onChange={e => this.setState({ inputText: e.target.value })}
          value={this.state.inputText}
        />
        <Button
          s={12}
          m={2}
          l={4}
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
          Save
        </Button>
      </Row>
    );
  }
}
