import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import CustomMovieSerieGames_ListItem from '../composants/CustomMovieSerieGames_ListItem';
import { movies } from '../ressources/database/mediasData';
import Search from '../composants/Search.js';


export default class Movies extends Component {

  onItemClick = (item) => {
    
    this.props.navigation.navigate('MovieDescription', { movie: item });
  }


  render() {
    return (

      <ScrollView>

        <View>
          <Search />
        </View>

        <FlatList
          data={movies}
          keyExtractor={ (item) => item.title.toString()}
          renderItem={({ item }) => <CustomMovieSerieGames_ListItem item={item} onItemClick={this.onItemClick} />} />
      
      </ScrollView>
    )
  }
}
