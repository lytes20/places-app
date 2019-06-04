import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

// own imports
import PlacesInput from "./src/components/PlaceInput";
import PlacesList from "./src/components/PlacesList";
import PlaceDetail from "./src/components/PlaceDetail";
import {
  addPlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/placesAction";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          closeModal={() => this.props.deselectPlace()}
        />
        <PlacesInput placeSubmitHandler={name => this.props.addPlace(name)} />
        <PlacesList
          places={this.props.places}
          onItemSelected={key => this.props.selectPlace(key)}
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
const mapStateToProps = state => {
  return {
    places: state.placesReducer.places,
    selectedPlace: state.placesReducer.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlace: name => dispatch(addPlace(name)),
    selectPlace: key => dispatch(selectPlace(key)),
    deselectPlace: () => dispatch(deselectPlace())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
