import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Card  from './components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bossContainer}>
        <Card style= {styles.bossCard} name={"brutus, the brutal one"} description={"totally brutal"} life={10} armor={10}/>
      </View>
      <View style={styles.board}>
        board
      </View>
        <View style={styles.playerContainer} >
          <Card style= {styles.card} name={"brutus, the brutal one"} description={"totally brutal"} life={10} armor={10}/>
          <Card style= {styles.card}  name={"brutus, the brutal one"} description={"totally brutal"} life={10} armor={10}/>
          <Card style= {styles.card}  name={"brutus, the brutal one"} description={"totally brutal"} life={10} armor={10}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'space-around',
    alignItems: 'stretch'
  },
  bossContainer: {
    flex:1,
    maxWidth: '30%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  board:{
    flex:2,
    backgroundColor: 'darkgrey'
  },
  playerContainer: {
    flex:1,
    flexDirection: 'row',
    alignContent: 'space-around',
    maxHeight: 200
  },
  card: {
    height: 50,
    width: 50
  },
  bossCard: {
    height: 50,
    maxWidth: 50
  }
});
