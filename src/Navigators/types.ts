import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ReactNode } from "react";

export type RootStackParamList = {
  goBack(): void;
  getParent():any;
  SubjectScreen: undefined;
  Details: {nameTeacher:string[],nameSubject:string[]};
  Quiz:undefined;
  Questions:undefined;
  };
export type InitParamList = {
  Selector: undefined;
  Main:{
      classSelected: string;
 
};
/* export type InitParamList = {
  Selector: undefined;
  Main:{ screen: string; 
    params: { 
      classSelected: string;
  }; 
}; */

  };
  export type UserProfileNavigationProp = NativeStackNavigationProp<RootStackParamList,'Details'>;
  export type QuiznavigationProp = NativeStackNavigationProp<RootStackParamList,'Quiz'>;
  export type QuestionsnavigationProp = NativeStackNavigationProp<RootStackParamList,'Questions'>;
  export type PostQuizProp = NativeStackNavigationProp<RootStackParamList,'SubjectScreen'>;
  export type UpdateSubjectRouteProp = RouteProp<RootStackParamList,'Details'>

  export type GoToMain= NativeStackNavigationProp<InitParamList,'Main'>
 

  export type UpdateStudentProps = RouteProp<BotNav,'Home'>
  export type UpdateSubjectProps = RouteProp<InitParamList,'Main'>

  
  export type BotNav = {
    Home: {classSelected:any},
    Subjects: {classSelected:any};
 
  }

/*  export type ClassDetailNav = NativeStackNavigationProp<ClassStackParamList,'Details'>; 
 
 export type DetailRouteProp = RouteProp<ClassStackParamList,'Details'>; */