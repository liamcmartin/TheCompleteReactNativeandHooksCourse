import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen </Text>
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        //item is equivalent to individual blog post objects
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1
  }
});

export default IndexScreen;
