import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import NotasBox from '../../Components/NotasBox/NotasBox';
import {useRoute} from '@react-navigation/native';
import {UpdateSubjectRouteProp} from '../../Navigators/types';

const DetailsSubjectsScreen = () => {
  const route = useRoute<UpdateSubjectRouteProp>();
  const {nameSubject} = route.params;
  const {nameTeacher} = route.params;

  return (
    <LinearGradient colors={['#feb845', '#EFF4F6']} style={styles.container}>
      <Text style={styles.title}>{nameSubject}</Text>
      <Text style={styles.teacher}>{nameTeacher}</Text>

      <NotasBox />
      <NotasBox />
    </LinearGradient>
  );
};

export default DetailsSubjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  teacher: {
    fontWeight: '300',
    color: 'black',
    fontSize: 20,
    marginBottom: 45,
  },
});
