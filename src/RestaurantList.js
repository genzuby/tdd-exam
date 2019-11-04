import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const RestaurantList = ({ restaurantsName }) => {
  return (
    <Collection>
      {restaurantsName.map((restau, i) => {
        return <CollectionItem key={i}>{restau}</CollectionItem>;
      })}
    </Collection>
  );
};

export default RestaurantList;
