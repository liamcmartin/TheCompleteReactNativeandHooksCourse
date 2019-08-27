import React, { useState } from "React"; // use effect allows you to run code once eg at startup for search term (section 10 )
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  //   console.log(props);
  const [term, setTerm] = useState(""); //set default to ''
  const [searchApi, results, errorMsg] = useResults(); // hook created to deal with api

  const filterResultsByPrice = price => {
    //price = '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    //   to fix scroll view issue on android need to set flex of continer to 1 vid 106
    // <View style={{ flex: 1 }}>
    // or you can used an empty element <> instaed of <View> to fix expanding and collapsing view issues
    <>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm} //{newTerm => setTerm(newTerm)} //could just use ={setTerm}
        onTermSubmit={() => searchApi(term)} //{()=> searchApi} //make api requet on submit // could just use ={searchApi}
      />
      {/* <Text>We have found {results.length} results</Text> */}
      {/* need conditional rendering for error msg  */}
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          filtredResults={filterResultsByPrice("$")}
          title='Cost Effective'
          //   navigation={navigation} //passing down navigation prop so we can navigate from a child
        />
        <ResultsList
          filtredResults={filterResultsByPrice("$$")}
          title='Bit Pricer'
          //   navigation={navigation} //passing down navigation prop so we can navigate from a child
        />
        <ResultsList
          filtredResults={filterResultsByPrice("$$$")}
          title='Big Spender'
          //   navigation={navigation} //passing down navigation prop so we can navigate from a child
        />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SearchScreen;
