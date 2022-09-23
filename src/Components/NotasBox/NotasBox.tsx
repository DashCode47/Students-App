import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NotasBox = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', paddingRight: 10}}>
        <Text style={styles.mes}>Sept</Text>
        <Text style={styles.num}>27</Text>
      </View>

      <Text style={styles.text}>Actividad de desarrolo num1</Text>
      <Text style={styles.nota}>18/20</Text>
    </View>
  );
};

export default NotasBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.7,
    marginBottom: 18,
  },
  mes: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  num: {
    fontSize: 15,
    color: 'maroon',
    fontWeight: 'bold',
  },
  nota: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  text: {
    color: 'black',
    fontSize: 17,
  },
});
