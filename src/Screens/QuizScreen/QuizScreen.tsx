import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigators/types';
import {QuestionsnavigationProp} from '../../Navigators/types';

const QuizScreen = () => {
  const navigation = useNavigation<QuestionsnavigationProp>();
  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
          height: 60,
          elevation: 27,
          borderBottomWidth: 1,
        },
      });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.arrowImg}
          source={require('../../../assets/images/arrow-left.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.img}
        source={require('../../../assets/images/brain.png')}
      />
      <Text style={styles.title}>Estas listo?</Text>
      <Text style={styles.subtitle}>
        Responde la mayor cantidad de preguntas correctas e incrementa tu
        ranking
      </Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('Questions')}>
        <View style={styles.hl}></View>
        <Text style={styles.btn}>Empezar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3391f3',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  arrowImg: {
    width: 55,
    height: 55,
  },
  img: {
    width: 195,
    height: 195,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 100,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 120,
  },
  btnContainer: {
    height: 60,
    borderRadius: 15,
    width: 190,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 110,
    elevation: 18,
  },
  btn: {
    fontSize: 28,
    color: '#8635F5',
    fontWeight: 'bold',
  },
  hl: {
    backgroundColor: '#F5EDEB',
    width: '100%',
    height: 10,
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 5,
  },
});
