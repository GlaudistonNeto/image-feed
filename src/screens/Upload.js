import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const Upload = (props) => {
  return (
    <View style={styles.container}>
      <Text>Upload Screen</Text>
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

export default Upload;