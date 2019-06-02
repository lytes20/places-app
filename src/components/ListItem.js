import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

const ListItem = props => (
  <TouchableNativeFeedback onPress={props.onItemPress}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5
  }
});

export default ListItem;
