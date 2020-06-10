import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';
import Home from './src/Home';
export default function App() {
  const [fontsLoaded] = useFonts ({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading /> 
  }
  return (
    
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1E20',
  },
});
