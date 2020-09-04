import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const Search = (props) => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Search;