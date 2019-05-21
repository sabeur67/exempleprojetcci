
import React, { Component } from 'react';
import { ScrollView,Platform, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import CustomMovieSerieGames_ListItem from '../composants/CustomMovieSerieGames_ListItem';
import { series } from '../ressources/database/mediasData';
import Search from '../composants/Search.js';


export default class Series extends Component {

  onItemClick = (item) => {
    this.props.navigation.navigate('MovieDescription', { movie: item })
  }
  render() {
    return (

      <ScrollView>
         <View>
          <Search />
        </View>
        <FlatList
          data={series}
          keyExtractor={ (item) => item.title.toString()}
          renderItem={({ item }) => <CustomMovieSerieGames_ListItem item={item} onItemClick={this.onItemClick} />} />
      </ScrollView>
    )
  }
}
