import React from "react";
import { StyleSheet, View } from "react-native";
import PlacesInput from "./src/components/PlaceInput";
import PlacesList from "./src/components/PlacesList";

export default class App extends React.Component {
  state = {
    places: []
  };

  /**
   * Handles adding places entered by a user
   * @return {void}
   */
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput
          placeSubmitHandler={name => this.placeAddedHandler(name)}
        />
        <PlacesList places={this.state.places} />
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
