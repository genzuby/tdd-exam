import React from "react";

const RestaurantList = ({ restaurantsName }) => {
  return (
    <ul>
      {restaurantsName.map((restau, i) => {
        return <li key={i}>{restau}</li>;
      })}
    </ul>
  );
};

export default RestaurantList;
