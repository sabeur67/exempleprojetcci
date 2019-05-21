import React, { Component } from 'react';
import {  ImageBackground } from 'react-native';


export default class Affiche extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movie: this.props.navigation.getParam('movie')
    }
  }


  render() {

    const { movie } = this.state

    return (

      <ImageBackground source={movie.imgSrc}
        resizeMode='contain' style={{ width: '100%', height: '100%' }}>
      </ImageBackground>

    )
  }
}




