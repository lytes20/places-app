import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends React.Component {
  state = {
    placeName: ""
  };

  /**
   * handle text change on the places input
   * @return {void}
   */
  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  render() {
    const placeNameEntered = this.state.placeName;
    return (
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
          onPress={() => this.props.placeSubmitHandler(placeNameEntered)}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default PlaceInput;
