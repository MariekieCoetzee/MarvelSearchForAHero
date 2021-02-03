import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SeachScreen";

const navigator = createStackNavigator(
  {
    search: {
      screen: SearchScreen,
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
