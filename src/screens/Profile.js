import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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

export default Profile;