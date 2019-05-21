import React from 'react';
import { View, Button, TextInput, Alert,FlatList } from 'react-native';


class Search extends React.Component {

    


    constructor(props) {
        super(props)

        this.searchedText = ""
    }



    // _searchTextInputChanged(text) {
    //     this.searchedText = text ;
    //     // TODO : filtre liste
    //     // https://aboutreact.com/react-native-search-bar-filter-on-listview/
    // }

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




