/* eslint-disable comma-dangle */
import React from "react";
import { Button } from "react-materialize";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

class RestaurnatListPage extends React.Component {
  state = {
    restaurantsName: [],
    showNewRestaurantForm: false
  };
  handleAddRestaurant = newRestaurantName => {
    this.setState({
      showNewRestaurantForm: false,
      restaurantsName: [newRestaurantName, ...this.state.restaurantsName]
    });
  };
  handleShowRestaurantForm = () => {
    this.setState({ showNewRestaurantForm: true });
  };

  render() {
    const { restaurantsName, showNewRestaurantForm } = this.state;

    return (
      <div>
        <Button
          data-test="addRestaurantButton"
          onClick={this.handleShowRestaurantForm}
        >
          Add Reataurant
        </Button>
        {showNewRestaurantForm ? (
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        ) : null}
        <RestaurantList restaurantsName={restaurantsName} />
      </div>
    );
  }
}

export default RestaurnatListPage;
