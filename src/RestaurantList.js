import React from "react";
import styled from "styled-components";
import { Collection, CollectionItem } from "react-materialize";

const EmptyResturantItems = () => (
  <COLLECTIONITEM>restaurant name will be writed</COLLECTIONITEM>
);

const SomeRestaurantItems = ({ restaurantsName }) =>
  restaurantsName.map((restau, i) => {
    return <COLLECTIONITEM key={i}>{restau}</COLLECTIONITEM>;
  });

const RestaurantItems = ({ restaurantsName }) =>
  restaurantsName.length === 0 ? (
    <EmptyResturantItems />
  ) : (
    <SomeRestaurantItems restaurantsName={restaurantsName} />
  );

const RestaurantList = ({ restaurantsName }) => {
  return (
    <Collection header="Restaurants">
      <RestaurantItems restaurantsName={restaurantsName} />
    </Collection>
  );
};

const COLLECTIONITEM = styled(CollectionItem)`
  color: #969696;
`;
export default RestaurantList;
