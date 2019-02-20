import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Constants from '../Constants/Constants.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

const movieRow = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: Constants.IMAGE_POSTER_PATH(props.item.poster_path) }} style={styles.photo} />
            <Text style={styles.text}>
                {props.item.title}
            </Text>
        </View>
    );
}

export default movieRow;