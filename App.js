import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SeachScreen";
import CharacterScreen from "./src/screens/CharacterScreen";

const navigator = createStackNavigator(
  {
    search: {
      screen: SearchScreen,
      navigationOptions:{
        headerTitleAlign:"center"
      }},
      character: {
        screen: CharacterScreen,
        params:{character:""},
        navigationOptions:{
          headerTitleAlign:"center"
        }
    }
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "Marvel Characters",
    },
  }
);

export default createAppContainer(navigator);
