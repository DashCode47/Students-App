import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ClssMatesBox = ({data}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtName}>{data.name}</Text>
      <Image
        style={styles.avatar}
        source={require('../../../assets/images/avatar.png')}
      />
      <Text style={styles.score}>Best Score: 10/10</Text>
    </View>
  );
};

export default ClssMatesBox;

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 145,
    backgroundColor: 'white',
    marginRight: 15,
    borderRadius: 15,
    padding: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 75,
    aspectRatio: 1 / 1,
    borderRadius: 30,
    elevation: 1,
    resizeMode: 'stretch',
  },
  txtName: {
    fontWeight: 'bold',
    color: 'black',
  },
  score: {
    color: 'black',
  },
});
