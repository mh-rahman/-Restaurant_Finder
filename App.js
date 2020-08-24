import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      // Some options we want for every different screen
      // In general, we can use this to customize the header on different screen
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
// Anything exported by App.js will be automatically displayed on screen by react-native. So always have to expose some component from this file.
// But we dont have any component in this file.
// createAppContainer will create a default (react) component and displays whatever content navigator is producing
