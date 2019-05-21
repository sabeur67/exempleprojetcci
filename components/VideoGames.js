import React, { Component } from 'react';
import { ScrollView, View, FlatList} from 'react-native';
import CustomMovieSerieGames_ListItem from '../composants/CustomMovieSerieGames_ListItem';
import { games } from '../ressources/database/mediasData';
import Search from '../composants/Search.js';


export default class VideoGames extends Component {

  onItemClick = (item) => {
    this.props.navigation.navigate('MovieDescription', {movie: item })
  }
  render() {
    return (

      <ScrollView>
         <View>
        
          <Search />
        </View>
        <FlatList
          data={games}
          keyExtractor={ (item) => item.title.toString()}
          renderItem={({ item }) => <CustomMovieSerieGames_ListItem item={item} onItemClick={this.onItemClick} />} />
      </ScrollView>
    )
  }
}
