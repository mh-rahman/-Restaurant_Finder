import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

const LocationBar = ({ location, onLocationChange, onLocationSubmit }) => {
  return (
    <View style={styles.background}>
      {/* <Feather name="search" size={30} /> */}
      <Entypo name="location" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="New York"
        autoCorrect={false}
        autoCapitalize="words"
        value={location}
        onChangeText={onLocationChange}
        onEndEditing={onLocationSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginVertical: 10,
    backgroundColor: "#ddd",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default LocationBar;
