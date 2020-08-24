import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("None");

  const searchApi = async () => {
    setStatus("Searching");
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: term,
        location: "New York",
      },
    });
    setResults(response.data.businesses);
    setStatus("Search Complete");
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        // onTermSubmit={() => console.log(`${term}`)}
        onTermSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>{status}</Text>
      <Text>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
