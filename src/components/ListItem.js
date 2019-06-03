import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback, Image } from "react-native";

const ListItem = props => (
  <TouchableNativeFeedback onPress={props.onItemPress}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} style={styles.placeImage}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    height: 40,
    width: 40,
    marginRight: 10
  }
});

export default ListItem;
