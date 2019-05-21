import React from 'react';
import { View, Button, TextInput, Alert,FlatList } from 'react-native';
import { movies, series, games } from '../ressources/database/mediasData';
import {CustomMovieSerieGames_ListItem} from '../composants/CustomMovieSerieGames_ListItem'

class Search extends React.Component {

    


    constructor(props) {
        super(props)

        this.searchedText = ""
    }



    // _searchTextInputChanged(text) {
    //     this.searchedText = text ;
    //     Alert.alert(this.searchedText )
    // }

    // test_affiche(){
        
    //      Alert.alert('bb');

    //   }

    // onPress={this.test_affiche}
    // onChangeText={(text) => this._searchTextInputChanged(text)}

 
    render() {
        
        return (
            <View>
                <TextInput  placeholder="Entrer un titre"></TextInput>
                <Button title="rechercher" ></Button> 

            </View>
        );
    }
}
export default Search




