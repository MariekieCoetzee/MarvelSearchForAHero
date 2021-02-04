//https://reactnavigation.org/docs/4.x/tab-based-navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "./src/screens/SeachScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import StatsScreen from "./src/screens/StatsScreen";

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: createStackNavigator(
      {
        search: {
          screen: SearchScreen,
          navigationOptions: {
            title: "MARVEL",
            headerTitleAlign: "center",
          },
        },
        character: {
          screen: CharacterScreen,
          params: { character: "", image: "" },
          navigationOptions: {
            title: "MARVEL",
            headerTitleAlign: "center",
          },
        },
      },
      {
        defaultNavigationOptions: {
          //Header customization of the perticular Screen
          headerStyle: {
            backgroundColor: "#42f44b",
          },
          headerTintColor: "#FFFFFF",
          title: "Home",
          //Header title
        },
      }
    ),
    Statistics: createStackNavigator({
      stats: {
        screen: StatsScreen,
      },
    }),
  }),
  // },{
  //   defaultNavigationOptions: ({ navigation }) => ({//
      // tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let IconComponent = Ionicons;
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = `ios-information-circle${focused ?
    //         '' : '-outline'
    //       }`;
    //     } else if (routeName === 'Settings') {
    //       iconName = `ios-checkmark-circle${focused ?
    //         '' : '-outline'
    //       }`;
    //     }
    //     return <IconComponent
    //              name={iconName}
    //              size={25}
    //              color={tintColor}
    //            />;
    //   },
    // }),
    // tabBarOptions: {
    //   activeTintColor: '#42f44b',
    //   inactiveTintColor: 'gray',
    // },
//  }),
});

export default createAppContainer(switchNavigator);
