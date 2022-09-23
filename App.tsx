import React from 'react';
import IntroScreen from './src/Screens/HomeScreen/IntroScreen';
import HomeNav from './src/Navigators/HomeNav';
import awsconfig from './src/aws-exports';
import {Amplify} from 'aws-amplify';
Amplify.configure(awsconfig);
import Client from './src/Apollo/Client';
import AuthContextProvider from './src/Context/Context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator<InitParamList>();
import {InitParamList} from './src/Navigators/types';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <AuthContextProvider>
      <Client>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Selector"
              component={IntroScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Main"
              component={HomeNav}
              /* options={{headerShown: false}} */
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Client>
    </AuthContextProvider>
  );
};

export default App;
