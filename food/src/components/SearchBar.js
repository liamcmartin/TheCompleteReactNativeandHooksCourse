import React from "React";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.searchIcon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        style={styles.textInput}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)} // could also just use onChangeText={onTermChange}
        onEndEditing={() => onTermSubmit()} // could also just use onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50, //pix
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    marginBotttom: ""
  },
  textInput: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18 //default 14
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
