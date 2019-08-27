import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  //Create the result piece of state
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");
  //   console.log(id);
  //   console.log(result);

  //Helper function to get results
  const getResult = async id => {
    //GET https://api.yelp.com/v3/businesses/{id}
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  //If we pass [] as the second argument to useEffect it will only render once
  useEffect(() => {
    getResult(id);
  }, []);

  //Need to check if there is no result yet because rendering a result of null will casue an error
  if (!result) {
    return null; //returns null for entire compoent which is okay
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo} // using photo URL as the key
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 120,
    width: 250
  }
});

export default ResultsShowScreen;
