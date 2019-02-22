/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { FavoritesScreen } from "./src/Screens/FavoritesScreen";
import { MovieDetailsScreen } from "./src/Screens/MovieDetailsScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    MovieDetails: MovieDetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Favorites: FavoritesStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === "Home") {
          return (
            <MaterialIcons name="local-movies" size={32} color={tintColor} />
          );
        } else {
          return <Entypo name="star-outlined" size={32} color={tintColor} />;
        }
      }
    })
  }
);

export default createAppContainer(TabNavigator);
