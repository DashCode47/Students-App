import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator<RootStackParamList>();
import SubjectScreen from '../Screens/SubjectScreen/SubjectScreen';
import DetailsSubjectsScreen from '../Screens/DetailsSubjectScreen/DetailsSubjectsScreen';
import QuizScreen from '../Screens/QuizScreen/QuizScreen';
import Question from '../Screens/QuestionsScreen/Question';
import {RootStackParamList} from './types';

const SubjectsNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SubjectScreen"
        component={SubjectScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={DetailsSubjectsScreen} />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Questions"
        component={Question}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SubjectsNav;
