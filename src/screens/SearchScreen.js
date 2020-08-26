import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import LocationBar from "../components/LocationBar";
import ResultsList from "../components/ResultsList";
import useRestaurants from "../hooks/useRestaurants";
import { FlatList } from "react-native-gesture-handler";

// const SearchScreen = ({ navigation }) => {
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("New York");
  const [searchApi, results, status, errorMsg] = useRestaurants();

  const filterResultsByPrice = (price) => {
    // price = '$' or '$$' or '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={{ flex: 1 }}>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term, location)}
      />
      <LocationBar
        location={location}
        onLocationChange={setLocation}
        onLocationSubmit={() => searchApi(term, location)}
      />
      {errorMsg ? (
        <Text style={{ color: "red", marginLeft: 15 }}>{errorMsg}</Text>
      ) : null}
      {status ? <Text style={{ marginLeft: 15 }}>{status}</Text> : null}
      {/* <Text>{status}</Text> */}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
          // navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
          // navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
          // navigation={navigation}
        />
        <ResultsList
          title="Extravagant Spender"
          results={filterResultsByPrice("$$$$")}
          // navigation={navigation}
        />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
