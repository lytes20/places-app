import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const PlaceDetail = props => (
  <Modal
    visible={props.selectedPlace !== null}
    animationType="slide"
    onRequestClose={props.closeModal}
  >
    <View style={styles.modalContainer}>
      <Image
        source={props.selectedPlace ? props.selectedPlace.image : null}
        style={styles.placeImage}
      />
      <Text style={styles.placeName}>{props.selectedPlace ? props.selectedPlace.name : null}</Text>
      <View>
        {/* <Button title="Delete" color="red" onPress={}/> */}
        <Button title="Close" onPress={props.closeModal}/>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  }
});
export default PlaceDetail;
