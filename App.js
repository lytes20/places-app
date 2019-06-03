import React from "react";
import { StyleSheet, View } from "react-native";
import PlacesInput from "./src/components/PlaceInput";
import PlacesList from "./src/components/PlacesList";
import placeImage from "./src/assets/images/paris.jpg";
import PlaceDetail from "./src/components/PlaceDetail";

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  /**
   * Handles adding places entered by a user
   * @return {void}
   */
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  /**
   * Handles tap on a place in the list
   * @return {void}
   */
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  /**
   * Handles closing the model
   * @return {void}
   */
  handleCloseModal = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          closeModal={this.handleCloseModal}
        />
        <PlacesInput
          placeSubmitHandler={name => this.placeAddedHandler(name)}
        />
        <PlacesList
          places={this.state.places}
          onItemSelected={key => this.placeSelectedHandler(key)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
