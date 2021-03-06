import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const PlacesList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.places}
    renderItem={data => (
      <ListItem
        placeName={data.item.name}
        placeImage={data.item.image}
        onItemPress={() => props.onItemSelected(data.item.key)}
      />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default PlacesList;
