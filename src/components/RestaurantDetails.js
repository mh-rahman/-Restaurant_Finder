import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantDetails = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        // style={{ width: 50, height: 50 }}
        source={{
          uri: restaurant.image_url,
        }}
        resizeMode={"cover"} // cover or contain its upto you view look
      />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text style={styles.subTextStyle}>
        {restaurant.rating} Stars {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
    // fontSize: 16,
  },
  subTextStyle: {
    fontWeight: "normal",
    // fontSize: 16,
  },
});

export default RestaurantDetails;
