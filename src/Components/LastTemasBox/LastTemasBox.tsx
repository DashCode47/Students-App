import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LastTemasBox = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/board-game.png')}
      />
      <Text style={styles.txtMateria}>Materia</Text>
      <Text style={styles.txtTema}>Tema ultimo</Text>
    </View>
  );
};

export default LastTemasBox;

const styles = StyleSheet.create({
  container: {
    width: 160,
    aspectRatio: 1 / 1.4,
    borderRadius: 15,
    backgroundColor: '#3391f3',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    elevation: 18,
    borderBottomWidth: 0.9,
    borderWidth: 0.5,
    marginRight: 20,
  },
  txtMateria: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
  txtTema: {
    fontSize: 15,
    color: 'black',
  },
  img: {
    width: 110,
    height: 110,
    resizeMode: 'cover',
  },
});
