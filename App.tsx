import React from 'react';
import { AuthProvider } from './src/hooks/auth';
import { Home } from './src/screens/Home'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <StatusBar
        style='light'
        translucent
        backgroundColor='transparent'
      />
      <Home />
    </AuthProvider>
  );
}

