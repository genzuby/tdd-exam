import React from "react";
import { mount } from "enzyme";
import "../../test/setup.js";

import NewRestaurantForm from "../../src/NewRestaurantForm";

describe("New restaurant Component", () => {
  describe("clicking the save button", () => {
    it("calls the onSave handler", () => {
      const saveHandler = jest.fn();

      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('[data-test="newRestaurantName"]')
        .simulate("change", { target: { value: "coffee" } });

      wrapper.find('[data-test="saveNewRestaurantButton"]').simulate("click");

      expect(saveHandler).toHaveBeenCalledWith("coffee");
    });
  });
});
