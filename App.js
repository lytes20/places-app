import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };
  placeSubmitHandler = () => {
    const placeNameEntered = this.state.placeName;
    if (placeNameEntered.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };
  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };
  render() {
    const placesOutput = this.state.places.map((place, index) => <Text key={index}>{place}</Text>);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: 300,
              height: 40
            }}
            placeholder="An awesome place"
            onChangeText={this.placeNameChangeHandler}
            value={this.state.placeName}
          />
          <Button
            onPress={this.placeSubmitHandler}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>{placesOutput}</View>
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
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

