import React from "react";
import { Col, Row } from "react-materialize";
import RestaurnatListPage from "./RestaurnatListPage";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 12">
            <RestaurnatListPage></RestaurnatListPage>
          </Col>
        </Row>
      </div>
    );
  }
}
