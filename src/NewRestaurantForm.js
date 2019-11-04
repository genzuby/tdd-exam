import React from "react";
import { Button, TextInput } from "react-materialize";

export default class NewRestaurantForm extends React.Component {
  state = { inputText: "" };

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  };

  render() {
    return (
      <div>
        <TextInput
          label="First Name"
          data-test="newRestaurantName"
          onChange={e => this.setState({ inputText: e.target.value })}
          value={this.state.inputText}
        />
        <Button data-test="saveNewRestaurantButton" onClick={this.handleSave}>
          Save
        </Button>
      </div>
    );
  }
}
