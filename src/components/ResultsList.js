import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetails from "./RestaurantDetails";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      {/* <Text>{results.length}</Text> */}
      {/* {
        (results = results
          ? results
          : [{ item: { name: "No restaurants found" } }])
      } */}
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDisplay", { id: item.id })
              }
            >
              <RestaurantDetails restaurant={item} />
            </TouchableOpacity>
          );
          // return <Text style={{ color: "black" }}>{item.name}, </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
