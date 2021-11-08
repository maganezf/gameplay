import React from 'react';
import { StatusBar } from 'react-native';
import { SignIn } from './src/screens/SignIn';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsIsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  return !fontsIsLoaded ? (
    <AppLoading />
  ) : (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <SignIn />
    </>
  );
}
