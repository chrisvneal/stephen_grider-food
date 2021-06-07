import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  // set state
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // function to use axios to retrieve results and store in state via state variable's setter function
  const searchApi = async () => {
    try {
      // capture response frpm yelp api using parameters
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "hawaii",
        },
      });

      // once the response is received, store them in the results piece of state. The data is always in 'response.data' and we want the business object of that data

      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);

      setErrorMessage("Something went wrong!");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
