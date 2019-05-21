

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import Movies from './components/Movies'
import Series from './components/Series'
import VideoGames from './components/VideoGames'
import MovieDescription from './components/MovieDescription';
import Affiche from './components/Affiche';




const TabNavigator = createMaterialTopTabNavigator({
    Movie: Movies,
    Series: Series,
    Games: VideoGames,
});


const Stacknavigator = createStackNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: () => ({
            title: `Home`
        })
    },
    MovieDescription: {
        screen: MovieDescription,
        navigationOptions: () => ({
            title: `Description`
        })
    },
    Affiche: {
        screen: Affiche,
    }
})

export default createAppContainer(Stacknavigator);






