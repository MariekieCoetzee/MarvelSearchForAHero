//https://reactnavigation.org/docs/4.x/tab-based-navigation
// implement later version of navigation
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "./src/screens/SeachScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import StatsScreen from "./src/screens/StatsScreen";
import Icon from "react-native-vector-icons/Ionicons";

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator(
    {
      Home: createStackNavigator(
        {
          search: {
            screen: SearchScreen,
            navigationOptions: {
              headerTitleAlign: "center",
              headerTitle: "MARVEL",
              headerStyle: {
                backgroundColor: "#e62429",
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: "700",
              },
            },
          },
          profile: {
            screen: ProfileScreen,
            params: { character: "", image: "" },
            navigationOptions: {
              headerTitle: "PROFILE",
              headerTitleAlign: "center",
              headerBackTitle: "Back",
              headerStyle: {
                backgroundColor: "#e62429",
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: "700",
              },
            },
          },
        },

        {
          navigationOptions: {
            initialRouteName: "search",
            //Header customization of the perticular Screen

            tabBarIcon: ({ tintColor, focused }) => (
              <Icon
                name={focused ? "home" : "home-outline"}
                size={26}
                style={{
                  width: 30,
                  height: 30,
                  color: tintColor,
                  fontWeight: "600",
                }}
              />
            ),
          },
        }
      ),
      Statistics: createStackNavigator(
        {
          stats: {
            screen: StatsScreen,
            navigationOptions: {
              title: "STATISTICS",
              headerStyle: {
                backgroundColor: "#e62429",
              },
              headerTitleAlign: "center",
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: "700",
              },
            },
            tabBarOptions: {
              activeTintColor: "#e62429",
              inactiveTintColor: "#222624",
              labelStyle: {
                fontSize: 25,
              },
            },
          },
        },
        {
          navigationOptions: {
            title: "Statistics",
            headerStyle: {
              backgroundColor: "#e62429",
            },
            headerTitleAlign: "center",
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "700",
            },

            tabBarIcon: ({ focused, tintColor }) => (
              <Icon
                name={focused ? "ios-bar-chart" : "ios-bar-chart-outline"}
                size={26}
                style={{
                  width: 30,
                  height: 30,
                  color: tintColor,
                  fontWeight: "600",
                }}
              />
            ),
          },
        }
      ),
    },
    {
      tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: "#222624",
        showIcon: true,
        labelStyle: {
          fontSize: 10,
          paddingTop: 5,
        },
        style: {
          paddingTop: 15,
          backgroundColor: "#e62429",
        },
      },
    }
  ),
});
export default createAppContainer(switchNavigator);
