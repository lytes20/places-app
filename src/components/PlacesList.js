import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const PlacesList = props => (
  <ScrollView style={styles.listContainer}>
    {props.places.map((place, index) => (
      <ListItem
        key={index}
        placeName={place}
        onItemPress={() => alert("An item was clicked")}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default PlacesList;
