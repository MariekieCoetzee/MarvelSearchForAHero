//https://reactnavigation.org/docs/4.x/tab-based-navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "./src/screens/SeachScreen";
import CharacterScreen from "./src/screens/ComicScreen";
import StatsScreen from "./src/screens/StatsScreen";

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: createStackNavigator(
      {
        search: {
          screen: SearchScreen,
          navigationOptions: {
            headerTitleAlign: "center",
          },
        },
        character: {
          screen: CharacterScreen,
          params: { character: "", image: "" },
          navigationOptions: {
            headerTitleAlign: "center",
            headerBackTitle: "Back",
          },
        },
      },
      {
        defaultNavigationOptions: {
          initialRouteName: "search",
          title: "MARVEL",
          //Header customization of the perticular Screen
          headerStyle: {
            backgroundColor: "#e62429",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "700",
          },
        },
      }
    ),
    Statistics: createStackNavigator(
      {
        stats: {
          screen: StatsScreen,

          tabBarOptions: {
            activeTintColor: "#42f44b",
            inactiveTintColor: "black",
            labelStyle: {
              fontSize: 25,
            },
          },
          //  tabBarIcon: ({ tintColor }) => <Ionicons name='ios-time' size={26} style={{ color: tintColor }} />
        },
      },
      {
        defaultNavigationOptions: {
          title: "Character Statistics",
          headerStyle: {
            backgroundColor: "#e62429",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "700",
          },
          tabBarOptions: { style: { fontSize: 25 } },
        },
      }
    ),
  }),
});

export default createAppContainer(switchNavigator);
