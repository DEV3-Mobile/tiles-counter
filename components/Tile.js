import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Tile = props => {
  const [pressCounter, setPressCounter] = useState(0);
  function pressHandler() {
    console.log("pressed " + props.title);
    setPressCounter((currentPressCounter) => currentPressCounter + 1);
  }
  return (
    <TouchableOpacity style={styles.tile} activeOpacity={0.7} onPress={pressHandler}>
      {console.log("render " + props.title)}
      <View>
        <Text style={styles.tileHeader}>{props.title}</Text>
        <Text style={styles.tileText}>{pressCounter}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  tile: {
    flexBasis: '46%',//200
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
    padding: 10,
  },
  tileHeader: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  tileText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default Tile;