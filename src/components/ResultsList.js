import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ headerText, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{headerText}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
