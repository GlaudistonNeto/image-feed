import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import PostContext from '../context/PostContext';

const Home = () => {
  const postages = useContext(PostContext); // postages prop from the context

  return (
    <View style={styles.containerOne}>
      <View style={styles.containerTwo}>
        <Text>Home Screen</Text>
      </View>
      <View>
        <Image style={styles.img}
          source={{
            uri: 'https://source.unsplash.com/random/500x'
              + Math.floor((Math.random() * 800) + 500)
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOne: {
    flex: 1
  },
  containerTwo: {
    height: 70,
    paddingTop: 30,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 275
  },
  imgPlacing: {
    flex: 1,
    backgroundColor: '#eee'
  },
  imgBehavior: {
    width: '100%',
    overflow: 'hidden',
    marginBottom: 5,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  imgDescription: {
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgTexts: {
    padding: 5
  },
  evaluationText: {
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Home;
