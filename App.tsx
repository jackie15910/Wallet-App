import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Welcome from './screens/Welcome';

export default function App() {
  let [fontsLoaded] = useFonts({ //fetches fonts
    "Lato-Bold": require(".assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require(".assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) { //Checks if fonts are loaded otherwise loading screen
    return <AppLoading />;
  }

  return (
    <Welcome />
  );
}