import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const RestaurantScreen = ({ navigation }) => {
  const [imageList, setImageList] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurantDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setImageList(response.data);
  };

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  if (!imageList) {
    return null;
  }

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={imageList.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 250,
    width: 250,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
});

export default RestaurantScreen;
