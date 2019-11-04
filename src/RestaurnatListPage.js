/* eslint-disable comma-dangle */
import React from "react";
import { Button, Row, Modal } from "react-materialize";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

class RestaurnatListPage extends React.Component {
  modalRef = React.createRef();
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

  handldAddNewRestaurnat = () => {
    this.setState({
      showNewRestaurantForm: true
    });
  };
  renderNewRestaurantForm = () => {
    if (this.state.showNewRestaurantForm) {
      return <NewRestaurantForm onSave={this.handleAddRestaurant} />;
    }
  };
  render() {
    const { restaurantsName } = this.state;

    return (
      <div>
        {/* <Modal
          header="New Restaurant"
          trigger={
            <Button data-test="addRestaurantButton">Add Reataurant</Button>
          }
        ></Modal> */}
        <Row>
          <Button
            data-test="addRestaurantButton"
            onClick={this.handldAddNewRestaurnat}
          >
            Add Reataurant
          </Button>
        </Row>
        <Row>{this.renderNewRestaurantForm()}</Row>
        <Row>
          <RestaurantList restaurantsName={restaurantsName} />
        </Row>
      </div>
    );
  }
}

export default RestaurnatListPage;
