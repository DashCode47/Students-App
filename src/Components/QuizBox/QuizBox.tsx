import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {QuiznavigationProp} from '../../Navigators/types';

interface IQuiz {
  materia: string;
  img: ImageSourcePropType;
}
const LastTemasBox = ({materia, img}: IQuiz) => {
  const navigation = useNavigation<QuiznavigationProp>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Quiz')}>
      <Image style={styles.img} source={img} />
      <Text style={styles.txtMateria}>{materia}</Text>
      <Text style={styles.txtTema}>Tema ultimo</Text>
    </TouchableOpacity>
  );
};

export default LastTemasBox;

const styles = StyleSheet.create({
  container: {
    width: 160,
    aspectRatio: 1 / 1.4,
    borderRadius: 15,
    backgroundColor: '#CBE5F9',
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
