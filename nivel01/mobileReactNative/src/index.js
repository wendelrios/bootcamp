import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App(){
  return <View style={styles.container}/>;
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#7159c1',
  },
});