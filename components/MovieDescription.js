import React, { Component } from 'react'
import { WebView,  View, Text, Image, TouchableOpacity } from 'react-native';
import Rating from '../composants/Rating'
import { movies,series,games } from '../ressources/database/mediasData';



export default class MovieDescription extends Component {


    constructor(props) {
        super(props)

        this.state = {
            movie: this.props.navigation.getParam('movie')
        }
    }


    render() {

        const { movie } = this.state

        return (
            <View style={styles.container}>

                <View style={{ height: 60, backgroundColor: 'black', justifyContent: 'center' }}>
                    <Text style={styles.title} selectable>{movie.title}</Text>
                </View>


                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <View style={{ flex: 1, backgroundColor: 'lightgray', resizeMode: 'contain'  }}>
                        <TouchableOpacity  data={movies} data={series} date ={games} onPress={() => this.props.navigation.navigate('Affiche',  { movie })}>

                            <Image
                                style={{ width: '100%', height: '100%'}}
                                source={movie.imgSrc} />

                        </TouchableOpacity>
                    </View>

                   

                    <View style={{ flex:1, paddingRight: 5, paddingLeft: 18, backgroundColor: 'lightgray', justifyContent: 'center' }}>
        
                        <View>
                        <Text style={styles.smalltitle} selectable >Date de sorite :</Text>
                        <Text style={styles.texte} selectable> {movie.date}</Text>
                        <Text style={styles.smalltitle} selectable>Réalisé par :</Text>
                        <Text style={styles.texte} selectable> {movie.réalisateurs}</Text>
                        <Text style={styles.smalltitle} selectable>Acteurs principales : </Text>
                        <Text style={styles.texte} selectable>{movie.actors}</Text>
                        <Text style={styles.smalltitle} selectable>Synopsis : </Text>
                        <Text style={styles.texte} selectable>{movie.synopsis}</Text>
                        </View>
                       
                    </View>
                   

                </View>
                <Rating style={{ flex: 1 }} />

                <View style={{ flex: 1 }}>

                    <WebView
                        scalesPageToFit={true}
                        bounces={false}
                        javaScriptEnabled
                        source={{
                            html: `
                                <!DOCTYPE html>
                                <html>
                                <head>
                                <style>
                                #bgvid {
                                    position: fixed; right: 0; bottom: 0;
                                    min-width: 100%; min-height: 100%;
                                    width: auto; height: auto; z-index: -100;
                                  }
                                  </style>
                                </head>
                                
                                <body style='margin:0px'>
                                    <div><iframe  id="bgvid"  src="${movie.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div> 
                                </body>
                                </html>
                        `,
                        }}
                        automaticallyAdjustContentInsets={false}
                    >
                    </WebView>
                </View>
            </View>)
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    title: {
        fontSize: 20,
        color: '#FFD700',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    smalltitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black'
    },
    texte: {
        color: 'black',
       fontSize: 12
       
    },
}

