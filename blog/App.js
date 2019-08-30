import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
// didnt export default , just export ie named export so need {}
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

const App = createAppContainer(navigator);

//Wraped the navigator inside a custom component
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
