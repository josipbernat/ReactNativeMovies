/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomeScreen} from './src/Screens/HomeScreen';
import {FavoritesScreen} from './src/Screens/FavoritesScreen';
import {MovieDetailsScreen} from './src/Screens/MovieDetailsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    MovieDetails: MovieDetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const FavoritesStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MovieDetails: MovieDetailsScreen,
  },
  {
    initialRouteName: 'Favorites',
  },
);

FavoritesStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Favorites: FavoritesStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;

        if (routeName === 'Home') {
          return (
            <MaterialIcons name="local-movies" size={32} color={tintColor} />
          );
        } else {
          return <Entypo name="star-outlined" size={32} color={tintColor} />;
        }
      },
    }),
  },
);

export default createAppContainer(TabNavigator);
