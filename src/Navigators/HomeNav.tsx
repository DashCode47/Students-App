import {StyleSheet, Text, View} from 'react-native';
import React, {createContext} from 'react';
import AuthContextProvider from '../Context/Context';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Client from '../Apollo/Client';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SubjectsNav from './SubjectsNav';
import {BotNav} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
import {useRoute} from '@react-navigation/native';
import {UpdateSubjectProps} from '../Navigators/types';
import awsconfig from '../aws-exports';
import {Amplify} from 'aws-amplify';
Amplify.configure(awsconfig);

const Tab = createBottomTabNavigator<BotNav>();

interface IClass {
  children: React.ReactNode;
}

type SubContextType = {
  classSelected: string;
};

export const SubjectContext = createContext<SubContextType>({
  classSelected: '',
});

const HomeNav = ({children}: IClass) => {
  const route = useRoute<UpdateSubjectProps>();
  const classSelected = route.params?.classSelected;
  return (
    <SubjectContext.Provider value={{classSelected}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
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
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#3391f3',
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Subjects"
          component={SubjectsNav}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="list-alt" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </SubjectContext.Provider>
  );
};

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Full name',
    },
    {
      label: 'Family Name',
      key: 'family_name',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Full name',
    },

    {
      label: 'Mail',
      key: 'username',
      required: true,
      displayOrder: 3,
      type: 'string',
      placeholder: 'Username/handle',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
      placeholder: 'Password',
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: '#5c78ff',
    borderRadius: 100,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: 'blue',
  },
};

export default withAuthenticator(HomeNav, {signUpConfig, theme: customTheme});
