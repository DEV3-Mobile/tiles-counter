import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import Tile from './components/Tile'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tilesContainer}>
        <Tile title="tile one" />
        <Tile title="tile two" />
        <Tile title="tile three" />
        <Tile title="tile four" />
        <Tile title="tile five" />
        <Tile title="tile six" />
        <Tile title="tile seven" />
        <Tile title="tile eight" />
        <StatusBar style="auto" />
      </View>
    </ScrollView >
    //

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },
});
