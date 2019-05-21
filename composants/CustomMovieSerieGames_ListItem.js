import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'


export default class CustomMovieSerieGames_ListItem extends Component {


    render() {
        const { item, onItemClick } = this.props
        return (

            <TouchableOpacity onPress={() => onItemClick(item)}>

                <View style={styles.container}>
                    <Image source={item.imgSrc} style={styles.image}></Image>

                    <View style={styles.infosRightSide}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={{ fontSize: 14 }}>{item.date}</Text>
                    </View>
                </View>

            </TouchableOpacity>

        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgray'
    },

    image: {
        width: 100,
        height: 100,
        margin: 5,
        resizeMode: 'contain'
    },

    infosRightSide: {
        flex: 1,
        marginTop: 5
    },

    title: {
        fontSize: 18,
        color: 'black'

    }
}









