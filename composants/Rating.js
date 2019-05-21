

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


 
export default class Rating extends Component {
  constructor() {
    super();
    this.state = {
      Default_Rating: 0,
      Max_Rating: 5,
    };


    //Filled Star. You can also give the path from local
    this.Star = 'https://aboutreact.com/wp-content/uploads/2018/08/star_filled.png';
    
    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'https://aboutreact.com/wp-content/uploads/2018/08/star_corner.png';
  }

  UpdateRating(key) {
    this.setState({ Default_Rating: key });
  }

  render() {
    let React_Native_Rating_Bar = [];
   
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.MainContainer}>
        
        <Text style={styles.textStyleSmall}>Noter</Text>
      
        <View style={styles.childView}>{React_Native_Rating_Bar}</View>
        <Text style={styles.textStyle}>
     
          {this.state.Default_Rating} / {this.state.Max_Rating}
        </Text>
      
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:'black',
   //marginTop:5
   paddingTop:4,
   paddingBottom:4
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFD700',
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFD700'
  },
});