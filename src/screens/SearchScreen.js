import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  // create state for the term being searched
  const [term, setTerm] = useState("");

  // create state to store results from the search
  const [results, setResults] = useState([]);

  // function to use axios to retrieve results and store in state via state variable's setter function

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "hawaii",
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
