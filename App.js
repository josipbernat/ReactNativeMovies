/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { HomeScreen } from './Screens/HomeScreen'
import { FavoritesScreen } from './Screens/FavoritesScreen'
import { MovieDetailsScreen } from './Screens/MovieDetailsScreen'

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
    Favorites: FavoritesStack,
  }
);

export default createAppContainer(TabNavigator);