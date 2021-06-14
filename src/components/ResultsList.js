import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ headerText }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{headerText}</Text>
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
