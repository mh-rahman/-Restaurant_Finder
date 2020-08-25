import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      {/* <Feather name="search" size={30} /> */}
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
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
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
