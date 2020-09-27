import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from 'firebase';

import ContentUpdateScreen from './src/screens/ContentUpdateScreen.js';
import QuizUpdateScreen from './src/screens/QuizUpdateScreen.js';

const firebaseConfig = {
  apiKey: "AIzaSyCapRTwxPlhpAQwpthO9vjKALXttoBPPso",
  authDomain: "edu--change.firebaseapp.com",
  databaseURL: "https://edu--change.firebaseio.com",
  projectId: "edu--change",
  storageBucket: "edu--change.appspot.com",
  messagingSenderId: "346435713180",
  appId: "1:346435713180:web:50c1f8776ef8afdf2cd559",
  measurementId: "G-1R8CN7XHM0"
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={ContentUpdateScreen} name="ContentUpdate" options={{headerShown:false}}/>
          <Stack.Screen component={QuizUpdateScreen} name="QuizUpdate" options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

