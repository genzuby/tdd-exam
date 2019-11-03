import React from "react";

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
        <input
          type="text"
          data-test="newRestaurantName"
          onChange={e => this.setState({ inputText: e.target.value })}
          value={this.state.inputText}
        />
        <button data-test="saveNewRestaurantButton" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}
