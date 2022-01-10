import React from 'react';
import {Text, View} from 'react-native'
import { StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';



const Card = ({name,description,life,armor}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image style={styles.avatar} source={{uri:'https://i0.wp.com/dmdave.com/wp-content/uploads/2019/03/minotaur-1484121852-1552244563350.jpg?fit=595%2C335&ssl=1'}}/>
            <View style={styles.description}>
                <Text>{description}</Text>
            </View>
            <View style={styles.stats}>
                <FontAwesome5 name="shield-alt" size={24} color="black" />
                <Text>{life}</Text>
                <FontAwesome  style={{paddingLeft:20}} name="heart" size={24} color="black" />
                <Text style={{paddingLeft:2}}>{armor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      backgroundColor: "#eaeaea",
      color: "#20232a",
      borderWidth: 3,
      borderRadius: 6,
      borderColor: "#20232a",
      marginTop: 16,
      paddingVertical: 8,
      marginHorizontal: 10
    },
    title: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: '100%'
    },
    description: {
        flex:1, 
        textAlign: 'center',
        borderTopColor: 'black',
        borderTopWidth: 1,
        width: '100%'
    },
    avatar: {
        width: 66,
        height: 58,
        margin: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    stats: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    }
  });

export default Card;